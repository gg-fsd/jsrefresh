const constant = require('../constVar');

test('should not return the input value', () => {
    //Wrapped test function call in an anonymous function according to Jest docs 
    expect(() => {constant("unstoppable force")}).toThrow(TypeError);
});