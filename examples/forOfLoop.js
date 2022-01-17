function forOfLoop() {
    const change = [1, 5, 10, 25, 50, 100];
    let output = '';

    for (let x of change) {
        output += x + ' ';
    }

    return output.trimEnd();
}
module.exports = forOfLoop;