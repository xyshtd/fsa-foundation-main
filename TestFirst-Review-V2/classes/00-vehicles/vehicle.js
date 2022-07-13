/* eslint-disable no-unused-vars */
class Vehicle {
  constructor(arr) {
    this.wheelTotal = arr[0];
    this.energySource = arr[1];
    this.manufacturer = arr[2];
    this.isOn = false;
  }
  getSpec(key) {
    if (Object.keys(this).includes(key)) return this[key];
  }
}

class Tesla extends Vehicle {
  constructor(arr) {
    //[300, 'Model S', 50, 100, [[4, 'electric', 'Tesla']]];
    //pass arr[4][0] as argument into parent
    super(arr[4][0]);
    this.milesPerCharge = arr[0];
    this.model = arr[1];
    this.chargePercentage = arr[2];
    this.minutesToCharge = arr[3];
  }
  minutesToFullCharge() {
    return `${100 - this.chargePercentage} minutes until the charge is full!`;
  }
}
