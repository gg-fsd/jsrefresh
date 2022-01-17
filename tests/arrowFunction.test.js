const arrow = require('../examples/arrowFunction');

test('should return the sum of two input values', () => {
    expect(arrow(29, 17)).toBe(46);
});