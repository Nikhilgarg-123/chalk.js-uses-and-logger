const chalk = require('chalk');
const log = console.log;

log(chalk.ansi256(164)("Hello with ansii"))
log(chalk.ansi256(152).bgAnsi256(352)("Hello with ansii with background")) 
log(chalk.ansi256(164).bgHex('#FF0000')("Hello with ansii"))
log(chalk.ansi256(352).bgRgb(15,200,150)("Hello with ansii"))

log(chalk.hex('#FF0000')("Hello with hex"))
log(chalk.hex('#FF0000').bgAnsi256(352)("Hello with hex"))
log(chalk.hex('#A0C00').bgHex('#FF0000')("Hello with hex"))
log(chalk.hex('#FF00CC').bgRgb(15,200,150)("Hello with hex"))

log(chalk.rgb(15,205,155)("Hello with rgb"));
log(chalk.rgb(255,0,255).bgAnsi256(352)("Hello with rgb"));
log(chalk.rgb(232,245,245).bgHex('#FF0000')("Hello with rgb"));
log(chalk.rgb(232,245,245).bgRgb(15,200,150)("Hello with rgb"));

log(chalk.hsl(120, 50, 50)("Hello with hsl"));  // hue, saturation, and lightness

