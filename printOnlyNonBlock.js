function printOnlyNonBlock(x) {
    //block to change value only within
    {
        let x = 99;
    }
    return x;
}
module.exports = printOnlyNonBlock;