import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"

import { getGargageSuccAction } from "store/gargage/actions"
import { updateCarNameApi, checkCarNameApi } from "api/cars"

import CustomModal from "../commons/Modal"
import Input from "../commons/Input"
import notify from "../commons/notification"

import "./styles.scss"

const ChangeCar = ({ onClose, name, carId }) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [carName, updateName] = useState("")
  const [errMsg, setErrMsg] = useState("")
  const [isSent, setIsSent] = useState(false)

  const onConfirm = async () => {
    if (name !== carName && !isSent) {
      setIsSent(true)
      try {
        await checkCarNameApi(carName)
      } catch (error) {
        setIsSent(false)
        setErrMsg(t("carNameExist"))
        return
      }
      try {
        const { data } = await updateCarNameApi(carId, carName)
        dispatch(getGargageSuccAction(data))
        setIsSent(false)
        if (onClose) {
          onClose()
        }
      } catch (err) {
        setIsSent(false)
        notify({
          title: t("failedChangeCar"),
          desc: err?.response?.data?.error,
        })
      }
    }
  }

  useEffect(() => {
    updateName(name)
  }, [name])

  return (
    <CustomModal
      visible
      footer
      title={t("updateCarName")}
      onCancel={onClose}
      onConfirm={onConfirm}
      className="CarNameChangeModal"
    >
      <Input
        type="text"
        label={t("carName")}
        name="carName"
        value={carName || ""}
        error={errMsg}
        onChange={(e) => updateName(e.target.value)}
        onFocus={() => setErrMsg("")}
      />
    </CustomModal>
  )
}

export default ChangeCar
