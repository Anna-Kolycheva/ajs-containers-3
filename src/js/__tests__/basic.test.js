import Settings from '../app';

test('should sum', () => {
  const sett = new Settings();
  sett.customSettings.set('music', 'chillout');
  sett.customSettings.set('difficulty', 'normal');
  expect(sett.settings).toEqual(new Map([['theme', 'dark'], ['music', 'chillout'], ['difficulty', 'normal']]));
});

test('should sum', () => {
  const sett = new Settings();
  expect(sett.settings).toEqual(new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]));
});
