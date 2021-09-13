import React, { useEffect, useMemo, useRef } from "react"
import PropTypes from "prop-types"
import PerfectScrollbar from "perfect-scrollbar"
import useDragScroll from "./useDragScroll"

import "perfect-scrollbar/css/perfect-scrollbar.css"
import "./styles.scss"

const handlerNameByEvent = {
  "ps-scroll-y": "onScrollY",
  "ps-scroll-x": "onScrollX",
  "ps-scroll-up": "onScrollUp",
  "ps-scroll-down": "onScrollDown",
  "ps-scroll-left": "onScrollLeft",
  "ps-scroll-right": "onScrollRight",
  "ps-y-reach-start": "onYReachStart",
  "ps-y-reach-end": "onYReachEnd",
  "ps-x-reach-start": "onXReachStart",
  "ps-x-reach-end": "onXReachEnd",
}
Object.freeze(handlerNameByEvent)

const RioScrollBar = ({
  className,
  options,
  component,
  children,
  dragScroll,
  ...restProps
}) => {
  const Comp = component
  const containerRef = useRef()
  const _ps = useRef()
  const { onMouseDown } = useDragScroll(containerRef, _ps)

  const attachEvents = () => {
    Object.keys(handlerNameByEvent).forEach((evName) => {
      const callback = restProps[handlerNameByEvent[evName]]
      if (callback) {
        const handler = (...args) => callback(containerRef.current, ...args)
        containerRef.current.addEventListener(evName, handler, false)
      }
    })
  }

  const updateScroll = () => {
    if (_ps.current) {
      _ps.current.update()
    }
  }

  useEffect(() => {
    if (containerRef.current) {
      _ps.current = new PerfectScrollbar(containerRef.current, options)
      attachEvents()
      updateScroll()
    }
  }, [])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0
    }
    if (_ps.current) {
      _ps.current.update()
    }
  })

  const classes = useMemo(() => {
    let base = "scrollbar-container"
    if (className) {
      base = `${base} ${className}`
    }
    return base
  }, [className])

  const extraProps = useMemo(() => {
    if (dragScroll) {
      return { onMouseDown }
    }
    return {}
  }, [dragScroll])

  return (
    <Comp ref={containerRef} className={classes} {...extraProps}>
      {children}
    </Comp>
  )
}

RioScrollBar.defaultProps = {
  className: "",
  style: undefined,
  options: undefined,
  onScrollY: undefined,
  onScrollX: undefined,
  onScrollUp: undefined,
  onScrollDown: undefined,
  onScrollLeft: undefined,
  onScrollRight: undefined,
  onYReachStart: undefined,
  onYReachEnd: undefined,
  onXReachStart: undefined,
  onXReachEnd: undefined,
  dragScroll: false,
  onSync: (ps) => ps.update(),
  component: "div",
}

RioScrollBar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  options: PropTypes.shape({}),
  onScrollY: PropTypes.func,
  onScrollX: PropTypes.func,
  onScrollUp: PropTypes.func,
  onScrollDown: PropTypes.func,
  onScrollLeft: PropTypes.func,
  onScrollRight: PropTypes.func,
  onYReachStart: PropTypes.func,
  onYReachEnd: PropTypes.func,
  onXReachStart: PropTypes.func,
  onXReachEnd: PropTypes.func,
  onSync: PropTypes.func,
  dragScroll: PropTypes.bool,
  component: PropTypes.string,
}

export default RioScrollBar
