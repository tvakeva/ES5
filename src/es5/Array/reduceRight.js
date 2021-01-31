// Array.reduceRight()

var planets = ["Mercury", "Venus", "Earth", "Mars"];

var fromMarsToMercury = planets.reduceRight(function(planets, planet) {
  return planets + " >>> " + planet;
});

console.log(fromMarsToMercury);
