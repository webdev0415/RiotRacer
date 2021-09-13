import React from "react"
import { useTranslation } from "react-i18next"
import { MainWrapper } from "components/commons"
import comingSoon from "assets/images/comingsoon.jpg"

import "./styles.scss"

function Withdrawal() {
  const { t } = useTranslation()
  return (
    <MainWrapper title={t("withdraw")} className="withdrawal_banner">
      <div className="dk-comingSoon">
        <img src={comingSoon} alt="" />
      </div>
    </MainWrapper>
  )
}

export default Withdrawal
