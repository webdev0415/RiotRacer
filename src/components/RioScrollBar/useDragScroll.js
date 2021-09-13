const useDragScroll = (containerRef, ps, options = { direction: "both" }) => {
  const { direction } = options
  let initialPosition = { scrollTop: 0, scrollLeft: 0, mouseX: 0, mouseY: 0 }

  const onMouseMove = (evt) => {
    const dx = evt.clientX - initialPosition.mouseX
    const dy = evt.clientY - initialPosition.mouseY
    if (direction !== "horizontal") {
      containerRef.current.scrollTop = initialPosition.scrollTop - dy
    }
    if (direction !== "vertical") {
      containerRef.current.scrollLeft = initialPosition.scrollLeft - dx
    }
  }

  const onMouseUp = () => {
    containerRef.current.style.cursor = null
    containerRef.current.style.userSelect = null

    document.removeEventListener("mousemove", onMouseMove)
    document.removeEventListener("mouseup", onMouseUp)

    if (ps?.current) {
      ps?.current?.update()
    }
  }

  const onMouseDown = (evt) => {
    if (containerRef.current) {
      initialPosition = {
        mouseX: evt.clientX,
        mouseY: evt.clientY,
        scrollLeft: containerRef.current.scrollLeft,
        scrollTop: containerRef.current.scrollTop,
      }

      containerRef.current.style.cursor = "grabbing"
      containerRef.current.style.userSelect = "none"

      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseup", onMouseUp)
    }
  }

  return { onMouseDown }
}

export default useDragScroll
