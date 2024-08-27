const chalk = require('chalk');
const log = console.log;

log(chalk.red.bgCyan.bold("Bold Try"));
log(chalk.red.bgCyan.reset("reset Try"));
log(chalk.red.bgCyan.dim("dim Try"));
log(chalk.red.bgCyan.italic("italic Try"));
log(chalk.red.bgCyan.underline("underline Try"));
log(chalk.bgGrey.bgBlack.inverse("inverse Try"));
log(chalk.red.bgCyan.hidden("hidden Try"));
log(chalk.red.bgCyan.strikethrough("strikethrough Try"));
log(chalk.red.bgCyan.visible("visible Try"));
