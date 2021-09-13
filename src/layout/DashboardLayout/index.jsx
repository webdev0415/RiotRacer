import React from "react"
import { Header, Sidebar } from "components/commons"
import useWindowDimensions from "hooks/useWindowDimensions"
import RioScrollBar from "components/RioScrollBar"
import { IPAD_PORTRAIT } from "constants/breakPoints"

import "./styles.scss"

const emptyDiv = "div"

const DashboardLayout = ({ children }) => {
  const { width } = useWindowDimensions()
  const isSmallDevice = width <= IPAD_PORTRAIT
  const ContentWrapper = isSmallDevice ? emptyDiv : RioScrollBar

  const contentProps = isSmallDevice ? {} : { dragScroll: true }

  return (
    <div className="RioDashboardContainer">
      <Header />
      <div className="DashboardInner">
        {!isSmallDevice && <Sidebar />}
        <ContentWrapper className="DashboardContent" {...contentProps}>
          {children}
        </ContentWrapper>
      </div>
    </div>
  )
}

export default DashboardLayout
