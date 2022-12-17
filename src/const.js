const TYPEPOINT = [
  "taxi",
  "bus",
  "train",
  "ship",
  "drive",
  "flight",
  "check-in",
  "sightseeing",
  "restaurant",
];

const DESTINATION = {
  id: 1,
  description:
    "Chamonix, is a beautiful city, a true asian pearl, with crowded streets.",
  name: "Chamonix",
  pictures: [
    {
      src: "http://picsum.photos/300/200?r=0.0762563005163317",
      description: "Chamonix parliament building",
    },
  ],
};

const OFFER = {
  id: 1,
  title: "Upgrade to a business class",
  price: 120,
};

const SORTLIST = ["day", "event", "time", "price", "offers"];

export { TYPEPOINT };
export { DESTINATION };
export { OFFER };
