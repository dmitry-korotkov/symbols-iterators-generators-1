/* eslint-disable no-plusplus */
export default class Team {
  constructor() {
    this.enemyHeroes = [];
  }

  addEnemyHero(enemyHero) {
    this.enemyHeroes.push(enemyHero);
  }


  [Symbol.iterator]() {
    const quantity = this.enemyHeroes.length;
    let i = 0;
    const heroes = this.enemyHeroes;
    return {
      next() {
        if (i < quantity) {
          return {
            value: heroes[i++],
            done: false,
          };
        }
        return { done: true };
      },
    };
  }
}
