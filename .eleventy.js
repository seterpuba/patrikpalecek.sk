module.exports = function(config) {

  config.addWatchTarget("./src/sass/");

  // A useful way to reference the context we are runing eleventy in
  let env = process.env.ELEVENTY_ENV;

  // Layout aliases can make templates more portable
  config.addLayoutAlias('default', 'layouts/base.njk');

  // Add some utility filters
  config.addFilter("squash", require("./utils/filters/squash.js") );
  config.addFilter("dateDisplay", require("./utils/filters/date.js") );

  // minify the html output
  // config.addTransform("htmlmin", require("./utils/minify-html.js"));

  // compress and combine js files
  config.addFilter("jsmin", function(code) {
    const UglifyJS = require("uglify-js");
    let minified = UglifyJS.minify(code);
      if( minified.error ) {
          console.log("UglifyJS error: ", minified.error);
          return code;
      }
      return minified.code;
  });

  // pass some assets right through
  config.addPassthroughCopy("./src/images");
  config.addPassthroughCopy("./src/js");
  config.addPassthroughCopy("./src/fonts");
  config.addPassthroughCopy("./src/robots.txt");

  // make the seed target act like prod
  //env = (env=="seed") ? "" : env;
  return {
    dir: {
      input: "src",
      output: "_site",
      data: `_data`
    },
    templateFormats : ["njk", "md", "html", "11ty.js"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk",
    passthroughFileCopy: true
  };
};
