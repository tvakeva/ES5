// Array.map()

var planets = ["Mercury", "Venus", "Earth", "Mars"];

var planetMap = planets.map(function (planet) {
  console.log(planet);
  if (planet === "Earth") {
    return { name: planet, habited: true };
  }
  return { name: planet, habited: false };
});

console.log(planetMap);

/* console.log(planetMap.map((planet) => planet.name));
console.log(planetMap.map((planet) => `<option>${planet.name}</option>`));
console.log(planets.map((planet) => `<option>${planet}</option>`));
*/
