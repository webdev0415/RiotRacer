import React, { useEffect } from "react"
import { isEmpty } from "lodash"
import { useSelector, useDispatch } from "react-redux"
import StationCard from "components/commons/Card/StationCard"
import Spinner from "components/commons/Spinner"
import NoResult from "components/commons/NoResult"

import { getStationsByEthReqAction } from "store/stations/actions"
import { getStationsSelector } from "store/stations/selectors"

const Stations = () => {
  const dispatch = useDispatch()
  const { stations, loading } = useSelector(getStationsSelector)

  useEffect(() => {
    if (isEmpty(stations)) {
      dispatch(getStationsByEthReqAction())
    }
  }, [])

  const clickShopNow = () => {
    window.open(
      "https://opensea.io/collection/riot-racers-gas-stations",
      "_blank"
    )
  }

  if (loading) {
    return <Spinner />
  }

  if (isEmpty(stations)) {
    return <NoResult strPath="assets.stations" onClick={clickShopNow} />
  }

  return (
    <div className="StationsGrid">
      {stations.map((asset, index) => (
        <StationCard
          key={index}
          assetId={asset.id}
          name={asset.name}
          uri={asset.image}
          tokens={asset.tokens || 0}
        />
      ))}
    </div>
  )
}

export default Stations
