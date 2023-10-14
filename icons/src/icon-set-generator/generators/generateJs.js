const utils = require(__dirname + "/../utils");
const JSON5 = require("json5");

const generateJs = async (map, outputFolder) => {
  const savePath = outputFolder + "/iconSet.js";
  const content = `export const iconSet = ${JSON5.stringify(Object.fromEntries(map))}`;

  await utils.writeFileAsync(savePath, content);
};
module.exports = {
  generateJs,
};
