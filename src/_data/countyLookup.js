const fs = require("fs");
const path = require("path");

module.exports = function () {
  const dir = path.join(__dirname, "../../content/circuits");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
  const lookup = {};
  files.forEach((f) => {
    const data = JSON.parse(fs.readFileSync(path.join(dir, f), "utf-8"));
    data.counties.forEach((county) => {
      lookup[county] = {
        circuit_number: data.circuit_number,
        circuit_name: data.circuit_name,
      };
    });
  });
  return lookup;
};
