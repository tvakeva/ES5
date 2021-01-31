// Array.every()

var planets = ["Mercury", "Venus", "Earth", "Mars"];

var firstLetterIsM = function (planet) {
  return planet.charAt(0) === "M";
};

var result = planets.every(firstLetterIsM);

console.log(result);

/* var filteredFirstLetterIsM = planets.filter(function (planet) {
  return planet.charAt(0) === "M";
});

console.log(filteredFirstLetterIsM);
*/
