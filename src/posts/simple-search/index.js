const wait = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration)
  })
}
const queryResultContainer = () => {
  const resultContainer = document.querySelector("span#result")
  if (!(resultContainer instanceof HTMLSpanElement)) throw new Error()
  return resultContainer
}
const queryElements = () => Array.from(document.querySelectorAll(".element"))

queryElements().forEach((element) => {
  element.style.height = parseInt(element.innerText) * 2 + "px"
})

const promises = queryElements().map((element, elementIndex) => {
  return Promise.resolve({ element, elementIndex })
})

document.querySelector("button#search").addEventListener("click", async () => {
  queryResultContainer().innerText = "--"
  queryElements().forEach((element) => {
    element.style.border = "1px solid black"
  })

  const valueToSearchFor = document.querySelector("input").value

  document.querySelector("#values-comparison-code-line").innerText = document
    .querySelector("#values-comparison-code-line")
    .innerText.replace("___", valueToSearchFor)
    .replace(/\d+/, valueToSearchFor)

  document.querySelector("#loop-initialization-code-line").style.backgroundColor = "gray"
  await wait(500)
  document.querySelector("#loop-initialization-code-line").style.backgroundColor = "white"
  await wait(500)

  for await (const { element, elementIndex } of promises) {
    element.style.border = "3px solid black"
    document.querySelector("#values-comparison-code-line").style.backgroundColor = "gray"
    await wait(500)
    document.querySelector("#values-comparison-code-line").style.backgroundColor = "white"
    await wait(500)
    element.style.border = "1px solid black"

    element.style.border = "1px solid black"
    if (element.innerText === valueToSearchFor) {
      element.style.border = "2px solid red"
      queryResultContainer().innerText = String(elementIndex)
      return
    }
  }

  document.querySelector("#returning-null-code-line").style.backgroundColor = "gray"
  await wait(500)
  document.querySelector("#returning-null-code-line").style.backgroundColor = "white"

  queryResultContainer().innerText = "null"
})
