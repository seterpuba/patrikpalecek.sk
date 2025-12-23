const fs = require('fs');
const path = require('path');
const sass = require('sass');
const postcss = require('postcss');

// the file name as an entry point for postcss compilation
// also used to define the output filename in our output /css folder.
const fileName = "main.css";

module.exports = class {
  async data () {
    const rawFilepath = path.join(__dirname, `../sass/main.scss`);
    return {
      permalink: `css/${fileName}`,
      rawFilepath
    };
  };

  async render ({ rawFilepath }) {
    const sassResult = sass.compile(rawFilepath);

    return await postcss([
      require('postcss-import'),
      require('postcss-mixins'),
      require('postcss-color-mix'),
      require('cssnano')
    ])
    .process(sassResult.css, { from: rawFilepath })
    .then(result => result.css);
  };

}