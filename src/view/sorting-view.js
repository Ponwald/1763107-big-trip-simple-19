import { createElement } from "../render.js";
import { SORTLIST } from "../const.js";

// чтобы было удобнее редактировать класс, пишем отдельно
function createSortingView() {
  const sortListTemplate = SORTLIST.map(
    (item) => `<div class="trip-sort__item  trip-sort__item--${item}">
   <input id="sort-${item}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${item}">
   <label class="trip-sort__btn" for="sort-${item}">${toUpperCase(item)}</label>
 </div>`
  ).join("");
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
  ${sortListTemplate}
</form>`;
}

export default class SortingView {
  getTemplate() {
    return createSortingView();
  }
  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }
  // для удаления элемента
  removeElement() {
    this.element = null;
  }
}
