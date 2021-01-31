// Object.isExtensible()

var mars = {
  name: "Mars",
  moons: ["Phobos", "Deimos"],
  temperature: -63,
  distance: 1.524
};

console.log(Object.isExtensible(mars));

Object.preventExtensions(mars);

console.log(Object.isExtensible(mars));
