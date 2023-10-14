const utils = require(__dirname + "/../utils");
const JSON5 = require("json5");

const generateTs = async (map, outputFolder) => {
  const savePath = outputFolder + "/ts/iconSet.ts";
  const content = `import {IconSet} from "./types";export const iconSet: IconSet = ${JSON5.stringify(
    Object.fromEntries(map)
  )};`;

  await utils.writeFileAsync(savePath, content);
};

module.exports = {
  generateTs,
};
