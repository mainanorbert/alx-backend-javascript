// const cloneMethod = Symbol('cloneMethod');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    // this[cloneMethod] = this.cloneCar;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const MySpecies = this.constructor[Symbol.species];
    return new MySpecies();
  }
}
export default Car;
