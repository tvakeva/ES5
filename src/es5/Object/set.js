// Object set

var person = {
  firstName: "John",
  lastName: "Doe",
  language: "NO",
  get lang() {
    return this.language;
  },
  set lang(value) {
    this.language = value.toUpperCase();
  }
};

// Set an object property using a setter:
person.lang = "en";

console.log(person.lang);
