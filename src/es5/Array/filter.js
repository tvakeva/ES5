// Array.filter()

var planets = ["Mercury", "Venus", "Earth", "Mars"];

var earthFiltered = planets.filter(function(planet) {
  return planet !== "Earth";
});

console.log(earthFiltered);
