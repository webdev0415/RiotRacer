import React from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { Affix } from "antd"
import logoOrange from "assets/images/logo-orange.png"

import connectMetaMask from "assets/images/Connect_Meta_Mask.png"

import RioButton from "../../Button"
import LanguageSelector from "../../LanguageSelector"

import MainMenu from "./MainMenu"
import UserMenu from "./UserMenu"
import UserBallance from "./UserBallance"

import "./styles.scss"

const DesktopHeader = ({ authState, handleAuth, OpenModal, handleLogout }) => {
  const { t } = useTranslation()
  const { isLoggedIn, isMetaMaskLoggedIn } = authState || {}

  return (
    <Affix offsetTop={0}>
      <div className="HeaderDesktop">
        <div className="HeaderLeft">
          <div className="HeaderLogo">
            <Link to="/">
              <img src={logoOrange} alt="Riot" />
            </Link>
          </div>
          <div className="PageMenu">
            <MainMenu />
          </div>
        </div>
        <div className="HeaderRight">
          <LanguageSelector showlabel={false} />

          {isLoggedIn && isMetaMaskLoggedIn && (
            <>
              {isMetaMaskLoggedIn && <UserBallance />}
              {!isMetaMaskLoggedIn && (
                <div onClick={handleAuth}>
                  <img
                    src={connectMetaMask}
                    alt="Connect MetaMask"
                    className="ConnectMetaMask"
                  />
                </div>
              )}
              <UserMenu handleLogout={handleLogout} />
            </>
          )}

          {!isLoggedIn && (
            <RioButton onClick={OpenModal} className="ml30">
              {t("start")}
            </RioButton>
          )}
        </div>
      </div>
    </Affix>
  )
}

export default DesktopHeader
