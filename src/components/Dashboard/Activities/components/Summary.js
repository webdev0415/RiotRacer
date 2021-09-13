import React from "react"
import { useTranslation } from "react-i18next"
import "./summary.scss"

const Summary = () => {
  const { t } = useTranslation()

  return (
    <div className="ActivitiesSummary">
      <div className="SummaryCol">
        <div className="value">0.000 RIOT</div>
        <div className="label">{t("purchased")}</div>
      </div>
      <div className="SummaryCol">
        <div className="value">0.000 RIOT</div>
        <div className="label">{t("earned")}</div>
      </div>
      <div className="SummaryCol">
        <div className="value">0.000 RIOT</div>
        <div className="label">{t("spent")}</div>
      </div>
      <div className="SummaryCol">
        <div className="value">0.000 RIOT</div>
        <div className="label">{t("withdraw")}</div>
      </div>
    </div>
  )
}

export default Summary
