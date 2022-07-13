const createBook = function(id, title, author, price) {
  const book = Object.create({
    getPrice() {
      return this.price;
    },
    getInfo() {
      return `${this.title} by ${this.author}`;
    },
    addRating(rating) {
      this.rating.push(rating);
    },
    getRating() {
      const ratings = this.rating;
      let total = 0;
      for (let i = 0; i < ratings.length; i++) {
        total += ratings[i].length;
      }

      return total / ratings.length;
    },
  });
  book.id = id;
  book.title = title;
  book.author = author;
  book.price = price;
  book.rating = [];

  return book;
};




// const createBook = function(id, title, author, price) {
//   const instance = Object.create({
//     getInfo() {
//       return `${this.title} by ${this.author}`;
//     },
//     getPrice() {
//       return this.price;
//     },
//     addRating(rating) {
//       this.rating.push(rating);
//     },
// Note: this is a different approach using Array.prototype.reduce
//     getRating() {
//       return (
//         this.rating.reduce((init, curr) => {
//           return init + curr.length;
//         }, 0) / this.rating.length
//       );
//     },
//   });
  
//   instance.id = id;
//   instance.title = title;
//   instance.author = author;
//   instance.price = price;
//   instance.rating = [];

//   return instance;
// };