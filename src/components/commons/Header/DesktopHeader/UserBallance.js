import React, { useEffect } from "react"
import { Popover } from "antd"
import { useSelector, useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import useMetaMaskAuth from "hooks/useMetaMaskAuth"
import { authStateSelector } from "store/auth/selectors"
import { getBalanceReqAction } from "store/coin/actions"
import { getGasBalanceReqAction } from "store/property/actions"
import { getBalanceSelector } from "store/coin/selectors"
import { getGasBalanceSelector } from "store/property/selectors"
import { formatNum } from "helper/number"
import IconWallet from "../../Icons/IconWallet"
import IconFuel from "../../Icons/IconFuel"

const WalletValue = ({ value = "" }) => {
  const withPopover = value.toString().length > 8
  if (!withPopover) {
    return value
  }

  return (
    <Popover
      trigger="click"
      content={<span>{value}</span>}
      getPopupContainer={(triger) => triger.parentNode}
    >
      <span>{value}</span>
    </Popover>
  )
}

const UserBallance = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { getBalance } = useMetaMaskAuth()
  const balances = useSelector(getBalanceSelector)
  const { isMetaMaskLoggedIn, user } = useSelector(authStateSelector)
  const gasBalance = useSelector(getGasBalanceSelector)

  useEffect(() => {
    if (user) {
      dispatch(getGasBalanceReqAction(user?.id))
    }

    if (isMetaMaskLoggedIn) {
      getBalance()
    } else {
      dispatch(getBalanceReqAction())
    }
  }, [isMetaMaskLoggedIn])

  return (
    <div className="UserBallaceContainer">
      <div className="UserBallance">
        <div>
          <div>
            <span className="label">{t("gas")}:</span>
          </div>
          <div className="gas">
            <span className="value">
              <WalletValue value={gasBalance || 0} />
            </span>
            <span>{t("gallons")}</span>
          </div>
        </div>
        <div>
          <IconFuel />
        </div>
      </div>

      <div className="UserBallance">
        <div>
          <div>
            <span>{t("eth")}:</span>
            <span className="value">
              <WalletValue value={formatNum(balances?.mainnet?.eth)} />
            </span>
          </div>
          <div>
            <span>{t("riot")}:</span>
            <span className="value">
              <WalletValue value={formatNum(balances?.mainnet?.riot)} />
            </span>
          </div>
        </div>
        <div>
          <IconWallet />
        </div>
      </div>
    </div>
  )
}

export default UserBallance
