import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import Modal from "components/commons/Modal"
import TagButton from "components/commons/Button/TagButton"
import IconFilter from "components/commons/Icons/IconFilter"
import Checkbox from "components/commons/Checkbox"

import RioCard from "components/commons/Card/RioCard"
import useWindowDimensions from "hooks/useWindowDimensions"
import { IPAD_PORTRAIT } from "constants/breakPoints"

import "./TypeFilter.scss"

// TODO: expected option to be same with logTypes
const filterOpts = [
  "showAll",
  "login",
  // "races",
  // "purchase",
  // "earning",
  // "withdraw",
]

const FilterComp = ({ options, onChange }) => {
  const { t } = useTranslation()
  return (
    <div className="FilterList">
      <h2 className="heading2">{t("filter")}</h2>
      {filterOpts.map((op, opIndx) => {
        const checked =
          op === "showAll" ? options.length === 0 : options.includes(op)

        return (
          <div key={opIndx}>
            <Checkbox
              varient="secondary"
              checked={checked}
              onChange={() => onChange(op)}
            >
              <span className="subtitle1">{t(`activityTypes.${op}`)}</span>
            </Checkbox>
          </div>
        )
      })}
    </div>
  )
}

function TypeFilter({ options, onChange }) {
  const { t } = useTranslation()
  const [filterOpen, setFilterOpen] = useState(false)
  const { width } = useWindowDimensions()
  const isSmallDevice = width <= IPAD_PORTRAIT - 1

  const openFilter = () => {
    setFilterOpen(true)
  }

  const closeFilter = () => {
    setFilterOpen(false)
  }

  return (
    <div className="ActivitiesTypeFilter">
      {!isSmallDevice && (
        <RioCard className="ActivitiesFilterCard">
          <FilterComp onChange={onChange} options={options} />
        </RioCard>
      )}

      {!filterOpen && isSmallDevice && (
        <TagButton
          label={t("filter")}
          varient="primary"
          icon={<IconFilter />}
          onClick={openFilter}
          className="ActivityFilterButton"
        />
      )}

      <Modal
        bottom
        width="100vw"
        onCancel={closeFilter}
        visible={filterOpen}
        className="ActivitiesFilterModal"
        style={{ maxWidth: "100vw", margin: 0 }}
      >
        <FilterComp onChange={onChange} options={options} />
      </Modal>
    </div>
  )
}

export default TypeFilter
