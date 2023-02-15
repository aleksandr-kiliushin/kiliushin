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

/*
<span id="returning-null-code-line">return null</span> #}
<span id="index-to-search-from-initialization-code-line">let indexToSearchFrom = 0</span>
<span id="index-to-search-to-initialization-code-line">let indexToSearchTo = elements.length</span>
<span id="middle-index-initialization-code-line">let middleIndex = Math.floor((indexToSearchTo - indexToSearchFrom) / 2)</span>
<span id="loop-initialization-code-line">while (indexToSearchFrom !== indexToSearchTo) {</span>
  <span id="values-comparison-code-line">if (elements[middleIndex] === ___) {</span>
    <span id="returning-found-index-code-line">return middleIndex</span>
  <span id="checking-if-search-value-is-less-than-current-value-code-line">} else if (___ &lt; elements[middleIndex]) {<span>
    <span id="reassigning-index-to-search-to-code-line">indexToSearchTo = middleIndex - 1</span>
  <span id="checking-if-search-value-is-greater-than-current-value-code-line">} else if (___ &gt; elements[middleIndex]) {<span>
    <span id="reassigning-index-to-search-from-code-line">indexToSearchFrom = middleIndex + 1</span>
  }
}
<span id="returning-null-code-line">return null<span>
*/
