import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import { store } from "store"
import HttpsRedirect from "components/HttpsRedirect"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import "antd/dist/antd.css"
import "./i18n"
import "./styles.scss"

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <HttpsRedirect>
        <App />
      </HttpsRedirect>
    </Router>
  </Provider>,
  document.getElementById("root")
)

reportWebVitals()
