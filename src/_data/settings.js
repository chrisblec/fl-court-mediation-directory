const fs = require("fs");
const path = require("path");

module.exports = function () {
  const file = path.join(__dirname, "../../content/pages/settings.json");
  return JSON.parse(fs.readFileSync(file, "utf-8"));
};
