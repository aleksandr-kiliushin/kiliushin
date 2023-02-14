module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("./src/**/*.css")
  eleventyConfig.addWatchTarget("./src/**/*.css")
  eleventyConfig.addPassthroughCopy("./src/images/")
  eleventyConfig.addPassthroughCopy({ "./src/favicons": "/" })

  return {
    dir: {
      input: "./src",
      output: "./dist",
    },
  }
}
