import React, { useState } from "react"
import { useDispatch } from "react-redux"
import notify from "components/commons/notification"
import { useTranslation } from "react-i18next"
import RioModal from "components/commons/Modal"
import CodeForm from "components/commons/AuthModal/CodeForm"
import { verifyOtpReqAction } from "store/auth/actions"
import { sendOtpApi } from "api/auth0Request"

const VerifyModal = ({ toggleModal, email, showModal, onSuccess }) => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  const handleSucc = () => {
    onSuccess(email)
    setIsLoading(false)
    notify({
      type: "info",
      title: t("emailVerified"),
    })
    toggleModal("")
  }

  const onError = () => {
    setIsLoading(false)
    notify({
      title: t("wrongCode"),
    })
  }

  const verifyEmail = (code) => {
    dispatch(
      verifyOtpReqAction({ otp: code, email, onSuccess: handleSucc, onError })
    )
  }

  const resendCode = async () => {
    await sendOtpApi(email)
    notify({
      type: "info",
      title: t("codeSent"),
    })
  }

  return (
    <RioModal
      visible={showModal}
      onCancel={() => toggleModal("")}
      className="CodeVerifyModal"
    >
      <CodeForm
        email={email}
        onResend={resendCode}
        onSubmit={verifyEmail}
        isLoading={isLoading}
      />
    </RioModal>
  )
}

export default VerifyModal
