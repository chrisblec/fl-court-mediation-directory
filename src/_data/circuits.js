const fs = require("fs");
const path = require("path");

module.exports = function () {
  const dir = path.join(__dirname, "../../content/circuits");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
  const circuits = files.map((f) => {
    const data = JSON.parse(fs.readFileSync(path.join(dir, f), "utf-8"));
    return data;
  });
  circuits.sort((a, b) => a.circuit_number - b.circuit_number);
  return circuits;
};
