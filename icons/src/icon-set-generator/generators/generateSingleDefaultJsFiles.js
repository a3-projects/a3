const utils = require(__dirname + "/../utils");
const camelcase = require("camelcase");
const JSON5 = require("json5");

const generateSingleDefaultJsFiles = (map, outputFolder) => {
  const output = outputFolder + /export-default/;
  map.forEach((value, key) => {
    const filename =
      "Icon" +
      camelcase(key, {
        pascalCase: true,
      });
    const savePath = output + `${filename}.js`;

    let content = `export default ${JSON5.stringify(value)};`;
    utils.writeFileAsync(savePath, content.trim());
  });
};
module.exports = {
  generateSingleDefaultJsFiles,
};
