import dayjs from "dayjs";

const isPointDateInFuture = (point) => !dayjs().isAfter(point.dateFrom, "D");

const filteredPointsByDay = (points) =>
  points.filter((points) => isPointDateInFuture(points));

export { filteredPointsByDay };
