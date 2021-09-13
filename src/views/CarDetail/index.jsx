import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { isEmpty } from "lodash"

import { getGargageReqAction } from "store/gargage/actions"
import { currentCarSelector } from "store/gargage/selectors"
import { authStateSelector } from "store/auth/selectors"

import { MainWrapper } from "components/commons"
import DefaultLayout from "layout/DefaultLayout"
import Loading from "components/commons/Loading"
import RioLabel from "components/commons/Label"
import CarCard from "./CarCard"
import ChangeCar from "components/ChangeCar"
import SalesHistory from "./SalesHistory"
import PageHeader from "./Header"

import "./styles.scss"

function CarDetail({ computedMatch: match }) {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  // TODO: salesData should be retrieved from backend.
  const {
    currentCar = {},
    loading,
    salesData = [],
  } = useSelector(currentCarSelector)
  const { user, isLoggedIn } = useSelector(authStateSelector)
  const [isEdit, setStatus] = useState(false)
  const { id: carId } = match.params

  useEffect(() => {
    dispatch(getGargageReqAction(carId))
  }, [])

  const hasPermission = () => {
    const { publicAddress } = user
    return (
      isLoggedIn &&
      publicAddress.toLowerCase() === currentCar?.ethAddress.toLowerCase()
    )
  }

  const openForm = () => {
    setStatus(true)
  }

  const closeForm = () => {
    setStatus(false)
  }

  const { id, name } = currentCar || {}

  if (loading || isEmpty(currentCar)) {
    return <Loading />
  }

  return (
    <DefaultLayout>
      <MainWrapper className="CarDetailContainer">
        <div className="LeftContent">
          <RioLabel
            className="carCardTitle"
            label={
              <PageHeader
                name={name}
                carId={id}
                permission={hasPermission()}
                changeName={openForm}
              />
            }
          />
          <CarCard showSummary item={currentCar} />
        </div>
        <div className="RightContent">
          <div className="SalesHisotryBlock">
            <RioLabel label={t("salesHistories")} />
            <SalesHistory histories={salesData} />
          </div>
        </div>
        {isEdit && <ChangeCar onClose={closeForm} name={name} carId={carId} />}
      </MainWrapper>
    </DefaultLayout>
  )
}

export default CarDetail
