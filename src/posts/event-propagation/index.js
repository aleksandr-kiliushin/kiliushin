const elementsIds = ["html", "body", "form", "input", "textarea", "button"]

let eventsAmount = 0

elementsIds.forEach((elementId) => {
  const element = document.querySelector(`.demo #${elementId}`)
  element.addEventListener(
    "click",
    () => {
      eventsAmount += 1
      setTimeout(() => {
        console.log({ element: elementId, stage: "capturing" })
        eventsAmount -= 1
      }, eventsAmount * 500 + 500)
    },
    { capture: true }
  )
  element.addEventListener("click", () => {
    eventsAmount += 1
    setTimeout(() => {
      console.log({ element: elementId, stage: "capturing" })
      eventsAmount -= 1
    }, eventsAmount * 500 + 500)
  })
})
