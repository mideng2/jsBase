const sum = require('./sum')

test('test sum', () => {
  expect(sum(1, 2)).toBe(3);
})

test('there is no I in team', () => {
  expect('team').not.toMatch(/e/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});