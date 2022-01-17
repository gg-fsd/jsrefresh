const forOfLoop = require('../examples/forOfLoop');

test('should return the entire change denomination list', () => {
    expect(forOfLoop()).toBe('1 5 10 25 50 100');
});