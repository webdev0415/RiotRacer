import React from "react"
import { useTranslation } from "react-i18next"
import DefaultLayout from "layout/DefaultLayout"
import { MainWrapper } from "components/commons"
import ComingSoon from "components/ComingSoon"

import "./style.scss"

function TheShop() {
  const { t } = useTranslation()

  return (
    <DefaultLayout>
      <MainWrapper title={t("menu.marketplace")}>
        <ComingSoon />
      </MainWrapper>
    </DefaultLayout>
  )
}

export default TheShop
