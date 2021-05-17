'use strict';

function Vehicle(brand, model, color) {
  this._engineStart = false;

  this.brand = brand;
  this.model = model;
  this.color = color;
  this.motionStart = function() {
    this._engineStart = true;
  };
  this.motionStop = function() {
    this._engineStart = false;
  };
  this.getVehicleID = function() {
    return this.brand + ' ' + this.model; 
  };
}

// Машина
function Car(brand, model, color, area, fuel) {
  Vehicle.apply(this, arguments);

  this.area = area;
  this.fuel = fuel;

  let parentEngineStart = this.motionStart;
  this.engineStart = function() {
    parentEngineStart.call(this);
    console.log(`The ${this.fuel} storage is full! And ${this.color} ${this.brand} ${this.model} starting to move on ${this.area}!`);
  };
}

let auto = new Car ('Tesla', 'Cybertruck', 'silver', 'earth', 'electricity');
auto.engineStart();

// Самолёт
function Airplane(brand, model, color, area, fuel) {
  Vehicle.apply(this, arguments);

  this.area = area;
  this.fuel = fuel;

  let parentEngineStart = this.motionStart;
  this.engineStart = function() {
    parentEngineStart.call(this);
    console.log(`The ${this.fuel} storage is full! And ${this.color} ${this.brand}-${this.model} starts to fly into the ${this.area}!`);
  };
}

let jet = new Airplane ('Sukhoi', '57', 'grey', 'sky', 'petrol');
jet.engineStart();


// Корабль
function Ship(brand, model, color, area, fuel) {
  Vehicle.apply(this, arguments);

  this.area = area;
  this.fuel = fuel;

  let parentEngineStart = this.motionStart;
  this.engineStart = function() {
    parentEngineStart.call(this);
    console.log(`The ${this.fuel} storage is full! And ${this.color} ${this.brand} ${this.model} begins to sail on the ${this.area}!`);
  };
}

let tanker = new Ship ('ShipCraft', 'Linker', 'white', 'ocean', 'diesel');
tanker.engineStart();