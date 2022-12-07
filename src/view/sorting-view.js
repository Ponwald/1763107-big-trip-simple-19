import {createElement} from '../render.js';
// чтобы было удобнее редактировать класс, пишем отдельно
function createSortingView(){
  return '<div class="trip-controls__filters">Sorting</div>'
}

export default class SortingView {
  getTemplate(){
    return createSortingView();
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
