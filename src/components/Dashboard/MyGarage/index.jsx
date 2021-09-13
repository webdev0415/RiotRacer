import React from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { MainWrapper } from "components/commons"
import { gargageLoadingSelector } from "store/gargage/selectors"
import CarsTab from "./CarsTab"

import "./styles.scss"

const MyGarage = () => {
  const { t } = useTranslation()
  const { loading, internalLoad } = useSelector(gargageLoadingSelector)

  return (
    <MainWrapper
      title={t("garage.pageTitle")}
      className="RioGarage"
      loading={loading}
      internalLoad={internalLoad}
    >
      <CarsTab />
    </MainWrapper>
  )
}

export default MyGarage
