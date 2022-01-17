const letBlockScope = require('../letBlockScope');

test('print the original input variable value', () => {
    expect(letBlockScope(23)).toBe(23);
});