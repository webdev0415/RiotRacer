import React, { useMemo } from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { Modal as AntModal } from "antd"
import CloseIcon from "../Icons/IconClose"
import RioButton from "../Button"

import "./styles.scss"

const CustomModal = ({
  onCancel,
  onConfirm,
  children,
  title,
  visible,
  closable,
  footer,
  width,
  height,
  className,
  isFull,
  hideClose,
  style,
  bottom,
}) => {
  const { t } = useTranslation()
  const classes = useMemo(() => {
    let base = "rio-modal"
    if (className) {
      base = `${base} ${className}`
    }
    if (isFull) {
      base = `${base} fullScreen`
    }
    if (bottom) {
      base = `${base} bottom`
    }
    return base
  }, [className, isFull, bottom])

  return (
    <AntModal
      centered
      footer={null}
      visible={visible}
      onCancel={onCancel}
      closable={false}
      style={style}
      width={isFull ? "100vw" : width}
      height={isFull ? "100vh" : height}
      wrapClassName={classes}
    >
      <div className="rio-modal-header">
        {title}
        {!hideClose && (
          <div
            className="close_btn"
            onClick={onCancel}
            onKeyDown={onCancel}
            role="button"
            tabIndex="0"
          >
            <CloseIcon />
          </div>
        )}
      </div>
      <div className="rio-modal-body">
        {children}
        {footer && (
          <div className="rio-modal-footer">
            <RioButton onClick={onCancel}>{t("cancel")}</RioButton>
            <RioButton disabled={closable} onClick={onConfirm}>
              {t("save")}
            </RioButton>
          </div>
        )}
      </div>
      {/* <div className="rio-modal-footer"></div> */}
    </AntModal>
  )
}

CustomModal.propTypes = {
  onCancel: PropTypes.func,
  closable: PropTypes.bool,
  visible: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
}

CustomModal.defaultProps = {
  className: "",
  closable: false,
  onCancel: () => null,
  width: 520,
  height: "auto",
}

export default CustomModal
