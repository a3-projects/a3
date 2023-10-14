const utils = require(__dirname + "/../utils");

const generateTypes = async (map, outputFolder) => {
  const savePath = outputFolder + "/ts/types.ts";

  const content = `export type IconType = ${Object.keys(Object.fromEntries(map))
    .map((key) => `"${key}"`)
    .join("|")};export type IconSet =  {[key in IconType]:{viewBox: string, paths: string}}`;

  await utils.writeFileAsync(savePath, content);
};

module.exports = {
  generateTypes,
};
