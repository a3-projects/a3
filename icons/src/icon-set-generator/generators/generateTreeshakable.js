const utils = require(__dirname + "/../utils");
const camelcase = require("camelcase");
const JSON5 = require("json5");

const generateTreeshakable = async (
  map,
  outputFolder,
  { fileType = "js" } = {}
) => {
  const savePath = outputFolder + `/icons.${fileType}`;
  let content = "";

  map.forEach((value, key) => {
    content += `export const ${camelcase(key, {
      pascalCase: true,
    })} = ${JSON5.stringify(value)};`;
  });
  await utils.writeFileAsync(savePath, content.trim());
};
module.exports = {
  generateTreeshakable,
};
