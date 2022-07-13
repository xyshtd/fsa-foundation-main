/* eslint-disable no-unused-vars */
class Media {
  constructor(title, year) {
    this.title = title;
    this.ratings = [];
    this.yearOfRelease = year;
  }
  getTitle() {
    return this.title;
  }

  getYearOfRelease() {
    return this.yearOfRelease;
  }

  addRating(rating) {
    if (rating >= 1 && rating <= 100) {
      this.ratings.push(rating);
    } else {
      return `${rating} is not a valid rating, ratings must be 1-100`;
    }
  }

  getAverageRating() {
    if (this.ratings.length === 0) {
      return 'this is not rated';
    } else {
      return (
        this.ratings.reduce((accum, current) => accum + current, 0) /
        this.ratings.length
      );
    }
  }
}

class Album extends Media {
  constructor(title, year, artist, tracks) {
    super(title, year);
    this.artist = artist;
    this.tracks = tracks;
  }
}

class Movie extends Media {
  constructor(title, year, director, runTime) {
    super(title, year);
    this.director = director;
    this.runTime = runTime;
  }
}

class Book extends Media {
  constructor(title, year, author, pages) {
    super(title, year);
    this.author = author;
    this.pages = pages;
  }
}
