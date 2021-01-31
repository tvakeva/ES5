// Object.isFrozen()

var mars = {
  name: "Mars",
  moons: ["Phobos", "Deimos"],
  temperature: -63,
  distance: 1.524
};

console.log(Object.isFrozen(mars));

Object.freeze(mars);

console.log(Object.isFrozen(mars));

mars.mass = 12345678;
