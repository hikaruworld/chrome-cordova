import path from "path";
import fs from "fs";
import webpack from "webpack";

export default [{
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    loaders: [
      { test: /\.(js)$/, exclude: /node_modules/, loader: "babel-loader", include: __dirname },
    ],
  },
}];
