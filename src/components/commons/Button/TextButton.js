import React, { useMemo } from "react"
import IconCaretRight from "../Icons/IconCaretRight"

import "./TextButton.scss"

const RioTextButton = ({
  text,
  varient,
  className,
  onClick,
  hideIcon,
  disabled,
}) => {
  const classes = useMemo(() => {
    let baseStyle = "RioTextButton"
    if (varient) {
      baseStyle = `${baseStyle} ${varient}`
    }
    if (className) {
      baseStyle = `${baseStyle} ${className}`
    }

    if (disabled) {
      baseStyle = `${baseStyle} disabled`
    }
    return baseStyle
  }, [varient, className, disabled])

  return (
    <div className={classes} role="presentation" onClick={onClick}>
      <span>{text}</span>
      {!hideIcon && <IconCaretRight />}
    </div>
  )
}

export default RioTextButton
