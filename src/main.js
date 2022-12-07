import FiltersView from './view/filters-view.js';
import CreatFormView from './view/creat-form-view.js';
import RedactFormView from './view/redact-form-view.js';
import SortingView from './view/sorting-view.js';
import PinPresenter from './presenter/pin-presenter.js';
import {render} from './render.js';


const filtersElement = document.querySelector('.trip-controls__filters');
const eventsElement = document.querySelector('.trip-events');
const pinPresenter = new PinPresenter ({pinTrailContainer: eventsElement })




render (new FiltersView(), filtersElement);
render (new RedactFormView(), eventsElement);
render (new CreatFormView(), eventsElement);
render (new SortingView(), eventsElement);

pinPresenter.init();



