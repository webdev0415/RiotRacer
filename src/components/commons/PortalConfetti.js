import React from "react"
import { createPortal } from "react-dom"
import Confetti from "react-confetti"
import useWindowDimensions from "hooks/useWindowDimensions"

const PortalConfetti = ({ recycle, onComplete }) => {
  const { width, height } = useWindowDimensions()
  return createPortal(
    <Confetti
      width={width}
      height={height}
      recycle={recycle}
      onConfettiComplete={onComplete}
      style={{ zIndex: 1100, position: "fixed" }}
    />,
    document.body
  )
}

export default PortalConfetti
