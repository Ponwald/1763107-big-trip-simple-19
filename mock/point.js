import {
  getMultipleRandomArrayElements,
  getRandomArrayElement,
  getRandomInteger,
} from "./utils.js";
import { getOffersPointType } from "../utils/common.js";
import { MAX_OFFERS, PointsAmount } from "./const.js";
import { TYPEPOINT } from "../src/const.js";
import { offersByType } from "./offer.js";
import { destination } from "./destination.js";
//взято для генирации id из - https://github.com/ai/nanoid/blob/HEAD/README.ru.md
import { nanoid } from "nanoid";

const generatePoint = () => {
  const day = getRandomInteger(1, 31);
  const hour = getRandomInteger(0, 23);
  const minute = getRandomInteger(0, 60);

  const pointType = getRandomArrayElement(TYPEPOINT);

  const pointTypeOffers = getOffersPointType(pointType, offersByType);

  const getOffersIds = () =>
    getMultipleRandomArrayElements(pointTypeOffers, 0, MAX_OFFERS).map(
      (item) => item.id
    );

  const getDestinationId = () => getRandomArrayElement(destination).id;

  return {
    basePrice: getRandomInteger(100, 1500),
    datefrom: new Date(2023, 0, day, hour, minute),
    dateTo: new Date(
      2023,
      getRandomInteger(0, 1),
      day + getRandomInteger(0, 1),
      hour + getRandomInteger(0, 12, minute + getRandomInteger(0.3))
    ),
    destination: getDestinationId(),
    id: nanoid(),
    offers: getOffersIds(),
    type: pointType,
  };
};

const generatePoints = () =>
  Array.from(
    { length: getRandomInteger(PointsAmount.MIN, PointsAmount.MAX) },
    generatePoint
  );

export { generatePoints };
