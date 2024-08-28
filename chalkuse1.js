const chalk = require('chalk');
const log = console.log;

const error= chalk.red
const warning = chalk.yellow

log("Hello ! " ,chalk.greenBright("Nikhil"), "How are you?");
log(warning("Please be careful"));

log(error("Danger ! Aware"));
