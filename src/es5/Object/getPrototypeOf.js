// Object.getPrototypeOf()

var mars = {
  name: "Mars",
  moons: ["Phobos", "Deimos"],
  temperature: -63,
  distance: 1.524
};

// Accessing the prototype
var prototype = Object.getPrototypeOf(mars);

console.log(prototype);
