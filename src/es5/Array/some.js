// Array.some()

var planets = ["Mercury", "Venus", "Earth", "Mars"];

var firstLetterIsM = function(planet) {
  return planet.charAt(0) === "M";
};

var result = planets.some(firstLetterIsM);

console.log(result);
