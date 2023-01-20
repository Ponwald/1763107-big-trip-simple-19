// взято из - https://day.js.org/docs/en/display/format
// добавление блокировки кнопки в фильтре, если нет точек
import dayjs from "dayjs";

const isPointDateInFuture = (point) => !dayjs().isAfter(point.dateFrom, "D");

const filter = (points) => points.filter((point) => isPointDateInFuture(point));

export { filter };
