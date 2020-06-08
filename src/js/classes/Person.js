/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
export default class Person {
  constructor(options) {
    this.name = options.name,
    this.type = options.type,
    this.health = options.health,
    this.level = options.level,
    this.attack = options.attack,
    this.defence = options.defence;
  }
}
