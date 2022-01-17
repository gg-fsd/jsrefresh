function letBlockScope(x) {
    //block scope to change value only within it
    {
        let x = 99;
    }
    return x;
}
module.exports = letBlockScope;