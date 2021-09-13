import React from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { openModalAction } from "store/modal/actions"
import RioButton from "components/commons/Button"
// import IconChat from "components/commons/Icons/IconChat"
import { isAuthorizedSelector } from "store/auth/selectors"

import "./styles.scss"

const RioFooter = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const isAuthorized = useSelector(isAuthorizedSelector)

  const openModal = () => {
    dispatch(openModalAction({ type: "authModal", step: 2 }))
  }
  return (
    <div className="RioFooter">
      <div className={isAuthorized ? "Buttons Authorized" : "Buttons"}>
        {/* <div className="HelpButton">
          <RioButton>
            <IconChat />
            <span>{t("help")}</span>
          </RioButton>
        </div> */}
        {!isAuthorized && (
          <RioButton onClick={openModal} className="StartButton">
            {t("start")}
          </RioButton>
        )}
      </div>
      <p className="copyright">{t("footer.text")}</p>
      <div className="links">
        <Link to="/terms-of-service">{t("footer.terms")}</Link>
        <Link to="/privacy-policy">{t("footer.privacy")}</Link>
      </div>
    </div>
  )
}

export default RioFooter
