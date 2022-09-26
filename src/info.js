import chalk from "chalk";

export const myInfo = () => {
  // i got job in december 2021
  // my birth year is 1998
  const currYear = new Date().getFullYear() - 1998; // calc my age

  const yearIgotJob = 2021;
  const monthIgotJob = 12; // december month

  const workExp = new Date().getFullYear() - yearIgotJob;
  const calcMonths = new Date().getMonth() + 1 + workExp * 12 - monthIgotJob + 1; // +1 to calc running month
  const year = calcMonths > 12 ? Math.ceil(calcMonths / 12) : 0;
  const months = calcMonths % 12;
  return chalk.hex("#D3E397")(
    `нι. τнιѕ ιѕ ѕнγαм мαнαиτα. ιм ${currYear}γяѕ οℓ∂ ƒяοм ωєѕτ ϐєиgαℓ, ιи∂ια. ι нανє ϐєєи ιи το ѕοƒτωαяє ∂єνєℓορмєиτ ƒιєℓ∂ ƒοя мοяє τнαи 2 γєαяѕ. ϲυяяєиτℓγ ι αм ωοяκιиg ωιτн α ѕταяτυρ ϲοмραиγ ωнιϲн нαѕ נυѕτ ѕєτ ουτ το τнє мαяκєτ. ι ωοяκ αѕ α яєαϲτ ∂єνєℓορєя τнєяє αи∂ ϐєєи ωοяκιиg нєяє ƒοя ${year} γєαя ${months} мοиτнѕ.`
  );
};

const socialLinks = {
  ᴛᴡɪᴛᴛᴇʀ: "https://twitter.com/ShyamMahanta2",
  ɢɪᴛʜᴜʙ: "https://github.com/Angryman18",
  ʟɪɴᴋᴇᴅɪɴ: "https://www.linkedin.com/in/shyam-mahanta-2108a916a",
  ᴅɪꜱᴄᴏʀᴅ: "Shyam_Mahanta#8127",
};

export const socialLink = () => {
  const socialLink = Object.entries(socialLinks);
  const color = ["#f2317f", "#00a03e", "#eb5c2f", "#515bd4"];
  console.log("\n");
  for (let i = 0; i < socialLink.length; i++) {
    const link = socialLink[i];
    console.log("🌏", chalk.bgHex(color[i]).bold(` ${link[0]} `), " - ", chalk.gray(link[1]));
  }
  return "";
};

// export const myProjects = () => {
//   console.log("\n\n");
//   console.log(chalk.bgHex("#FFD034").black.bold("# The Bug Tracker"));
//   console.log(
//     chalk.hex("#5ac6aa").bold("URL"),
//     " - ",
//     chalk.gray("https://react-bugtracker.netlify.app")
//   );
//   console.log(
//     chalk.hex("#5ac6aa").bold("Tech Stacks"),
//     " - ",
//     chalk.hex("#67a125").bold(
//       "ReactJS, Tailwind, Redux, Material-Tailwind, Django Rest API"
//     )
//   );
//   return '';
// };
