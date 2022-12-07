import PinTrailView from '../view/pin-trail-view.js';
import {render} from '../render.js';

export default class PinPresenter {
  pinTrailComponent = new PinTrailView();

  constructor({pinTrailContainer}){
    this.pinTrailContainer = pinTrailContainer;
  }
  init(){
    for (let i = 0; i < 3; i++) {
      render(new PinTrailView(), this.pinTrailContainer)
    }
  }
}
