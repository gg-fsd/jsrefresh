function constVar(x) {
    const y = "immovable object";

    y = x;

    return y;
}
module.exports = constVar;