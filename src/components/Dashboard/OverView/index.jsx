import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { useHistory } from "react-router-dom"
import { isEmpty } from "lodash"
import { MainWrapper } from "components/commons"
import RioLabel from "components/commons/Label"
import CarCard from "components/commons/Card/CarCard"
import ActivitiesCard from "components/commons/Card/Activities"
import { activitiesSelector } from "store/activities/selectors"
import { getActivitesReqAction } from "store/activities/actions"
import { getUserSelector } from "store/auth/selectors"
import { getSelectedCarReqAction } from "store/cars/actions"
import { getCarSelector } from "store/cars/selectors"
import CarSummary from "./CarSummary"
import WalletCard from "./WalletCard"

import NoResultCar from "./NoResultCar"

import "./style.scss"

function OverView() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector(getUserSelector)
  const { selectedCar, loading } = useSelector(getCarSelector)
  const { activities } = useSelector(activitiesSelector)

  const handleGoGarage = () => {
    history.push("/dashboard/garage")
  }

  const handleClickWallet = () => {}

  const handleClickActivites = () => {
    history.push("/dashboard/activity")
  }

  useEffect(() => {
    dispatch(getActivitesReqAction())
    if (user && isEmpty(selectedCar)) {
      dispatch(getSelectedCarReqAction(user?.id))
    }
  }, [user])

  return (
    <MainWrapper
      loading={loading}
      title={t("overview")}
      className="OverviewContainer"
    >
      <div className="LeftContent">
        {selectedCar && (
          <RioLabel
            helperKey="selectedCar"
            label={`#${selectedCar.id} ${selectedCar.name}`}
          />
        )}
        {selectedCar && (
          <CarCard
            playing
            item={selectedCar}
            onChange={handleGoGarage}
            extraRender={<CarSummary car={selectedCar} />}
          />
        )}
        {!selectedCar && <NoResultCar />}
      </div>
      <div className="RightContent">
        <div className="WalletBlock">
          <RioLabel
            label={t("wallet")}
            helperKey="wallet"
            placement="topLeft"
          />
          <WalletCard onClick={handleClickWallet} />
        </div>
        <div className="ActivitiesBlock">
          <RioLabel
            label={t("activities")}
            helperKey="activities"
            placement="topLeft"
          />
          <ActivitiesCard
            activities={(activities || []).slice(0, 5)}
            onViewMore={handleClickActivites}
          />
        </div>
      </div>
    </MainWrapper>
  )
}

export default OverView
