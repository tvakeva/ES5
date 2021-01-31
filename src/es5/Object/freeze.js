// Object.feeze()

var mars = {
  name: "Mars",
  moons: ["Phobos", "Deimos"],
  temperature: -63,
  distance: 1.524
};

// Prevents any changes to an object
Object.freeze(mars);

mars.distance = 2;
