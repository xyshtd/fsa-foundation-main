/* eslint-disable no-unused-vars */
class MyEventEmitter {
  constructor() {
    this.events = {};
  }

  addListener(eventName, callback) {
    if (this.events[eventName] === undefined) {
      this.events[eventName] = [callback];
    } else {
      this.events[eventName].push(callback);
    }
  }

  emit(event, ...args) {
    this.events[event].forEach((callback) => {
      //callback.apply(null, args);
      callback(...args);
    });
  }
}
//The arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort, map, forEach or pop can be applied on it directly.
