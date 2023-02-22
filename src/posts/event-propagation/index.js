const wait = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 500)
  })
}

const highlightLayer = async ({ layerId }) => {
  const layer = document.querySelector(`.demo #${layerId}`)
  layer.classList.add("active")
  await wait()
  layer.classList.remove("active")
}

const elementsIds = ["html", "body", "form", "input", "textarea", "button"]

let eventOccurings = []

const showEventDirection = async ({ from, to }) => {
  if (from === to) return
  const arrow = document.querySelector(`#arrow-from-${from}-to-${to}`)
  arrow.style.visibility = "visible"
  await wait()
  arrow.style.visibility = "hidden"
}

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
    const eventOccuringsMoves = []
    for (const eventOccuringIndex in eventOccurings) {
      const currentEventOccuring = eventOccurings[eventOccuringIndex]
      const nextEventOccuring = eventOccurings[parseInt(eventOccuringIndex) + 1]
      if (nextEventOccuring === undefined) continue
      eventOccuringsMoves.push({ from: currentEventOccuring.currentTargetId, to: nextEventOccuring.currentTargetId })
    }
    for (const eventOccuringMove of eventOccuringsMoves) {
      await highlightLayer({ layerId: eventOccuringMove.from })
      await showEventDirection({ from: eventOccuringMove.from, to: eventOccuringMove.to })
      await wait()
    }
    await highlightLayer({ layerId: eventOccuringsMoves[eventOccuringsMoves.length - 1].to })
    eventOccurings = []
  }, 0)
})
