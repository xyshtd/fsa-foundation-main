/* eslint-disable no-unused-vars, no-throw-literal*/
//Pokemon Constructor Function
function Pokemon(name, health, attackBonus) {
  this.name = name;
  this.health = health;
  this.attackBonus = attackBonus;
}

Pokemon.prototype.biteAttack = function () {
  return this.attackBonus + 2;
};

Pokemon.prototype.isDefeated = function () {
  //return this.health <= 0 ? true : false;
  return this.health <= 0;
};

//simulateBattle Function
const simulateBattle = (pokemonOne, pokemonTwo, firstAttacker) => {
  let first = firstAttacker === pokemonOne.name ? pokemonOne : pokemonTwo;
  let second = first === pokemonOne ? pokemonTwo : pokemonOne;
  let fight = true;
  while (first.isDefeated() === second.isDefeated()) {
    if (fight) {
      second.health -= first.biteAttack();
      fight = false;
    } else {
      first.health -= second.biteAttack();
      fight = true;
    }
  }
  return `${first.isDefeated() ? second.name : first.name} Wins!`;
};
