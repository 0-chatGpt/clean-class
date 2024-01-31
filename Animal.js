"use strict";

class Animal {
  #motile = true;
  _modeOfReproduction = "sexual";
  _homeostasis = true;
  _multicellular = true;
  constructor(name, age, lifespan, weight, sex) {
    // Abstraction.
    if (this.constructor === Animal) {
      throw new Error("Cannot Instantiate Abstract Class");
    }
    this.name = name;
    this.age = age;
    this.lifespan = lifespan;
    this.weight = weight;
    this.sex = sex;
  }

  editProperty(property, newValue) {
    if (this.hasOwnProperty(property.toLowerCase())) {
      this[property] = newValue;
    }
  }
}

class Arthropoda extends Animal {
  #withBackbone = false;
  #thermoReg = "cold-blooded";
  constructor(
    name,
    age,
    lifespan,
    weight,
    sex,
    numberOfEyes,
    numberOfHeartChamber,
    numberOfLimbs
  ) {
    super(name, age, lifespan, weight, sex);
    this.numberOfEyes = numberOfEyes;
    this.numberOfHeartChamber = numberOfHeartChamber;
    this.numberOfLimbs = numberOfLimbs;
  }
  hasBackbone() {
    return this.#withBackbone;
  }
  thermoRegulation() {
    return this.#thermoReg;
  }
}

class Fish extends Animal {
  #withBackbone = true;
  #thermoReg = "cold-blooded";
  constructor(
    name,
    age,
    lifespan,
    weight,
    sex,
    numberOfEyes,
    numberOfHeartChamber,
    numberOfLimbs
  ) {
    super(name, age, lifespan, weight, sex);
    this.numberOfEyes = numberOfEyes;
    this.numberOfHeartChamber = numberOfHeartChamber;
    this.numberOfLimbs = numberOfLimbs;
  }
  hasBackbone() {
    return this.#withBackbone;
  }
  thermoRegulation() {
    return this.#thermoReg;
  }
}

class Amphibia extends Animal {
  #withBackbone = true;
  #thermoReg = "cold-blooded";
  constructor(
    name,
    age,
    lifespan,
    weight,
    sex,
    numberOfEyes,
    numberOfHeartChamber,
    numberOfLimbs
  ) {
    super(name, age, lifespan, weight, sex);
    this.numberOfEyes = numberOfEyes;
    this.numberOfHeartChamber = numberOfHeartChamber;
    this.numberOfLimbs = numberOfLimbs;
  }
  hasBackbone() {
    return this.#withBackbone;
  }
  thermoRegulation() {
    return this.#thermoReg;
  }
}

class Reptiles extends Animal {
  #withBackbone = true;
  #thermoReg = "cold-blooded";
  constructor(
    name,
    age,
    lifespan,
    weight,
    sex,
    numberOfEyes,
    numberOfHeartChamber,
    numberOfLimbs
  ) {
    super(name, age, lifespan, weight, sex);
    this.numberOfEyes = numberOfEyes;
    this.numberOfHeartChamber = numberOfHeartChamber;
    this.numberOfLimbs = numberOfLimbs;
  }
  hasBackbone() {
    return this.#withBackbone;
  }
  thermoRegulation() {
    return this.#thermoReg;
  }
}

class Aves extends Animal {
  #withBackbone = true;
  #thermoReg = "warm-blooded";
  constructor(
    name,
    age,
    lifespan,
    weight,
    sex,
    numberOfEyes,
    numberOfHeartChamber,
    numberOfLimbs
  ) {
    super(name, age, lifespan, weight, sex);
    this.numberOfEyes = numberOfEyes;
    this.numberOfHeartChamber = numberOfHeartChamber;
    this.numberOfLimbs = numberOfLimbs;
  }
  hasBackbone() {
    return this.#withBackbone;
  }
  thermoRegulation() {
    return this.#thermoReg;
  }
}

class Mammals extends Animal {
  #withBackbone = true;
  #thermoReg = "warm-blooded";
  constructor(
    name,
    age,
    lifespan,
    weight,
    sex,
    numberOfEyes,
    numberOfHeartChamber,
    numberOfLimbs
  ) {
    super(name, age, lifespan, weight, sex);
    this.numberOfEyes = numberOfEyes;
    this.numberOfHeartChamber = numberOfHeartChamber;
    this.numberOfLimbs = numberOfLimbs;
  }
  hasBackbone() {
    return this.#withBackbone;
  }
  thermoRegulation() {
    return this.#thermoReg;
  }
}

// let dog = new Arthropoda('fsd', 12, 15, 12.4, 'male', 2, 4, 3);
// console.log(dog)
// dog.editProperty('name', 'leo');
// console.log(dog);
