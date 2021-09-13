import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import RioInput from "components/commons/Input"
import TextButton from "components/commons/Button/TextButton"
import IconButton from "components/commons/Button/IconButton"
import IconClose from "components/commons/Icons/IconClose"
import { checkUsernameApi, checkEmailApi } from "api/users"
import { validateEmail, validateUsername } from "helper/validation"

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

const UserField = ({ value, label, fieldName, onSubmit }) => {
  const { t } = useTranslation()
  const [data, setData] = useState("")
  const [errMsg, setErrorMsg] = useState(null)
  const [isEdit, setIsEdit] = useState(false)

  const handleChangeInput = (e) => {
    setData(e.target.value)
  }

  const handleClick = async () => {
    if (isEdit) {
      const invalid = validate(data, fieldName)
      if (invalid) {
        setErrorMsg(invalid)
      } else if (data !== value) {
        let checkApi = checkUsernameApi
        if (fieldName === "email") {
          checkApi = checkEmailApi
        }
        try {
          await checkApi(data)
          onSubmit(fieldName, data)
        } catch (error) {
          if (fieldName === "email") {
            setErrorMsg(t("emailExit"))
          } else {
            setErrorMsg(t("usernameExist"))
          }
        }
      }
    } else {
      setIsEdit(true)
    }
  }

  const handleCancel = () => {
    setData(value)
    setIsEdit(false)
  }

  const handleFocus = () => {
    setErrorMsg(null)
  }

  useEffect(() => {
    setData(value)
    setIsEdit(false)
  }, [value])

  return (
    <div className="UserField">
      {!isEdit && (
        <div className="InfoWrapper">
          <div className="FieldLabel">{label}</div>
          <div className="FieldValue">{data}</div>
        </div>
      )}
      {isEdit && (
        <RioInput
          value={data}
          label={label}
          error={errMsg}
          onFocus={handleFocus}
          onChange={handleChangeInput}
        />
      )}
      <div className="ActionWrapper">
        {isEdit && <IconButton icon={<IconClose />} onClick={handleCancel} />}
        <TextButton
          hideIcon
          text={isEdit ? t("update") : t("edit")}
          onClick={handleClick}
        />
      </div>
    </div>
  )
}

export default UserField
