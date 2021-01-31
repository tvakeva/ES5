// Object.getOwnPropertyNames()

var mars = {
  name: "Mars",
  moons: ["Phobos", "Deimos"],
  temperature: -63,
  distance: 1.524
};

var properties = Object.getOwnPropertyNames(mars);

console.log(properties);
