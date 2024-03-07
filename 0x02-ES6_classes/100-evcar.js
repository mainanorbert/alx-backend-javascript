import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const MySpecies = super.constructor[Symbol.species];
    return new MySpecies(this._brand, this._motor, this._color, this._range);
  }
}
export default EVCar;
