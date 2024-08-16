import dayjs from 'dayjs';

const humanizeEventDate = (date, format) => date ? dayjs(date).format(format) : '';


function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomInteger (a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomBoolean(){
  return Math.random() < 0.5;
}

export {getRandomArrayElement, getRandomInteger, humanizeEventDate, getRandomBoolean};
