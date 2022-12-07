import {createElement} from '../render.js';

function createRedactFormView(){
  return '<div class="create-form">Redaction Form</div>'
}

export default class RedactFormView{
  getTemplate(){
    return createRedactFormView();
  }
  getElement(){
    if(!this.element){
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
