import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { useHistory } from "react-router-dom"
import { MainWrapper } from "components/commons"
import TagButton from "components/commons/Button/TagButton"
import RioButton from "components/commons/Button"
import NoResult from "components/commons/NoResult"

import Stations from "./Stations"
import Summary from "./Summary"

import "./styles.scss"
import { Tooltip } from "antd"

const Assets = () => {
  const { t } = useTranslation()
  const history = useHistory()
  const [activeTab, setActiveTab] = useState("stations")

  const handleClickClaim = () => {
    history.push("/dashboard/wallet")
  }

  const title = (
    <>
      {t("assets.pageTitle")}
      <Tooltip title={t("comingSoon")}>
        <span className="DisabledTooltipWrapper">
          <RioButton
            className="AssetsClaimTokenBtn"
            onClick={handleClickClaim}
            disabled
          >
            {t("claim-tokens")}
          </RioButton>
        </span>
      </Tooltip>
    </>
  )

  return (
    <MainWrapper title={title} className="AssetsContainer">
      <Summary />
      <div className="AssetsTabs">
        <TagButton
          label={t("assets.stations.title")}
          actived={activeTab === "stations"}
          onClick={() => setActiveTab("stations")}
        />
        <TagButton
          label={t("assets.land.title")}
          actived={activeTab === "land"}
          onClick={() => setActiveTab("land")}
        />
      </div>
      <div className="AssetsTabView">
        {activeTab === "stations" && <Stations />}
        {activeTab === "land" && <NoResult strPath="assets.land" disabledBtn />}
      </div>
    </MainWrapper>
  )
}

export default Assets
