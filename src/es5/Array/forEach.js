// Array.forEach()

var planets = ["Mercury", "Venus", "Earth", "Mars"];

const planetMap = [];
planets.forEach(function (planet) {
  planetMap.push({ name: planet });
  console.log(planet);
});

console.log(planetMap);

/* for (let i = 0; i < planets.length; i++) {
  const planet = planets[i];
  console.log(planet);
}
*/
