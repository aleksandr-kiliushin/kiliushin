module.exports = (defaultEleventyConfig) => {
  defaultEleventyConfig.addPassthroughCopy("./src/css/")
  defaultEleventyConfig.addWatchTarget("./src/css/")
  defaultEleventyConfig.addPassthroughCopy("./src/images/")
  defaultEleventyConfig.addPassthroughCopy({ "./src/favicons": "/" })

  return {
    dir: {
      input: "./src",
      output: "./dist",
    },
  }
}
