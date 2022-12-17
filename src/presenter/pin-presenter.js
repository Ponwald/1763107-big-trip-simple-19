import PinTrailView from "../view/pin-trail-view.js";
import { render } from "../render.js";

export default class PinPresenter {
  pinTrailComponent = new PinTrailView();

  constructor({ pinTrailContainer, pointModel }) {
    this.pinTrailContainer = pinTrailContainer;
    this.pointModel = pointModel;
  }
  init() {
    this.pinTrail = [...this.pointModel.getPoints()];

    for (let i = 0; i < this.pinTrail.length; i++) {
      render(
        new PinTrailView({ pin: this.pinTrail[i] }),
        this.pinTrailContainer.getElement()
      );
    }
  }
}
