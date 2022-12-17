import { getRandomArrayElement } from "../src/utils.js";
import { TYPEPOINT, DESTINATION, OFFER } from "../src/const.js";

const pointMock = [
  {
    type: getRandomArrayElement(TYPEPOINT),
    destination: DESTINATION.id,
    base_price: 222,
    date_from: "2019-07-10T22:55:56.845Z",
    date_to: "2019-07-11T11:22:13.375Z",
    offers: [OFFER.id],
  },
  {
    type: getRandomArrayElement(TYPEPOINT),
    destination: DESTINATION.id,
    base_price: 333,
    date_from: "2019-07-10T22:55:56.845Z",
    date_to: "2019-07-11T11:22:13.375Z",
    offers: [OFFER.id],
  },
  {
    type: getRandomArrayElement(TYPEPOINT),
    destination: DESTINATION.id,
    base_price: 444,
    date_from: "2019-07-10T22:55:56.845Z",
    date_to: "2019-07-11T11:22:13.375Z",
    offers: [OFFER.id],
  },
];

function getRandomPoint() {
  return getRandomArrayElement(pointMock);
}
export { getRandomPoint };
