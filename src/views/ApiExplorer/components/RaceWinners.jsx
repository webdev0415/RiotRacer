import React from "react"
import Playground from "./Playground"
import initData from "./data/RaceWinners.json"

const RaceWinners = () => {
  const endpoint = "https://riotracersapi-dev.herokuapp.com/api/race/winners"
  return (
    <Playground
      type="POST"
      endpoint={endpoint}
      initPayload={initData.payload}
      initResponse={initData.response}
    />
  )
}

export default RaceWinners
