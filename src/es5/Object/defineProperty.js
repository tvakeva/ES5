// Object.defineProperty()

var person = {
  firstName: "John",
  lastName: "Doe",
  language: "FI"
};

// Change language property immutable:
Object.defineProperty(person, "language", {
  value: "EN",
  writable: false,
  enumerable: true,
  configurable: true
});

// Add age property non enumrable
Object.defineProperty(person, "age", {
  value: 34,
  writable: true,
  enumerable: false,
  configurable: true
});

//person.language = 'FI'

// Enumerate Properties
var html = "";
for (var key in person) {
  html += person[key] + "<br>\n";
}

console.log(html);
