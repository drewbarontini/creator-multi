const setMeta = require('./meta');

test('Should set the home page title', () => {
  const expected = 'Creator (Multi) - Multi-page Express Application';
  const actual = setMeta('/', 'title');

  expect(expected).toEqual(actual);
});
