import React from "react"
import { useTranslation } from "react-i18next"
import DefaultLayout from "layout/DefaultLayout"
import { MainWrapper } from "components/commons"
import ComingSoon from "assets/images/comingsoon.jpg"

import "./style.scss"

function LetsRace() {
  const { t } = useTranslation()

  return (
    <DefaultLayout>
      <MainWrapper title={t("menu.letRace")}>
        <div className="dk-comingSoon">
          <img src={ComingSoon} alt="" />
        </div>
      </MainWrapper>
    </DefaultLayout>
  )
}

export default LetsRace
