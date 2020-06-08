import Person from '../js/classes/Person';
import Team from '../js/classes/Team';


test('get first hero of game', () => {
  const heroBowman = new Person({
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  });

  const heroThief = new Person({
    name: 'Вор',
    type: 'Thief',
    health: 60,
    level: 1,
    attack: 50,
    defence: 5,
  });

  const heroAxeman = new Person({
    name: 'Тапорист',
    type: 'Axeman',
    health: 100,
    level: 1,
    attack: 30,
    defence: 20,
  });
  const newGame = new Team();
  newGame.addEnemyHero(heroBowman);
  newGame.addEnemyHero(heroThief);
  newGame.addEnemyHero(heroAxeman);
  const firstHero = newGame[Symbol.iterator]();
  const result = firstHero.next().value;
  expect(result).toEqual({
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('get first hero of game', () => {
  const heroBowman = new Person({
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  });

  const heroThief = new Person({
    name: 'Вор',
    type: 'Thief',
    health: 60,
    level: 1,
    attack: 50,
    defence: 5,
  });

  const newGame = new Team();
  newGame.addEnemyHero(heroBowman);
  newGame.addEnemyHero(heroThief);
  const firstHero = newGame[Symbol.iterator]();
  firstHero.next();
  firstHero.next();
  const result = firstHero.next().done;
  expect(result).toEqual(true);
});
