// Array.reduce()

var planets = ["Mercury", "Venus", "Earth", "Mars"];

var fromSunToMars = planets.reduce(function (solarSystem, planet) {
  console.log({ solarSystem, planet });
  return solarSystem + " >>> " + planet;
}, "Sun");

console.log(fromSunToMars);
//console.log("Sun >>> " + planets.join(" >>> "));

// reducea voi käyttää esim. yhteenlaskuun
console.log([1, 3, 5, 7, 8].reduce((total, value) => total + value, 0));

console.log(
  [1, 3, 5, 7, 8].reduce((total, value) => {
    console.log(total);
    return total * value;
  }, 1)
);

console.log(
  [1, 3, 5, 7, 8].reduce((total, value) => {
    return value % 2 === 1 ? total + value : total;
  }, 0)
);

var advancedPlanets = [
  { name: "Mercury", habited: false },
  { name: "Venus", habited: false },
  { name: "Earth", habited: true },
  { name: "Mars", habited: false }
];
const classifiedPlanets = advancedPlanets.reduce(
  (result, planet) => {
    console.log(result, planet);
    if (planet.habited) {
      return {
        unHabited: result.unHabited,
        habited: [...result.habited, planet]
      };
    } else {
      return {
        habited: result.habited,
        unHabited: [...result.unHabited, planet]
      };
    }
  },
  { habited: [], unHabited: [] }
);
console.log(classifiedPlanets);
