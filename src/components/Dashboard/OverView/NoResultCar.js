import React from "react"
import { useTranslation } from "react-i18next"
import NoResult from "components/commons/NoResult"
import RioCard from "components/commons/Card/RioCard"
import RioTextButton from "components/commons/Button/TextButton"

const NoResultCar = () => {
  const [t] = useTranslation()

  const clickShopNow = () => {
    window.open("https://opensea.io/collection/riot-racers-cars", "_blank")
  }

  return (
    <RioCard className="NoResultCar">
      <div className="NoResultCarContent">
        <NoResult strPath="car" onClick={clickShopNow} />
      </div>
      <div className="RioCarActions">
        <RioTextButton text={t("car.changeCar")} disabled />
      </div>
    </RioCard>
  )
}

export default NoResultCar
