module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("./src/styles/")
  eleventyConfig.addWatchTarget("./src/styles/")
  eleventyConfig.addPassthroughCopy("./src/images/")
  eleventyConfig.addPassthroughCopy({ "./src/favicons": "/" })

  return {
    dir: {
      input: "./src",
      output: "./dist",
    },
  }
}
