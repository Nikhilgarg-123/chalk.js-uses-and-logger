const chalk = require('chalk');

const log = console.log;

// chalk.color.backgroundcolor()

// Background colors
// bgBlack
// bgRed
// bgGreen
// bgYellow
// bgBlue
// bgMagenta
// bgCyan
// bgWhite
// bgBlackBright (alias: bgGray, bgGrey)
// bgRedBright
// bgGreenBright
// bgYellowBright
// bgBlueBright
// bgMagentaBright
// bgCyanBright
// bgWhiteBright

log(chalk.red.bgBlack('Hello world!'));
log(chalk.white.bgRed('Hello world!'));
log(chalk.red.bgGreen('Hello world!'));
log(chalk.red.bgYellow('Hello world!'));
log(chalk.red.bgBlue('Hello world!'));
log(chalk.red.bgMagenta('Hello world!'));
log(chalk.red.bgCyan('Hello world!'));
log(chalk.red.bgWhite('Hello world!'));
log(chalk.red.bgBlackBright('Hello world!'));
log(chalk.white.bgRedBright('Hello world!'));
log(chalk.red.bgGreenBright('Hello world!'));
log(chalk.red.bgYellowBright('Hello world!'));
log(chalk.red.bgBlueBright('Hello world!'));
log(chalk.red.bgMagentaBright('Hello world!'));
log(chalk.red.bgCyanBright('Hello world!'));
log(chalk.red.bgWhiteBright('Hello world!'));

