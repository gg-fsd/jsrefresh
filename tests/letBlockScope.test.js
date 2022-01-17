const letBlockScope = require('../letBlockScope');

test('should return the original input value', () => {
    expect(letBlockScope(23)).toBe(23);
});