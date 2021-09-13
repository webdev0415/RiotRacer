import React from "react"
import { useTranslation } from "react-i18next"
import { MainWrapper } from "components/commons"
import ComingSoon from "assets/images/comingsoon.jpg"

const Billboards = () => {
  const { t } = useTranslation()

  return (
    <MainWrapper title={t("menu.billboards")}>
      <div className="dk-comingSoon">
        <img src={ComingSoon} alt="" />
      </div>
    </MainWrapper>
  )
}

export default Billboards
