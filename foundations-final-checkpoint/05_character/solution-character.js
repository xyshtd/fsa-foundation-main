/* eslint-disable no-unused-vars, no-prototype-builtins */
//Character Class
class Character {
  constructor(character, fontName, fontSize) {
    this.character = character;
    this.fontName = fontName;
    this.fontSize = fontSize;
  }
  drawCharacter() {
    return this.character;
  }
}

//Letter Class
class Letter extends Character {
  constructor(character, fontName, fontSize, charCase) {
    super(character, fontName, fontSize);
    this.charCase = charCase;
  }

  toLowerCase() {
    this.charCase = 'lowerCase';
    this.character = this.character.toLowerCase();
  }

  toUpperCase() {
    this.charCase = 'upperCase';
    this.character = this.character.toUpperCase();
  }

  getCase() {
    return this.charCase;
  }
}

//Digit Class
class Digit extends Character {
  constructor(character, fontName, fontSize) {
    super(character, fontName, fontSize);
    if (typeof this.character === 'number') {
      this.isDigit = true;
    } else {
      this.isDigit = false;
    }
  }

  integerValue() {
    if (
      typeof parseInt(this.character) === 'number' &&
      typeof this.character !== 'number'
    ) {
      this.character = parseInt(this.character);
      this.isDigit = !this.isDigit;
    }
  }
}
