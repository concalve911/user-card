"use strict";

const user = {
  name: "Leszek",
  surname: "Gavril",
  location: "Krakow",
  age: "44",

  getInfo({ name, age, location }) {
    return `name: ${name}, age: ${age}, location: ${location}`;
  },
};

console.log(user.getInfo(user));
