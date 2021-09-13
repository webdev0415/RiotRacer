import React from "react"
import { useTranslation } from "react-i18next"

import Switch from "components/commons/Switch"
import IconEmail from "components/commons/Icons/IconEmail"

const Notification = () => {
  const { t } = useTranslation()

  return (
    <div className="NotificationWrapper">
      <h2 className="heading2">{t("notificationSettings")}</h2>
      <div className="NotificationSettingPanel">
        <div>
          <IconEmail />
          <span className="subtitle2">{t("notificationDesc")}</span>
        </div>
        <Switch />
      </div>
    </div>
  )
}

export default Notification
