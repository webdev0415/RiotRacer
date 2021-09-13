import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import useMetaMaskAuth from "hooks/useMetaMaskAuth"
import { authStateSelector } from "store/auth/selectors"
import { getBalanceReqAction } from "store/coin/actions"
import { getBalanceSelector } from "store/coin/selectors"
import { formatNum } from "helper/number"

import RioCard from "./RioCard"
import RioTextButton from "../Button/TextButton"

import "./styles.scss"

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
    <RioCard>
      <div className="BalanceRow">
        <div className="BalanceCol">
          <span className="subtitle1 value">
            {formatNum(balances?.mainnet)}
          </span>
          <span className="subtitle2 label">{t("eth")}</span>
        </div>
        <div className="BalanceCol">
          <span className="subtitle1 value">
            {formatNum(balances?.mainnet)}
          </span>
          <span className="subtitle2 label">{t("weth")}</span>
        </div>
        <div className="BalanceCol">
          <span className="subtitle1 value">{formatNum(balances?.matic)}</span>
          <span className="subtitle2 label">{t("riot")}</span>
        </div>
      </div>
      {showAcionBar && (
        <div className="RioCarActions">
          <RioTextButton text={t("checkWallet")} onClick={onClick} />
        </div>
      )}
    </RioCard>
  )
}

export default WalletCard
