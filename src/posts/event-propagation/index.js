let startDate = Date.now()

const wait = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration)
  })
}

const highlightLayer = ({ layerId }) => {
  console.log("Layer highlighting ON:", Date.now() - startDate)
  const layer = document.querySelector(`.demo #${layerId}`)
  layer.classList.add("active")
  setTimeout(() => {
    console.log("Layer highlighting OFF:", Date.now() - startDate)
    layer.classList.remove("active")
  }, 2000)
}

const showEventDirection = ({ from, to }) => {
  if (from === to) return
  const arrow = document.querySelector(`#arrow-from-${from}-to-${to}`)
  setTimeout(() => {
    console.log("Arrow highlighting ON:", Date.now() - startDate)
    arrow.style.visibility = "visible"
  }, 1500)
  setTimeout(() => {
    console.log("Arrow highlighting OFF:", Date.now() - startDate)
    arrow.style.visibility = "hidden"
  }, 3500)
}

const elementsIds = ["html", "body", "form", "input", "textarea", "button"]

let eventOccurings = []

elementsIds.forEach((elementId) => {
  const element = document.querySelector(`.demo #${elementId}`)
  element.addEventListener(
    "click",
    (event) => {
      eventOccurings.push({
        currentTargetId: event.currentTarget.id,
        targetId: event.target.id,
      })
    },
    { capture: true }
  )
  element.addEventListener("click", (event) => {
    eventOccurings.push({
      currentTargetId: event.currentTarget.id,
      targetId: event.target.id,
    })
  })
})

document.querySelector(".demo #html").addEventListener("click", () => {
  setTimeout(async () => {
    startDate = Date.now()
    const eventOccuringsMoves = []
    for (const eventOccuringIndex in eventOccurings) {
      const currentEventOccuring = eventOccurings[eventOccuringIndex]
      const nextEventOccuring = eventOccurings[parseInt(eventOccuringIndex) + 1]
      if (nextEventOccuring === undefined) continue
      eventOccuringsMoves.push({ from: currentEventOccuring.currentTargetId, to: nextEventOccuring.currentTargetId })
    }
    for (const eventOccuringMove of eventOccuringsMoves) {
      highlightLayer({ layerId: eventOccuringMove.from })
      showEventDirection({ from: eventOccuringMove.from, to: eventOccuringMove.to })
      await wait(3000)
    }
    const lastEventOccuringMove = eventOccuringsMoves[eventOccuringsMoves.length - 1]
    highlightLayer({ layerId: lastEventOccuringMove.to })
    eventOccurings = []
  }, 0)
})
