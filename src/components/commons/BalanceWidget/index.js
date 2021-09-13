import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { Tooltip } from "antd"
import useMetaMaskAuth from "hooks/useMetaMaskAuth"
import { authStateSelector } from "store/auth/selectors"
import { getBalanceReqAction } from "store/coin/actions"
import { getBalanceSelector } from "store/coin/selectors"
import { formatNum } from "helper/number"
import IconWallet from "../Icons/IconWallet"

import "./styles.scss"

function BallanceWidget({ type = "normalWidgget", ...rest }) {
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

  switch (type) {
    case "navItem": {
      return (
        <div className="balance-widget">
          <div className="right">
            <div>
              <span>{t("eth")}:</span>
              {formatNum(balances?.mainnet?.eth)}
            </div>
            <div>
              <span>{t("riot")}:</span>
              {formatNum(balances?.mainnet?.riot)}
            </div>
          </div>
          <IconWallet
            className="icon"
            onClick={() => {
              getBalance()
            }}
          />
        </div>
      )
    }
    case "normalWidgget": {
      return (
        <>
          <div className="rio-heading">{t("wallet")}</div>
          <div className="rio-detailCols mb-20">
            <table>
              <thead>
                <tr>
                  <th>{t("ethereum")}</th>
                  <th>{t("matic")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span>{t("eth")} :</span>
                    {formatNum(balances?.mainnet?.eth)}
                  </td>
                  <td>
                    {t("weth")} : {formatNum(balances?.mainnet?.weth)}
                  </td>
                </tr>
                <tr>
                  <td>
                    {t("riot")} : {formatNum(balances?.mainnet?.riot)}
                  </td>
                  <td>
                    {t("riot")} : {formatNum(balances?.mainnet?.riot)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )
    }
    case "widgetBox": {
      return (
        <div className="wallet">
          <div className="wallet_title">{t("ethereumChain")}</div>
          <div className="wallet_retangle">
            <div className="item_bar">
              <div>
                <span>{t("eth")}:</span>
                {formatNum(balances?.mainnet?.eth)}
              </div>
              <a className="button button_bar" href={rest.link} target="blank">
                {t("swapMatic")}
              </a>
            </div>
            <div className="item_bar">
              <div>
                <span>{t("riot")}:</span>
                {formatNum(balances?.mainnet?.riot)}
              </div>
              <Tooltip title="Coming Soon">
                <div className="button button_bar disabled">{t("buyRiot")}</div>
              </Tooltip>
            </div>
          </div>
        </div>
      )
    }
    default:
      return (
        <div className="wallet">
          <div className="wallet_title">{rest?.title}</div>
          <div className="wallet_retangle">
            <div className="item_bar">
              <div>
                <span>{t("weth")}:</span>
                {formatNum(balances?.mainnet?.weth)}
              </div>
              <a className="button button_bar" href={rest.link} target="blank">
                {type === "swapMaticWidget" ? t("swapMatic") : t("sawpETH")}
              </a>
            </div>
            <div className="item_bar">
              <div>
                <span>{t("riot")}:</span>
                {formatNum(balances?.mainnet?.riot)}
              </div>
              <Tooltip title="Coming Soon">
                <div className="button button_bar disabled">
                  {type === "swapMaticWidget" ? t("buyRiot") : t("addRiot")}
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      )
  }
}

export default BallanceWidget
