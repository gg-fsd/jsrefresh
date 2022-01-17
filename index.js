const letBlockScope = require('./examples/letBlockScope');

require('yargs')
    .scriptName("jsrefresh")
    .usage('Usage: $0 <cmd> [args]')
    .demandCommand(1, 'You need at least one command to use jsrefresh')
    .command(
        'let-block-scope'
        , 'Run the let block scope variable example'
        , (yargs) => {
            yargs.positional('number', {
                alias: 'n',
                desc: 'An input value that should remain unchanged after the example runs.',
                type: 'number'
            })
            .demandOption(['number'], 'Please provide a number value to use for the example')
        }
        , function (argv) {
            console.log(`Input value: ${argv.number}\nOutput value: ${letBlockScope(argv.number)}`);
        }
    )
    .help()
    .alias('help', 'h')
    .argv;