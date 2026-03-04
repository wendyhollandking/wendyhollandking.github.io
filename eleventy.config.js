// Eleventy configuration
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  eleventyConfig.addFilter("dateFormat", function (date, format) {
    const d = new Date(date);
    const months = ["January","February","March","April","May","June",
                    "July","August","September","October","November","December"];
    return months[d.getMonth()] + " " + d.getFullYear();
  });

  return {
    pathPrefix: "/",
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};
