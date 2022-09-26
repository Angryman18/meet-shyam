import chalk from "chalk";
import { myInfo, socialLink } from "./info.js";

export class DisplayInfo {
  static showHeading() {
    console.clear();
    console.log('\n')
    console.log(
      chalk.bgHex('#0057e7').white.bold(" мєєτ-ѕнγαм "),
      chalk.yellowBright.bold("- ϐγ ѕнγαм мαнαиτα (єиgιиє ϐογ)")
    );
    console.log(chalk.magentaBright('Տϴ ᏀᎪᏞᎠ Ͳϴ ՏᎬᎬ ᎽϴႮ ᎻᎪᏙᎬ ᏆΝͲᎬᎡᎬՏͲ Ͳϴ ᏦΝϴᏔ ᎪᏴϴႮͲ ᎷᎬ.\n\n'))
  }

  static getInfo() {
    console.log(chalk.italic.bold.white(myInfo()));
  }

  static socialInfo() {
    console.log(chalk.yellow.bold(socialLink()))
  }

  // static myProjects() {
  //   console.log(myProjects())
  // }
}
