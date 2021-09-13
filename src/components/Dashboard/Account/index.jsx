import React, { useEffect } from "react"
import { Tooltip } from "antd"
import { useSelector, useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { useHistory } from "react-router-dom"

import useMetaMaskAuth from "hooks/useMetaMaskAuth"
import { getBalanceReqAction } from "store/coin/actions"
import { authStateSelector } from "store/auth/selectors"
import { getBalanceSelector } from "store/coin/selectors"

import { MainWrapper, BalanceWidget } from "components/commons"
import "./styles.scss"

function Account() {
  const { t } = useTranslation()
  const history = useHistory()
  const dispatch = useDispatch()
  const balances = useSelector(getBalanceSelector)
  const { isMetaMaskLoggedIn } = useSelector(authStateSelector)
  const { getBalance } = useMetaMaskAuth()

  const onPressClaim = () => {
    history.push("/dashboard/claim-tokens")
  }

  useEffect(() => {
    if (!balances) {
      if (isMetaMaskLoggedIn) {
        getBalance()
      } else {
        dispatch(getBalanceReqAction())
      }
    }
  }, [isMetaMaskLoggedIn])

  return (
    <MainWrapper title={t("wallets")} className="account_banner">
      <div className="flex_row wallet_banner">
        <BalanceWidget
          title={t("ethereumChain")}
          type="swapEthWidget"
          link="https://wallet.matic.network/bridge/"
        />
        <BalanceWidget
          type="swapMaticWidget"
          link="https://wallet.matic.network/bridge/"
          title={t("maticChain")}
        />
      </div>
      <div className="rio-wallerFlexBtn">
        <button
          onClick={() => onPressClaim()}
          type="button"
          className="claimButton button"
        >
          {t("claim-tokens")}
        </button>
        <Tooltip title="Coming Soon">
          <div className="claimButton button disabled">{t("withdraw")}</div>
        </Tooltip>
      </div>
    </MainWrapper>
  )
}

export default Account
