import React, { useMemo, useRef } from "react"
import { Button } from "antd"
import PropTypes from "prop-types"

import "./button.scss"

const RioButton = ({
  children,
  varient,
  className,
  onClick,
  size,
  ...rest
}) => {
  const btnRef = useRef()

  const classes = useMemo(() => {
    let base = "RioButton"
    if (varient) {
      base = `${base} ${varient}`
    }
    if (className) {
      base = `${base} ${className}`
    }
    if (size) {
      base = `${base} ${size}`
    }
    return base
  }, [varient, size, className])

  const handleClick = (e) => {
    if (btnRef.current) {
      btnRef.current.blur()
    }
    if (typeof onClick === "function") {
      onClick(e)
    }
  }

  return (
    <Button {...rest} onClick={handleClick} className={classes} ref={btnRef}>
      {children}
    </Button>
  )
}

RioButton.propTypes = {
  varient: PropTypes.string,
}

RioButton.defaultProps = {
  varient: "primary",
}

export default RioButton
