/* eslint-disable no-unused-vars */
class Laptop {
  constructor(year, size) {
    this.year = year;
    this.hd = size;
  }
  checkSpecs() {
    return `Year: ${this.year}, HD: ${this.hd}`;
  }
}

class Macbook extends Laptop {
  constructor(year, size, color) {
    super(year, size);
    this.color = color;
  }
}
