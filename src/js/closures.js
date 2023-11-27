
//1
const prefixSir = addPrefix("Sir");

function addPrefix(prefix) {
  return function (name) {
    return `${prefix} ${name}`;
  }
}

//2
const lionSound = soundMaker("roar");
const mouseSound = soundMaker("squeak");

function soundMaker(sound) {
  return function (type) {
    return `The ${type} goes ${sound}`;
  }
}

//3
const misterJunior = nameEnhancer("Mister")("Junior");
const duchessThird = nameEnhancer("Duchess")("The Third");

function nameEnhancer(prefix) {
  return function (suffix) {
    return function (name) {
      return `${prefix} ${name} ${suffix}`;

    }
  }
}

//4
const addTwoMultiplyByThree = addaMult(2)(3);
const addFiveMultiplyByNine = addaMult(5)(9);

function addaMult(add) {
  return function(multiply) {
    return function(number) {
      return (number + add) * multiply;
    }
  }
}


