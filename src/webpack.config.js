const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filetitle: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
