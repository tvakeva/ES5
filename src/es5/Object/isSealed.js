// Object.isSealed()

var mars = {
  name: "Mars",
  moons: ["Phobos", "Deimos"],
  temperature: -63,
  distance: 1.524
};

console.log(Object.isSealed(mars));

Object.seal(mars);

console.log(Object.isSealed(mars));
