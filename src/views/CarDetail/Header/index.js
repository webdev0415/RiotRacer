import React from "react"
import { useTranslation } from "react-i18next"
import IconEdit from "components/commons/Icons/IconEdit"
import "./styles.scss"

const PageHeader = ({ carId, name, permission, changeName }) => {
  const { t } = useTranslation()
  return (
    <div className="pageHeader">
      <span className="headingExtra">{`#${carId} ${name}`}</span>
      {permission && (
        <div className="headerAction" onClick={changeName}>
          <IconEdit />
          <span>{t("car.editCarName")}</span>
        </div>
      )}
    </div>
  )
}

export default PageHeader
