const elementsIds = ["html", "body", "form", "input", "textarea", "button"]

let eventsAmount = 0

const toggleArrow = ({ currentTargetId, phase }) => {
  let arrow = null

  if (phase === "capturing") {
    if (currentTargetId === "body") {
      arrow = document.querySelector("#arrow-from-html-to-body")
    }
    if (currentTargetId === "form") {
      arrow = document.querySelector("#arrow-from-body-to-form")
    }
    if (currentTargetId === "input") {
      arrow = document.querySelector("#arrow-from-form-to-input")
    }
    if (currentTargetId === "textarea") {
      arrow = document.querySelector("#arrow-from-form-to-textarea")
    }
    if (currentTargetId === "button") {
      arrow = document.querySelector("#arrow-from-form-to-button")
    }
  }

  if (phase === "bubbling") {
    if (currentTargetId === "html") {
      arrow = document.querySelector("#arrow-from-body-to-html")
    }
    if (currentTargetId === "body") {
      arrow = document.querySelector("#arrow-from-form-to-body")
    }
    if (currentTargetId === "form") {
      arrow = document.querySelector("#arrow-from-input-to-form")
    }
  }

  if (arrow === null) return

  arrow.style.visibility = "visible"
  setTimeout(() => {
    arrow.style.visibility = "hidden"
  }, 1000)
}

elementsIds.forEach((elementId) => {
  const element = document.querySelector(`.demo #${elementId}`)
  element.addEventListener(
    "click",
    () => {
      eventsAmount += 1
      setTimeout(() => {
        element.classList.add("active")
      }, eventsAmount * 1500 + 500)
      setTimeout(() => {
        toggleArrow({ currentTargetId: elementId, phase: "capturing" })
      }, eventsAmount * 1500)
      setTimeout(() => {
        element.classList.remove("active")
        eventsAmount -= 1
      }, eventsAmount * 1500 + 1500)
    },
    { capture: true }
  )
  element.addEventListener("click", () => {
    eventsAmount += 1
    setTimeout(() => {
      element.classList.add("active")
    }, eventsAmount * 1500 + 500)
    setTimeout(() => {
      toggleArrow({ currentTargetId: elementId, phase: "bubbling" })
    }, eventsAmount * 1500)
    setTimeout(() => {
      element.classList.remove("active")
      eventsAmount -= 1
    }, eventsAmount * 1500 + 1500)
  })
})
