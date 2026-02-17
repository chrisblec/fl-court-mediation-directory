const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  // Passthrough copy
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy("src/css");

  // Markdown filter for rendering Markdown strings in data files
  const md = markdownIt({ html: true });
  eleventyConfig.addFilter("markdownify", function (str) {
    if (!str) return "";
    return md.render(str);
  });

  // Ordinal suffix filter (1st, 2nd, 3rd, etc.)
  eleventyConfig.addFilter("ordinal", function (n) {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
