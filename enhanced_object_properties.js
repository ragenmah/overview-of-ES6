function getStudent(name, age, year) {
  return {
    name: name,
    age: age,
    year: year,
  };
}
console.log(getStudent("Ram Maharjan", 23, 1995));

function getStudent1(name, age, passedYear) {
  return {
    name,
    age,
    passedYear,
  };
}
console.log(getStudent1("Hari Maharjna", 24, 1994));

//computed properties
const varName = "firstName";
const person = {
  [varName]: "SIta",
  lastName: "Sapkota",
};
console.log(person.firstName);

//function declaration
function getPerson(name, age, passedYear) {
  return {
    name: name,
    passedYear: passedYear,

    getAge: function () {
      return age;
    },
  };
}
console.log(getPerson("Manish", 23, 1885).getAge());

const PI = 3.1415;
const exportObject = {
  PI,
  sum(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  //   multiply=(a,b)=>a*b,
  multiply(a, b) {
    return a * b;
  },
};
sum = exportObject.sum(2, 3);
console.log(exportObject);
console.log(exportObject.sum(2, 3));
console.log(exportObject.multiply(2, 3));
