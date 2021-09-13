import React, { useMemo } from "react"
import { useTranslation } from "react-i18next"
import RioCard from "./RioCard"
import MediaPlayer from "../Media"

import "./StationCard.scss"
import RioButton from "../Button"

const StationCard = ({ name, uri, tokens, onSelect, assetId }) => {
  const { t } = useTranslation()
  const title = useMemo(() => {
    let base = `${t("gasStation")} #${assetId} `
    if (name) {
      base = `${base} - ${name}`
    }
    return base
  }, [name, assetId])

  return (
    <RioCard className="RioStationCard">
      <div className="RioStationCardHead">
        <div className="heading2">{title}</div>
      </div>
      <div className="RioStationCardBody">
        <MediaPlayer url={uri} preview={false} />
      </div>
      <div className="RioStationCardFooter">
        <div className="AccruedTokens">
          <span className="subtitle2">{t("accruedTokens")}</span>
          <span className="subtitle2 tokens">
            {tokens} {t("riot")}
          </span>
        </div>
        <RioButton size="small" onClick={onSelect}>
          {t("claim")}
        </RioButton>
      </div>
    </RioCard>
  )
}

export default StationCard
