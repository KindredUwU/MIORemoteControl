const chalk = require("chalk")
const log = console.log;

async function logger(type, data) {

    switch(type) {
        case "error":
          log(chalk.white.bgRed.bold("[Error]") + chalk.white(" ") + chalk.red.bold(data))
          break;
        case "warning":
            log(chalk.gray.bgYellowBright.bold("[Warning]") + chalk.white(" ") + chalk.yellowBright.bold(data))
          break;
        case "log":
            log(chalk.white.bgBlue.bold("[MIO]") + chalk.white(" ") + chalk.whiteBright.bold(data))
      }

}

module.exports = logger
