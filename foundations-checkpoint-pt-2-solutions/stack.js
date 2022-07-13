class Stack {
  constructor() {
    this.store = [];
  }
  getStack() {
    return this.store;
  }

  add(item) {
    this.store.push(item);
    return this; // this return statement is needed for the extra credit specs
  }

  remove() {
    return this.store.pop();
  }
}