module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("./src/**/*.{css,js}")
  eleventyConfig.addWatchTarget("./src/**/*.{css,js}")
  eleventyConfig.addPassthroughCopy("./src/images/")
  eleventyConfig.addPassthroughCopy({ "./src/favicons": "/" })

  return {
    dir: {
      input: "./src",
      output: "./dist",
    },
  }
}
