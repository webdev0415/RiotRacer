import React, { useMemo, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import notify from "components/commons/notification"

import { sendOtpReqAction } from "store/auth/actions"
import { authStateSelector } from "store/auth/selectors"
import useMetaMaskAuth from "hooks/useMetaMaskAuth"
import { checkUsernameApi, checkEmailApi } from "api/users"
import { validateEmail, validateUsername } from "helper/validation"

import Button from "../../Button"
import Input from "../../Input"
import Spinner from "../../Spinner"

import metamask from "assets/images/metamask.png"

import "./styles.scss"

const validate = (value, name) => {
  let msg = null
  if (name === "username") {
    msg = validateUsername(value)
  }
  if (name === "email") {
    msg = validateEmail(value)
  }
  return msg
}

function StepTwo({ setStep }) {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const [email, setEmail] = useState("")
  const [emailErr, setEmailErr] = useState("")
  const [username, setUsername] = useState("")
  const [usernameErr, setUsernameErr] = useState("")
  const [isSent, setIsSent] = useState(false)
  const { isMetaMaskLoggedIn, isLoggedIn } = useSelector(authStateSelector)
  const { handleAuth, publicAddress } = useMetaMaskAuth(onMetaMaskNotInstalled)

  function onMetaMaskNotInstalled() {
    setStep(3)
  }

  const onSuccess = () => {
    setIsSent(false)
    notify({ type: "info", title: t("codeSent") })
    setStep(4)
  }

  const onError = (message) => {
    setIsSent(false)
    notify({ title: message })
  }

  const handleSubmit = async () => {
    setIsSent(true)
    const usernameInvalid = validate(username, "username")
    if (usernameInvalid) {
      setUsernameErr(usernameInvalid)
      setIsSent(false)
      return
    }

    let isExist = false
    try {
      await checkUsernameApi(username)
    } catch (error) {
      isExist = true
      setUsernameErr(t("usernameExist"))
    }
    if (isExist) {
      setIsSent(false)
      return
    }

    try {
      await checkEmailApi(email)
    } catch (error) {
      isExist = true
      setEmailErr(t("emailExit"))
    }
    if (isExist) {
      setIsSent(false)
      return
    }
    dispatch(
      sendOtpReqAction({ email, username, publicAddress, onSuccess, onError })
    )
  }

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit()
    }
  }

  const disableBtn = useMemo(
    () => !!validateEmail(email) || !username,
    [email, username]
  )

  return (
    <div className="stepTwoBanner">
      {!isMetaMaskLoggedIn && (
        <>
          <div className="heading2 stepTwoTitle">{t("toContinue")}</div>
          <div className="innerWrapper">
            <div className="metamaskImg">
              <img
                src={metamask}
                alt="Connect Meta Mask"
                className="connectMateMaster"
              />
            </div>

            <Button
              onClick={handleAuth}
              onKeyDown={handleAuth}
              className="loginWithMetaMask"
            >
              {t("loginWithMetaMask")}
            </Button>

            <div className="body1 metamaskDesc">
              {t("loginWithMetaMaskDesc")}
            </div>
          </div>
        </>
      )}

      {isMetaMaskLoggedIn && !isLoggedIn && (
        <>
          <div className="heading2 enterEmail">{t("enterEmail")}</div>
          <div className="innerWrapper">
            <Input
              value={username}
              label={t("username")}
              onChange={(e) => {
                setUsername(e.target.value)
              }}
              onFocus={() => {
                setUsernameErr("")
              }}
              error={usernameErr}
              disabled={isSent}
            />
            <Input
              value={email}
              label={t("email")}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              error={emailErr}
              onFocus={() => {
                setEmailErr("")
              }}
              disabled={isSent}
              onKeyDown={onKeyDown}
            />
            <div className="continue">
              {isSent && <Spinner />}
              {!isSent && (
                <Button onClick={handleSubmit} disabled={disableBtn}>
                  {t("continue")}
                </Button>
              )}
            </div>
            <div />
          </div>
        </>
      )}
    </div>
  )
}

export default StepTwo
