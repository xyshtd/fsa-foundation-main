/* eslint-disable no-unused-vars */
class VM {
  constructor(inventory) {
    this.inventory = inventory;
  }

  sale(itemID) {
    this.inventory[itemID].stock--;
    return `1 ${this.inventory[itemID].name} - Thank you and come again!`;
  }

  stockTotal() {
    const arr = Object.values(this.inventory);
    const total = arr.reduce((accum, element) => {
      return accum + element.stock;
    }, 0);
    if (total <= 0) {
      return 'Out of Stock';
    } else {
      return `${total} item(s)`;
    }
  }
}
