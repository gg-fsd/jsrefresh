const letBlockScope = require('../examples/letBlockScope');

test('should return the original input value', () => {
    expect(letBlockScope(23)).toBe(23);
});