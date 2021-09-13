import React from "react"
import TagButton from "components/commons/Button/TagButton"

import "./PeriodFilter.scss"
import { useTranslation } from "react-i18next"

const PeriodFilter = ({ value, onChange }) => {
  const { t } = useTranslation()
  return (
    <div className="ActivitiesByPeriod">
      <TagButton
        label={t("activity.today")}
        onClick={() => onChange(1)}
        actived={value === 1}
      />
      <TagButton
        label={t("activity.last7")}
        onClick={() => onChange(7)}
        actived={value === 7}
      />
      <TagButton
        label={t("activity.last30")}
        onClick={() => onChange(30)}
        actived={value === 30}
      />
      <TagButton
        label={t("activity.all")}
        onClick={() => onChange(null)}
        actived={!value}
      />
    </div>
  )
}

export default PeriodFilter
