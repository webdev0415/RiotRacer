import React, { useState } from "react"
import { Layout, Menu } from "antd"
import RaceWinners from "./components/RaceWinners"
import "./styles.scss"

const { Header, Sider, Content } = Layout

const ApiExplorer = () => {
  const [api, setApi] = useState("winners")

  const handleSelectApi = ({ key }) => {
    setApi(key)
  }

  return (
    <Layout className="api-playground">
      <Sider>
        <Menu
          mode="inline"
          defaultSelectedKeys={["winners"]}
          onSelect={handleSelectApi}
        >
          <Menu.Item key="winners">Race winner</Menu.Item>
          <Menu.Item key="other">Other</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header>
          <div className="playground-header">
            <h2>API Playground</h2>
          </div>
        </Header>
        <Content>{api === "winners" && <RaceWinners />}</Content>
      </Layout>
    </Layout>
  )
}

export default ApiExplorer
