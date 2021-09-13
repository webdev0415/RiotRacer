import React, { useMemo } from "react"
import { useTranslation } from "react-i18next"
import { Link, useLocation } from "react-router-dom"
import RioScrollBar from "components/RioScrollBar"
import { getUserMenu } from "constants/routes"

import "./styles.scss"

const SideMenu = () => {
  const { pathname } = useLocation()
  const { i18n, t } = useTranslation()
  const opts = useMemo(getUserMenu, [i18n.language])

  return (
    <div className="DashboardSideMenu">
      <RioScrollBar>
        <div className="heading1">{t("account")}</div>
        {opts.map((elem, index) => (
          <Link to={elem.route} key={index}>
            <div
              className={
                pathname === elem.route ? "SideMenuItem active" : "SideMenuItem"
              }
            >
              {elem.icon}
              <span>{elem.title}</span>
            </div>
          </Link>
        ))}
      </RioScrollBar>
    </div>
  )
}

export default SideMenu
