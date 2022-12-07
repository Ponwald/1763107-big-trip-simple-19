import {createElement} from '../render.js';

function createCreatFormView(){
  return '<div class="create-form">Create Form</div>'
}

export default class CreatFormView{
  getTemplate(){
    return createCreatFormView();
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
