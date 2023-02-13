module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("./src/css/")
  eleventyConfig.addWatchTarget("./src/css/")
  eleventyConfig.addPassthroughCopy("./src/images/")
  eleventyConfig.addPassthroughCopy({ "./src/favicons": "/" })
  eleventyConfig.addShortcode("currenYear", () => new Date().getFullYear().toString())

  return {
    dir: {
      input: "./src",
      output: "./dist",
    },
  }
}
