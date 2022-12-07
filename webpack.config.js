// Подключение необходимых модулей. require - примерно как import
// модуль встроенный в node.js
const path = require("path");
// подключение плагина.
const CopyPlugin = require("copy-webpack-plugin");

// экспорт конфигурации webpack
module.exports = {
  // содержит путь к точке входа
  entry: "./src/main.js",
  // описываем куда должны быть размещён общий файл
  output: {
    // имя файла
    filename: "bundle.js",
    //куда должен помещаться этот файл, resolve - позволяет получить путь в директорию
    path: path.resolve("./public", "build"),
    // нужно ли чистить директорию
    clean: true,
  },
  // генерирует source-map
  devtool: "source-map",
  // настройка плагинов для webpack
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "public" }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ["babel-loader"]
      }
    ]
  }
}; 
