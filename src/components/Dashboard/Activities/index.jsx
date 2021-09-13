import React, { useEffect, useMemo, useState } from "react"
import { isEmpty } from "lodash"
import dayjs from "dayjs"
import { useDispatch, useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { MainWrapper } from "components/commons"
import { activitiesSelector } from "store/activities/selectors"
import { getActivitesReqAction } from "store/activities/actions"

import ActivitiesCard from "components/commons/Card/Activities"
import TypeFilter from "./components/TypeFilter"
import PeriodFilter from "./components/PeriodFilter"
import Summary from "./components/Summary"
import Switch from "components/commons/Switch"

import "./styles.scss"

function Container() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { activities, loading } = useSelector(activitiesSelector)
  const [options, setOptions] = useState([])
  const [filterByPeriod, setFilterByPeriod] = useState("")
  const [showOnlyEarn, setShowOnlyEarn] = useState(false)

  const updateFilters = (op) => {
    if (op === "showAll") {
      setOptions([])
    } else if (options.includes(op)) {
      setOptions(options.filter((x) => x !== op))
    } else {
      setOptions([...options, op])
    }
  }

  const toggleChangeShowEarn = (checked) => {
    setShowOnlyEarn(checked)
  }

  useEffect(() => {
    dispatch(getActivitesReqAction())
  }, [])

  const entities = useMemo(() => {
    let filtered = activities.filter(
      (ite) => isEmpty(options) || options.includes(ite.logType)
    )

    if (filterByPeriod) {
      const startDate =
        filterByPeriod === 1
          ? dayjs().subtract(dayjs().get("hours"), "hours")
          : dayjs().subtract(filterByPeriod, "days")

      filtered = filtered.filter((ite) => {
        const createAt = dayjs(ite.createdAt)
        return startDate.isBefore(createAt)
      })
    }

    return filtered
  }, [activities, options, filterByPeriod])

  return (
    <MainWrapper title={t("activity.pageTitle")}>
      <div className="ActivitiesContainer">
        <PeriodFilter value={filterByPeriod} onChange={setFilterByPeriod} />
        <Summary />
        <div className="ShowEarningOnly">
          <span className="subtitle1">{t("activity.showEarnOnly")}</span>
          <Switch checked={showOnlyEarn} onChange={toggleChangeShowEarn} />
        </div>
        <div className="ActivitiesWrapper">
          <TypeFilter options={options} onChange={updateFilters} />
          <ActivitiesCard activities={entities} loading={loading} />
        </div>
      </div>
    </MainWrapper>
  )
}

export default Container
