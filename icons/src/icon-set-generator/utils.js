const path = require("path");
const fs = require("fs");
const svgson = require("svgson");
const fsPromises = fs.promises;

const createDirectoryIfNotExists = async (dirOrFilePath) => {
  const dir = path.dirname(dirOrFilePath);
  const exists = fs.existsSync(dir);
  if (!exists) await fsPromises.mkdir(dir);
};

const getFileNameFromString = (fileString) => path.parse(fileString).name;

const getParsedSvgFromFile = async (inputPath) => {
  const data = await readFileAsync(inputPath);
  const parsedSvg = await svgson.parse(data);

  return parsedSvg;
};

const stringifySvg = (input) => svgson.stringify(input);

const writeFileAsync = async (outputFilePath, content) => {
  await createDirectoryIfNotExists(outputFilePath);
  return new Promise((resolve) => {
    fs.writeFile(outputFilePath, content, async function (err, data) {
      if (err) {
        return console.log(err);
      }

      resolve(data);
    });
  });
};

const readFileAsync = async (inputPath, format = "utf8") => {
  return new Promise((resolve) => {
    fs.readFile(inputPath, format, async function (err, data) {
      if (err) {
        return console.log(err);
      }

      resolve(data);
    });
  });
};

module.exports = {
  getFileNameFromString,
  getParsedSvgFromFile,
  stringifySvg,
  writeFileAsync,
  readFileAsync,
  createDirectoryIfNotExists,
};
