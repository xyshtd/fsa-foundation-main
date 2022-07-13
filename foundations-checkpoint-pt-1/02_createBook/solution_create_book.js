/* eslint-disable no-unused-vars, no-prototype-builtins */
// SM: very good!
const bookPrototype = {
  getPrice() {
    return this.price;
  },
  getInfo() {
    return `${this.title} by ${this.author}`;
  },
  addRating(stars) {
    this.rating.push(stars);
  },
  getRating() {
    let rate = 0;
    for (let i = 0; i < this.rating.length; i++) {
      rate += this.rating[i].length;
    }
    //return rate / ratings.length;
    rate /= this.rating.length;
    return rate;
  },
};
//getRating using .reduce,
/*
getRating() {
       return (
         this.rating.reduce((init, curr) => {
           return init + curr.length;
         }, 0) / this.rating.length
       );
     };
*/

const createBook = (id, title, author, price) => {
  const instance = Object.create(bookPrototype);
  instance.id = id;
  instance.title = title;
  instance.author = author;
  instance.price = price;
  instance.rating = [];
  return instance;
};
