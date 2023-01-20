import {
  getMultipleRandomArrayElements,
  getRandomArrayElement,
  getRandomInteger,
} from "./unils.js";
import { MAX_PICTURES, descriptions, cities } from "./const.js";

const generatePicture = () => ({
  src: `https://placekitten.com/640/360?random=${getRandomInteger(100, 500)}`,
  descriptions: getRandomArrayElement(descriptions),
});

const generateDescription = () =>
  getMultipleRandomArrayElements(descriptions, 1, 3).join(" ");

const generatePictures = () =>
  Array.from({ length: getRandomInteger(1, MAX_PICTURES) }, generatePicture);

const generateDestination = (name, id) => ({
  id,
  descriptions: generateDescription(),
  name,
  pictures: generatePictures(),
});

const destination = [];
cities
  .slice()
  .sort(() => 0.5 - Math.random())
  .forEach((city, id) => destinations.push(generateDestination(city, id)));

export { destination };
