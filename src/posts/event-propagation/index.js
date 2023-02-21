const elementsIds = ["html", "body", "form", "input", "textarea", "button"]

let eventOccurings = []

const showEventDirection = ({ currentTargetId, phase }) => {
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
    (event) => {
      eventOccurings.push(event)
      setTimeout(() => {
        element.classList.add("active")
      }, eventOccurings.length * 1500 + 500)
      setTimeout(() => {
        showEventDirection({ currentTargetId: elementId, phase: "capturing" })
      }, eventOccurings.length * 1500)
      setTimeout(() => {
        element.classList.remove("active")
        eventOccurings.shift()
      }, eventOccurings.length * 1500 + 1500)
    },
    { capture: true }
  )
  element.addEventListener("click", (event) => {
    eventOccurings.push(event)
    setTimeout(() => {
      element.classList.add("active")
    }, eventOccurings.length * 1500 + 500)
    setTimeout(() => {
      showEventDirection({ currentTargetId: elementId, phase: "bubbling" })
    }, eventOccurings.length * 1500)
    setTimeout(() => {
      element.classList.remove("active")
      eventOccurings.shift()
    }, eventOccurings.length * 1500 + 1500)
  })
})
