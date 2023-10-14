const utils = require(__dirname + "/utils");
const { generateJs } = require(__dirname + "/generators/generateJs");
const { generateTs } = require(__dirname + "/generators/generateTs");
const { generateTypes } = require(__dirname + "/generators/generateTypes");
const { generateJson } = require(__dirname + "/generators/generateJson");
const { generateTreeshakable } = require(__dirname +
  "/generators/generateTreeshakable");
const { generateSingleJsFiles } = require(__dirname +
  "/generators/generateSingleJsFiles");
const { generateSingleDefaultJsFiles } = require(__dirname +
  "/generators/generateSingleDefaultJsFiles");
const { generateReact } = require(__dirname + "/generators/generateReact");

var glob = require("glob");

const generate = async (inputSvgs, outputFolder) => {
  const iconMap = new Map();

  glob(inputSvgs, async function (err, files) {
    await Promise.all(
      files.map(async (file) => {
        const parsedSvg = await utils.getParsedSvgFromFile(file);
        const filename = utils.getFileNameFromString(file);

        iconMap.set(filename, {
          viewBox: parsedSvg.attributes.viewBox,
          paths: utils.stringifySvg(parsedSvg.children),
        });
      })
    );

    generateJson(iconMap, outputFolder);
    generateJs(iconMap, outputFolder);
    generateTypes(iconMap, outputFolder);
    generateTs(iconMap, outputFolder);
    generateTreeshakable(iconMap, outputFolder, { fileType: "ts" });
    generateTreeshakable(iconMap, outputFolder, { fileType: "ts" });
    generateSingleJsFiles(iconMap, outputFolder);
    generateSingleDefaultJsFiles(iconMap, outputFolder);
    generateReact(iconMap, outputFolder);
  });
};

module.exports = {
  generate,
};
