const elementsIds = ["html", "body", "form", "input", "textarea", "button"]

elementsIds.forEach((elementId) => {
  const element = document.querySelector(`.demo #${elementId}`)
  element.addEventListener("click", () => {
    console.log({ element: elementId, stage: "bubbling" })
  })
  element.addEventListener(
    "click",
    () => {
      console.log({ element: elementId, stage: "capturing" })
    },
    { capture: true }
  )
})
