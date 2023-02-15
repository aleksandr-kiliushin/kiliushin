const wait = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 300)
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

document.querySelector("button#search").addEventListener("click", async () => {
  queryResultContainer().innerText = "--"
  queryElements().forEach((element) => {
    element.style.border = "1px solid black"
    element.style.opacity = "1"
  })

  const valueToSearchFor = parseInt(document.querySelector("input").value)

  document.querySelectorAll("pre .value-to-search-for").forEach((element) => {
    element.innerText = String(valueToSearchFor)
  })

  document.querySelector("#index-to-search-from-initialization-code-line").style.backgroundColor = "gray"
  await wait()
  document.querySelector("#index-to-search-from-initialization-code-line").style.backgroundColor = "white"
  await wait()

  document.querySelector("#index-to-search-to-initialization-code-line").style.backgroundColor = "gray"
  await wait()
  document.querySelector("#index-to-search-to-initialization-code-line").style.backgroundColor = "white"
  await wait()

  document.querySelector("#middle-index-initialization-code-line").style.backgroundColor = "gray"
  await wait()
  document.querySelector("#middle-index-initialization-code-line").style.backgroundColor = "white"
  await wait()

  document.querySelector("#loop-initialization-code-line").style.backgroundColor = "gray"
  await wait()
  document.querySelector("#loop-initialization-code-line").style.backgroundColor = "white"
  await wait()

  let indexToSearchFrom = 0
  let indexToSearchTo = queryElements().length
  let middleIndex
  let valueAtMiddleIndex

  /* Iteration 1. START. ======================================================================== */
  middleIndex = indexToSearchFrom + Math.floor((indexToSearchTo - indexToSearchFrom) / 2)
  valueAtMiddleIndex = parseInt(queryElements()[middleIndex].innerText)
  queryElements()[middleIndex].style.border = "3px solid black"
  await wait()

  document.querySelector("#values-comparison-code-line").style.backgroundColor = "gray"
  await wait()
  document.querySelector("#values-comparison-code-line").style.backgroundColor = "white"
  await wait()
  if (valueToSearchFor === valueAtMiddleIndex) {
    document.querySelector("#returning-found-index-code-line").style.backgroundColor = "gray"
    await wait()
    document.querySelector("#returning-found-index-code-line").style.backgroundColor = "white"
    await wait()
    queryElements()[middleIndex].style.border = "2px solid red"
    await wait()
    queryResultContainer().innerText = middleIndex
    return
  }

  if (indexToSearchFrom === indexToSearchTo) {
    queryElements()[middleIndex].style.opacity = 0.3
    queryElements()[middleIndex].style.border = "1px solid black"
    await wait()
    document.querySelector("#returning-null-code-line").style.backgroundColor = "gray"
    await wait()
    document.querySelector("#returning-null-code-line").style.backgroundColor = "white"
    await wait()
    queryResultContainer().innerText = "null"
  }

  document.querySelector(
    "#checking-if-value-at-middle-index-is-greater-than-current-value-code-line"
  ).style.backgroundColor = "gray"
  await wait()
  document.querySelector(
    "#checking-if-value-at-middle-index-is-greater-than-current-value-code-line"
  ).style.backgroundColor = "white"
  await wait()
  if (valueAtMiddleIndex > valueToSearchFor) {
    indexToSearchTo = middleIndex - 1
    document.querySelector("#reassigning-index-to-search-to-code-line").style.backgroundColor = "gray"
    await wait()
    document.querySelector("#reassigning-index-to-search-to-code-line").style.backgroundColor = "white"
    await wait()
  }

  document.querySelector(
    "#checking-if-value-at-middle-index-is-less-than-current-value-code-line"
  ).style.backgroundColor = "gray"
  await wait()
  document.querySelector(
    "#checking-if-value-at-middle-index-is-less-than-current-value-code-line"
  ).style.backgroundColor = "white"
  await wait()
  if (valueAtMiddleIndex < valueToSearchFor) {
    indexToSearchFrom = middleIndex + 1
    document.querySelector("#reassigning-index-to-search-from-code-line").style.backgroundColor = "gray"
    await wait()
    document.querySelector("#reassigning-index-to-search-from-code-line").style.backgroundColor = "white"
    await wait()
  }

  queryElements()[middleIndex].style.border = "1px solid black"
  await wait()

  queryElements().forEach((element, elementIndex) => {
    if (elementIndex < indexToSearchFrom || elementIndex > indexToSearchTo) {
      element.style.opacity = "0.3"
    }
  })
  /* Iteration 1. END. ========================================================================== */

  /* Iteration 2. START. ======================================================================== */
  middleIndex = indexToSearchFrom + Math.floor((indexToSearchTo - indexToSearchFrom) / 2)
  valueAtMiddleIndex = parseInt(queryElements()[middleIndex].innerText)
  queryElements()[middleIndex].style.border = "3px solid black"
  await wait()

  document.querySelector("#values-comparison-code-line").style.backgroundColor = "gray"
  await wait()
  document.querySelector("#values-comparison-code-line").style.backgroundColor = "white"
  await wait()
  if (valueToSearchFor === valueAtMiddleIndex) {
    document.querySelector("#returning-found-index-code-line").style.backgroundColor = "gray"
    await wait()
    document.querySelector("#returning-found-index-code-line").style.backgroundColor = "white"
    await wait()
    queryElements()[middleIndex].style.border = "2px solid red"
    await wait()
    queryResultContainer().innerText = middleIndex
    return
  }

  if (indexToSearchFrom === indexToSearchTo) {
    queryElements()[middleIndex].style.opacity = 0.3
    queryElements()[middleIndex].style.border = "1px solid black"
    await wait()
    document.querySelector("#returning-null-code-line").style.backgroundColor = "gray"
    await wait()
    document.querySelector("#returning-null-code-line").style.backgroundColor = "white"
    await wait()
    queryResultContainer().innerText = "null"
  }

  document.querySelector(
    "#checking-if-value-at-middle-index-is-greater-than-current-value-code-line"
  ).style.backgroundColor = "gray"
  await wait()
  document.querySelector(
    "#checking-if-value-at-middle-index-is-greater-than-current-value-code-line"
  ).style.backgroundColor = "white"
  await wait()
  if (valueAtMiddleIndex > valueToSearchFor) {
    indexToSearchTo = middleIndex - 1
    document.querySelector("#reassigning-index-to-search-to-code-line").style.backgroundColor = "gray"
    await wait()
    document.querySelector("#reassigning-index-to-search-to-code-line").style.backgroundColor = "white"
    await wait()
  }

  document.querySelector(
    "#checking-if-value-at-middle-index-is-less-than-current-value-code-line"
  ).style.backgroundColor = "gray"
  await wait()
  document.querySelector(
    "#checking-if-value-at-middle-index-is-less-than-current-value-code-line"
  ).style.backgroundColor = "white"
  await wait()
  if (valueAtMiddleIndex < valueToSearchFor) {
    indexToSearchFrom = middleIndex + 1
    document.querySelector("#reassigning-index-to-search-from-code-line").style.backgroundColor = "gray"
    await wait()
    document.querySelector("#reassigning-index-to-search-from-code-line").style.backgroundColor = "white"
    await wait()
  }

  queryElements()[middleIndex].style.border = "1px solid black"
  await wait()

  queryElements().forEach((element, elementIndex) => {
    if (elementIndex < indexToSearchFrom || elementIndex > indexToSearchTo) {
      element.style.opacity = "0.3"
    }
  })
  /* Iteration 2. END. ========================================================================== */

  /* Iteration 3. START. ======================================================================== */
  middleIndex = indexToSearchFrom + Math.floor((indexToSearchTo - indexToSearchFrom) / 2)
  valueAtMiddleIndex = parseInt(queryElements()[middleIndex].innerText)
  queryElements()[middleIndex].style.border = "3px solid black"
  await wait()

  document.querySelector("#values-comparison-code-line").style.backgroundColor = "gray"
  await wait()
  document.querySelector("#values-comparison-code-line").style.backgroundColor = "white"
  await wait()
  if (valueToSearchFor === valueAtMiddleIndex) {
    document.querySelector("#returning-found-index-code-line").style.backgroundColor = "gray"
    await wait()
    document.querySelector("#returning-found-index-code-line").style.backgroundColor = "white"
    await wait()
    queryElements()[middleIndex].style.border = "2px solid red"
    await wait()
    queryResultContainer().innerText = middleIndex
    return
  }

  if (indexToSearchFrom === indexToSearchTo) {
    queryElements()[middleIndex].style.opacity = 0.3
    queryElements()[middleIndex].style.border = "1px solid black"
    await wait()
    document.querySelector("#returning-null-code-line").style.backgroundColor = "gray"
    await wait()
    document.querySelector("#returning-null-code-line").style.backgroundColor = "white"
    await wait()
    queryResultContainer().innerText = "null"
  }

  document.querySelector(
    "#checking-if-value-at-middle-index-is-greater-than-current-value-code-line"
  ).style.backgroundColor = "gray"
  await wait()
  document.querySelector(
    "#checking-if-value-at-middle-index-is-greater-than-current-value-code-line"
  ).style.backgroundColor = "white"
  await wait()
  if (valueAtMiddleIndex > valueToSearchFor) {
    indexToSearchTo = middleIndex - 1
    document.querySelector("#reassigning-index-to-search-to-code-line").style.backgroundColor = "gray"
    await wait()
    document.querySelector("#reassigning-index-to-search-to-code-line").style.backgroundColor = "white"
    await wait()
  }

  document.querySelector(
    "#checking-if-value-at-middle-index-is-less-than-current-value-code-line"
  ).style.backgroundColor = "gray"
  await wait()
  document.querySelector(
    "#checking-if-value-at-middle-index-is-less-than-current-value-code-line"
  ).style.backgroundColor = "white"
  await wait()
  if (valueAtMiddleIndex < valueToSearchFor) {
    indexToSearchFrom = middleIndex + 1
    document.querySelector("#reassigning-index-to-search-from-code-line").style.backgroundColor = "gray"
    await wait()
    document.querySelector("#reassigning-index-to-search-from-code-line").style.backgroundColor = "white"
    await wait()
  }

  queryElements()[middleIndex].style.border = "1px solid black"
  await wait()

  queryElements().forEach((element, elementIndex) => {
    if (elementIndex < indexToSearchFrom || elementIndex > indexToSearchTo) {
      element.style.opacity = "0.3"
    }
  })
  /* Iteration 3. END. ========================================================================== */

  /* Iteration 4. START. ======================================================================== */
  middleIndex = indexToSearchFrom + Math.floor((indexToSearchTo - indexToSearchFrom) / 2)
  valueAtMiddleIndex = parseInt(queryElements()[middleIndex].innerText)
  queryElements()[middleIndex].style.border = "3px solid black"
  await wait()

  document.querySelector("#values-comparison-code-line").style.backgroundColor = "gray"
  await wait()
  document.querySelector("#values-comparison-code-line").style.backgroundColor = "white"
  await wait()
  if (valueToSearchFor === valueAtMiddleIndex) {
    document.querySelector("#returning-found-index-code-line").style.backgroundColor = "gray"
    await wait()
    document.querySelector("#returning-found-index-code-line").style.backgroundColor = "white"
    await wait()
    queryElements()[middleIndex].style.border = "2px solid red"
    await wait()
    queryResultContainer().innerText = middleIndex
    return
  }

  if (indexToSearchFrom === indexToSearchTo) {
    queryElements()[middleIndex].style.opacity = 0.3
    queryElements()[middleIndex].style.border = "1px solid black"
    await wait()
    document.querySelector("#returning-null-code-line").style.backgroundColor = "gray"
    await wait()
    document.querySelector("#returning-null-code-line").style.backgroundColor = "white"
    await wait()
    queryResultContainer().innerText = "null"
  }

  document.querySelector(
    "#checking-if-value-at-middle-index-is-greater-than-current-value-code-line"
  ).style.backgroundColor = "gray"
  await wait()
  document.querySelector(
    "#checking-if-value-at-middle-index-is-greater-than-current-value-code-line"
  ).style.backgroundColor = "white"
  await wait()
  if (valueAtMiddleIndex > valueToSearchFor) {
    indexToSearchTo = middleIndex - 1
    document.querySelector("#reassigning-index-to-search-to-code-line").style.backgroundColor = "gray"
    await wait()
    document.querySelector("#reassigning-index-to-search-to-code-line").style.backgroundColor = "white"
    await wait()
  }

  document.querySelector(
    "#checking-if-value-at-middle-index-is-less-than-current-value-code-line"
  ).style.backgroundColor = "gray"
  await wait()
  document.querySelector(
    "#checking-if-value-at-middle-index-is-less-than-current-value-code-line"
  ).style.backgroundColor = "white"
  await wait()
  if (valueAtMiddleIndex < valueToSearchFor) {
    indexToSearchFrom = middleIndex + 1
    document.querySelector("#reassigning-index-to-search-from-code-line").style.backgroundColor = "gray"
    await wait()
    document.querySelector("#reassigning-index-to-search-from-code-line").style.backgroundColor = "white"
    await wait()
  }

  queryElements()[middleIndex].style.border = "1px solid black"
  await wait()

  queryElements().forEach((element, elementIndex) => {
    if (elementIndex < indexToSearchFrom || elementIndex > indexToSearchTo) {
      element.style.opacity = "0.3"
    }
  })
  /* Iteration 4. END. ========================================================================== */

  /* Iteration 5. START. ======================================================================== */
  middleIndex = indexToSearchFrom + Math.floor((indexToSearchTo - indexToSearchFrom) / 2)
  valueAtMiddleIndex = parseInt(queryElements()[middleIndex].innerText)
  queryElements()[middleIndex].style.border = "3px solid black"
  await wait()

  document.querySelector("#values-comparison-code-line").style.backgroundColor = "gray"
  await wait()
  document.querySelector("#values-comparison-code-line").style.backgroundColor = "white"
  await wait()
  if (valueToSearchFor === valueAtMiddleIndex) {
    document.querySelector("#returning-found-index-code-line").style.backgroundColor = "gray"
    await wait()
    document.querySelector("#returning-found-index-code-line").style.backgroundColor = "white"
    await wait()
    queryElements()[middleIndex].style.border = "2px solid red"
    await wait()
    queryResultContainer().innerText = middleIndex
    return
  }

  if (indexToSearchFrom === indexToSearchTo) {
    queryElements()[middleIndex].style.opacity = 0.3
    queryElements()[middleIndex].style.border = "1px solid black"
    await wait()
    document.querySelector("#returning-null-code-line").style.backgroundColor = "gray"
    await wait()
    document.querySelector("#returning-null-code-line").style.backgroundColor = "white"
    await wait()
    queryResultContainer().innerText = "null"
  }

  document.querySelector(
    "#checking-if-value-at-middle-index-is-greater-than-current-value-code-line"
  ).style.backgroundColor = "gray"
  await wait()
  document.querySelector(
    "#checking-if-value-at-middle-index-is-greater-than-current-value-code-line"
  ).style.backgroundColor = "white"
  await wait()
  if (valueAtMiddleIndex > valueToSearchFor) {
    indexToSearchTo = middleIndex - 1
    document.querySelector("#reassigning-index-to-search-to-code-line").style.backgroundColor = "gray"
    await wait()
    document.querySelector("#reassigning-index-to-search-to-code-line").style.backgroundColor = "white"
    await wait()
  }

  document.querySelector(
    "#checking-if-value-at-middle-index-is-less-than-current-value-code-line"
  ).style.backgroundColor = "gray"
  await wait()
  document.querySelector(
    "#checking-if-value-at-middle-index-is-less-than-current-value-code-line"
  ).style.backgroundColor = "white"
  await wait()
  if (valueAtMiddleIndex < valueToSearchFor) {
    indexToSearchFrom = middleIndex + 1
    document.querySelector("#reassigning-index-to-search-from-code-line").style.backgroundColor = "gray"
    await wait()
    document.querySelector("#reassigning-index-to-search-from-code-line").style.backgroundColor = "white"
    await wait()
  }

  queryElements()[middleIndex].style.border = "1px solid black"
  await wait()

  queryElements().forEach((element, elementIndex) => {
    if (elementIndex < indexToSearchFrom || elementIndex > indexToSearchTo) {
      element.style.opacity = "0.3"
    }
  })
  /* Iteration 5. END. ========================================================================== */

  document.querySelector("#returning-null-code-line").style.backgroundColor = "gray"
  await wait()
  document.querySelector("#returning-null-code-line").style.backgroundColor = "white"

  queryResultContainer().innerText = "null"
})
