document.querySelectorAll(".element").forEach((element) => {
  element.style.height = parseInt(element.innerText) * 2 + "px"
})

document.querySelector("button#search").addEventListener("click", () => {
  document.querySelector("span#result").innerText = "--"
  const valueToSearchFor = document.querySelector("input").value
  document.querySelectorAll(".element").forEach((element, elementIndex) => {
    if (element.innerText === valueToSearchFor) {
      element.style.border = "2px solid red"
      document.querySelector("span#result").innerText = elementIndex
    }
  })
  if (document.querySelector("span#result").innerText === "--") {
    document.querySelector("span#result").innerText = "null"
  }
})
