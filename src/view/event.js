import AbstractView from '../framework/view/abstract-view.js';
import { createElement } from '../render.js';
import {humanizeEventDate} from '../utils.js';


function createEvent(point, offers){

  const dateStartHours = humanizeEventDate(point.date_from, 'HH:mm'); // 00:00
  const dateStartDate = humanizeEventDate(point.date_from, 'MMM:DD'); // MON 00
  const dateEndHours = humanizeEventDate(point.date_to, 'HH:mm');

  return (
    `<li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="${dateStartDate}">
          ${dateStartDate}
        </time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${point.type}.png" alt="Event type icon">
        </div>
        <h3 class="event__title"> ${point.type} ${point.destination}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time"
            datetime="${dateStartHours}">${dateStartHours}</time>
            —
            <time class="event__end-time"
            datetime="${dateEndHours}">${dateEndHours}</time>
          </p>
          <p class="event__duration">40М</p>
        </div>
        <p class="event__price">
        € <span class="event__price-value">${point.base_price}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          ${createInformationForOffers(filterOffers(offers, point.type))}
        </ul>
        <button class="event__favorite-btn
        event__favorite-btn--active" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>
  `);
}

function filterOffers (offers, type){
  const filtredOffer = offers.find((offer) => offer.type === type);
  return filtredOffer;
}

function createInformationForOffers (offersForInformation) {
  return offersForInformation.offers.map((offer) =>
    `<li class="event__offer">
      <span class="event__offer-title">${offer.title}</span>
      +€
      <span class="event__offer-price">${offer.price}</span>
     </li>`).join('');
}

export default class PointView extends AbstractView{
  #element = null;
  constructor({point, onPointClick, offers}){
    super();
    this.point = point;
    this.offers = offers;
    this.onPointClick = onPointClick;
    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.onPointClick);
  }

  get template (){
    return createEvent(this.point, this.offers);
  }

  get element () {
    if (!this.#element){
      this.#element = createElement(this.template);
    }
    return this.#element;
  }
}
