const utils = require(__dirname + "/../utils");

const generateJson = async (map, outputFolder) => {
  const savePath = outputFolder + "/icon-set.json";
  const content = JSON.stringify(Object.fromEntries(map));

  await utils.writeFileAsync(savePath, JSON.stringify(content));
};

module.exports = {
  generateJson,
};
