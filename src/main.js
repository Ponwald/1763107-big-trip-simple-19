import FiltersView from "./view/filters-view.js";
import FormView from "./view/form-view.js";
import SortingView from "./view/sorting-view.js";
import PinPresenter from "./presenter/pin-presenter.js";
import PointModel from "./model/point-model.js";
import { render } from "./render.js";

const filtersElement = document.querySelector(".trip-controls__filters");
const eventsElement = document.querySelector(".trip-events");
const siteMainElement = document.querySelector(".main");
const pointModel = new PointModel();
const pinPresenter = new PinPresenter({
  pinTrailContainer: siteMainElement,
  pointModel,
});

render(new FiltersView(), filtersElement);
render(new SortingView(), eventsElement);
render(new FormView(), eventsElement);

pinPresenter.init();
