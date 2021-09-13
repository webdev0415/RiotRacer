import React from "react"
import { useTranslation } from "react-i18next"
import { MainWrapper } from "components/commons"
import comingSoon from "assets/images/comingsoon.jpg"

import "./styles.scss"

function ClaimTokens() {
  const { t } = useTranslation()
  return (
    <MainWrapper title={t("claim-tokens")} className="claim_tokens_banner">
      <div className="rio-walletBox">
        <div className="wallet_box">
          <div className="wallet_balance">
            <img
              alt=""
              src={comingSoon}
              style={{ height: 350, width: "100%", objectFit: "cover" }}
            />
          </div>
          <button className="claim_slp" type="button">
            {t("claim")}
          </button>
        </div>
      </div>
    </MainWrapper>
  )
}

export default ClaimTokens
