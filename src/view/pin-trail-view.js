import {createElement} from '../render.js';
// чтобы было удобнее редактировать класс, пишем отдельно
function createPinTrailView(){
  return '<div class="trail__pin">Pin</div>'
}

export default class PinTrailView {
  getTemplate(){
    return createPinTrailView();
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

