import React from "react"
import CirProgress from "../Icons/IconCirProgress"

import "./spinner.scss"

const Spinner = () => (
  <div className="ant-loader">
    <div className="ant-spin ant-spin-lg ant-spin-spinning">
      <CirProgress className="anticon-spin" />
    </div>
  </div>
)

export default Spinner
