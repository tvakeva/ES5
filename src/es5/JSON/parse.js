// JSON.parse()

var marsString = '{"name":"Mars","moons":["Phobos","Deimos"]}';

var marsParsed = JSON.parse(marsString);

console.log(marsParsed);
console.log(marsParsed.name);
