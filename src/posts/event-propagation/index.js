const elementsIds = ["html", "body", "form", "input", "textarea", "button"]

let eventsAmount = 0

elementsIds.forEach((elementId) => {
  const element = document.querySelector(`.demo #${elementId}`)
  element.addEventListener(
    "click",
    () => {
      eventsAmount += 1
      setTimeout(() => {
        element.classList.add("active")
      }, eventsAmount * 1000 + 500)
      setTimeout(() => {
        element.classList.remove("active")
        eventsAmount -= 1
      }, eventsAmount * 1000 + 1000)
    },
    { capture: true }
  )
  element.addEventListener("click", () => {
    eventsAmount += 1
    setTimeout(() => {
      element.classList.add("active")
    }, eventsAmount * 1000 + 500)
    setTimeout(() => {
      element.classList.remove("active")
      eventsAmount -= 1
    }, eventsAmount * 1000 + 1000)
  })
})
