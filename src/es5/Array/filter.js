// Array.filter()

var planets = ["Mercury", "Venus", "Earth", "Mars"];

var earthFiltered = planets.filter(function (planet) {
  console.log(planet);
  return planet !== "Earth";
  //return planet.charAt(0) !== "M";
});

console.log(earthFiltered);
