// Object.getOwnPropertyDescriptor()

var mars = {
  name: "Mars",
  moons: ["Phobos", "Deimos"],
  temperature: -63,
  distance: 1.524
};

var descriptor = Object.getOwnPropertyDescriptor(mars, "moons");

console.log(descriptor);
