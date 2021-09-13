import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import useMetaMaskAuth from "hooks/useMetaMaskAuth"
import { authStateSelector } from "store/auth/selectors"
import { getBalanceReqAction } from "store/coin/actions"
import { getBalanceSelector } from "store/coin/selectors"
import { formatNum } from "helper/number"

import RioCard from "components/commons/Card/RioCard"
// import RioTextButton from "components/commons/Button/TextButton"

import "./wallet.scss"

const WalletCard = ({ onClick }) => {
  const dispatch = useDispatch()
  const balances = useSelector(getBalanceSelector)
  const { isMetaMaskLoggedIn } = useSelector(authStateSelector)
  const { getBalance } = useMetaMaskAuth()
  const { t } = useTranslation()

  useEffect(() => {
    if (!balances) {
      if (isMetaMaskLoggedIn) getBalance()
      else {
        dispatch(getBalanceReqAction())
      }
    }
  }, [isMetaMaskLoggedIn])

  const showAcionBar = !!onClick

  return (
    <RioCard className="BalanceWidgetCard">
      <div className="BalanceRow">
        <div className="BalanceRowTitle">{t("ethereumMainnet")}</div>
        <div className="BalanceRowInner">
          <div className="BalanceCol">
            <span className="subtitle1 value">
              {formatNum(balances?.mainnet?.eth)}
            </span>
            <span className="subtitle2 label">{t("eth")}</span>
          </div>
          <div className="BalanceCol">
            <span className="subtitle1 value">
              {formatNum(balances?.mainnet?.riot)}
            </span>
            <span className="subtitle2 label">{t("riot")}</span>
          </div>
        </div>
      </div>
      <div className="BalanceRow">
        <div className="BalanceRowTitle">{t("maticPolygon")}</div>
        <div className="BalanceRowInner">
          <div className="BalanceCol">
            <span className="subtitle1 value">
              {formatNum(balances?.matic?.weth)}
            </span>
            <span className="subtitle2 label">{t("eth")}</span>
          </div>
          <div className="BalanceCol">
            <span className="subtitle1 value">
              {formatNum(balances?.matic?.riot)}
            </span>
            <span className="subtitle2 label">{t("riot")}</span>
          </div>
        </div>
      </div>
      {showAcionBar && (
        <div className="RioCarActions">
          {/* <RioTextButton text={t("checkWallet")} onClick={onClick} /> */}
        </div>
      )}
    </RioCard>
  )
}

export default WalletCard
