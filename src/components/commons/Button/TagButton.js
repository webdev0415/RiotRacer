import React, { useMemo } from "react"
import PropTypes from "prop-types"

import "./TagButton.scss"

const TagButton = ({ varient, className, label, icon, actived, onClick }) => {
  const classes = useMemo(() => {
    let base = "RioTagButton"
    if (varient) {
      base = `${base} ${varient}`
    }
    if (className) {
      base = `${base} ${className}`
    }

    if (actived) {
      base = `${base} actived`
    }
    return base
  }, [varient, className, actived])

  return (
    <div className={classes} role="presentation" onClick={onClick}>
      <span>{label}</span>
      <span>{icon}</span>
    </div>
  )
}

TagButton.propTypes = {
  varient: PropTypes.string,
}

TagButton.defaultProps = {
  varient: "",
}

export default TagButton
