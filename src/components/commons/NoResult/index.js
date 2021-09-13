import React from "react"
import { useTranslation } from "react-i18next"
import { Tooltip } from "antd"
import RioButton from "../Button"

import "./styles.scss"

const NoResult = ({ strPath, onClick, disabledBtn }) => {
  const { t } = useTranslation()

  return (
    <div className="NoResultWrapper">
      <div className="heading1">{t(`${strPath}.noResult`)}</div>
      <div className="heading4">{t(`${strPath}.noResultHelper`)}</div>
      {disabledBtn && (
        <Tooltip title={t("comingSoon")}>
          <span className="DisabledTooltipWrapper">
            <RioButton className="ShopNow" disabled>
              {t("shopNow")}
            </RioButton>
          </span>
        </Tooltip>
      )}
      {!disabledBtn && (
        <RioButton className="ShopNow" onClick={onClick}>
          {t("shopNow")}
        </RioButton>
      )}
    </div>
  )
}

export default NoResult
