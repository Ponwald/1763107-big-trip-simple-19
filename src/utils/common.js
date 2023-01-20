// Отвечает за сортировку и перерисовку маршрута
const getOffersPointType = (pointType, offersByType) =>
  offersByType.find((offer) => offer.type === pointType).offers;

const updateItem = (item, update) =>
  item.map((item) => (item.id === update.id ? update : item));

export { getOffersPointType, updateItem };
