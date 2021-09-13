import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import notify from "components/commons/notification"
import { MainWrapper } from "components/commons"
import { getUserSelector } from "store/auth/selectors"
import { updateUserAction } from "store/auth/actions"
import { sendOtpApi } from "api/auth0Request"

import UserPicture from "./UserPicture"
import UserField from "./UserField"
// import Notification from "./Notification"
import VerifyModal from "./VerifyModal"

import "./styles.scss"
import RioCard from "components/commons/Card/RioCard"

function AccountSetting() {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const user = useSelector(getUserSelector)
  const [changedEmail, setChangedEmail] = useState("")

  const onSuccessVerify = (email) => {
    dispatch(updateUserAction({ email }))
  }

  const confirmEmail = async (email) => {
    try {
      const response = await sendOtpApi(email)
      if (!response?.data?.email_verified) {
        notify({
          type: "info",
          title: t("codeSent"),
        })
        setChangedEmail(email)
      } else {
        notify({
          title: t("provideValidEmail"),
        })
      }
    } catch (error) {
      notify({
        title: t("apologize"),
      })
    }
  }

  const handleSubmit = (name, value) => {
    if (name === "email") {
      confirmEmail(value)
    } else {
      dispatch(updateUserAction({ username: value }))
    }
  }

  return (
    <MainWrapper title={t("settings.title")} className="RioAccountSetting">
      <RioCard className="RioAccountSettingCard">
        <UserPicture />
        <div className="UserInfoWrapper">
          <UserField
            value={user.username}
            label={t("username")}
            fieldName="username"
            onSubmit={handleSubmit}
          />
          <UserField
            value={user.email}
            label={t("email")}
            fieldName="email"
            onSubmit={handleSubmit}
          />
        </div>
        {/* <Notification /> */}
      </RioCard>

      <VerifyModal
        showModal={!!changedEmail}
        toggleModal={setChangedEmail}
        onSuccess={onSuccessVerify}
        email={changedEmail}
      />
    </MainWrapper>
  )
}

export default AccountSetting
