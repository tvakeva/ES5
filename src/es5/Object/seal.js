// Object.seal()

var mars = {
  name: "Mars",
  moons: ["Phobos", "Deimos"],
  temperature: -63,
  distance: 1.524
};

// Prevents changes of object properties (not values)
Object.seal(mars);

mars.distance = 2;

console.log(mars);

mars.mass = 123456;
