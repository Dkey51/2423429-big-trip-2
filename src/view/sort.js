import AbstractView from '../framework/view/abstract-view.js';
import { sortType } from '../const.js';

function createSortTemplate () {

  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      <div class="trip-sort__item  trip-sort__item--${sortType.DEFAULT}">
        <input id="sort-${sortType.DEFAULT}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sortType.DEFAULT}">
        <label class="trip-sort__btn" for="sort-${sortType.DEFAULT}">${sortType.DEFAULT}</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--${sortType.EVENT}">
        <input id="sort-${sortType.EVENT}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sortType.EVENT}" disabled>
        <label class="trip-sort__btn" for="sort-${sortType.EVENT}">${sortType.EVENT}</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--${sortType.TIME}">
        <input id="sort-${sortType.TIME}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sortType.TIME}">
        <label class="trip-sort__btn" for="sort-${sortType.TIME}">${sortType.TIME}</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--${sortType.PRICE}">
        <input id="sort-${sortType.PRICE}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sortType.PRICE}" checked>
        <label class="trip-sort__btn" for="sort-${sortType.PRICE}">${sortType.PRICE}</label>
      </div>

      <div class="trip-sort__item  trip-sort__item--${sortType.OFFER}">
        <input id="sort-${sortType.OFFER}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sortType.OFFER}" disabled>
        <label class="trip-sort__btn" for="sort-${sortType.OFFER}">${sortType.OFFER}s</label>
      </div>
      </form>
  `);
}

export default class SortView extends AbstractView {
  #handleSortTypeChange = null;

  constructor({onSortTypeChange}) {
    super();
    this.#handleSortTypeChange = onSortTypeChange;
    this.element.addEventListener('change', this.#sortTypeChangeHandle);
  }

  get template() {

    return createSortTemplate();
  }

  #sortTypeChangeHandle = (evt) => {

    this.#handleSortTypeChange(evt.target.value);
  };
}
