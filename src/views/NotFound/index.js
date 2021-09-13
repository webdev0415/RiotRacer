import React from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import DefaultLayout from "layout/DefaultLayout"
import RioButton from "components/commons/Button"

import "./styles.scss"

const NotFoundPage = () => {
  const { t } = useTranslation()

  return (
    <DefaultLayout className="NotFoundPage">
      <h3 className="heading1">{t("notFound.title")}</h3>
      <Link to="/">
        <RioButton>{t("notFound.backBtn")}</RioButton>
      </Link>
    </DefaultLayout>
  )
}

export default NotFoundPage
