const queryResultContainer = () => {
  const resultContainer = document.querySelector("span#result")
  if (!(resultContainer instanceof HTMLSpanElement)) throw new Error()
  return resultContainer
}

const queryElements = () => document.querySelectorAll(".element")

queryElements().forEach((element) => {
  element.style.height = parseInt(element.innerText) * 2 + "px"
})

document.querySelector("button#search").addEventListener("click", () => {
  queryResultContainer().innerText = "--"
  const valueToSearchFor = document.querySelector("input").value
  queryElements().forEach((element, elementIndex) => {
    if (element.innerText === valueToSearchFor) {
      element.style.border = "2px solid red"
      queryResultContainer().innerText = elementIndex
    }
  })
  if (queryResultContainer().innerText === "--") {
    queryResultContainer().innerText = "null"
  }
})
