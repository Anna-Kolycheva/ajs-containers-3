
export default class Settings {
  constructor() {
    this.defaultSettings = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);
    this.customSettings = new Map();
  }

  get settings() {
    const result = new Map();
    this.defaultSettings.forEach((value, key) => {
      if (!this.customSettings.has(key)) {
        result.set(key, value);
      }
    });
    return new Map([...this.customSettings, ...result]);
  }
}
