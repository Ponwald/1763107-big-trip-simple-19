import {createElement} from '../render.js';
// чтобы было удобнее редактировать класс, пишем отдельно
function createFiltersView(){
  return '<div class="trip-controls__filters">Filters</div>'
}

export default class FiltersView {
  getTemplate(){
    return createFiltersView();
  }
  getElement(){
    if(!this.element){
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }
  // для удаления элемента
  removeElement() {
    this.element = null;
  }
}

