import { offersByType } from "../mock/offer.js";
export default class PointsModel {
  #offers = offersByType();

  get offers() {
    return this.#offers;
  }
}
