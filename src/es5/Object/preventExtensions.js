// Object.preventExtensions()

var mars = {
  name: "Mars",
  moons: ["Phobos", "Deimos"],
  temperature: -63,
  distance: 1.524
};

// Prevents adding properties to an object
Object.preventExtensions(mars);

mars.distance = 2;

console.log(mars);

mars.mass = 123456;
