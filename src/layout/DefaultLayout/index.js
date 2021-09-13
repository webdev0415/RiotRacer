import React from "react"
import { Header, Footer } from "components/commons"
import AuthModal from "components/commons/AuthModal"

import "./styles.scss"

const DefaultLayout = ({ children, className }) => (
  <div className={`RioPage ${className || ""}`}>
    <Header />
    <div className="PageContent">{children}</div>
    <Footer />
    <AuthModal />
  </div>
)

export default DefaultLayout
