import React, { useMemo } from "react"
import { useTranslation } from "react-i18next"
import { isArray } from "lodash"
import { Menu, Dropdown } from "antd"
import { Link, useLocation } from "react-router-dom"
import { getMainMenu } from "constants/routes"
import IconTrigDown from "../../Icons/IconTrigDown"

const { Item: MenuItem } = Menu

const MainMenu = () => {
  const { pathname } = useLocation()
  const { i18n } = useTranslation()
  const pageMenuItems = useMemo(() => getMainMenu(), [i18n.language])

  return (
    <ul className="RioMainMenu">
      {pageMenuItems.map((item, itemIndex) => {
        if (isArray(item.menus) && item.menus.length > 0) {
          const menuOverlay = (
            <Menu>
              {item.menus.map((subItem, subItemIndex) => (
                <MenuItem
                  key={`submenu:${subItemIndex}`}
                  className={pathname === subItem.link ? "active" : ""}
                >
                  <Link to={subItem.link}>{subItem.title}</Link>
                </MenuItem>
              ))}
            </Menu>
          )

          return (
            <li
              key={itemIndex}
              className={
                pathname.includes("/world")
                  ? "RioMainMenuItem active"
                  : "RioMainMenuItem"
              }
            >
              <Dropdown
                trigger="click"
                overlay={menuOverlay}
                getPopupContainer={(triggerNode) => triggerNode.parentElement}
              >
                <div className="SubMenuTriger">
                  <span key={itemIndex}>{item.title}</span>
                  <IconTrigDown />
                </div>
              </Dropdown>
            </li>
          )
        }
        return (
          <li
            key={itemIndex}
            className={
              pathname === item.link
                ? "RioMainMenuItem active"
                : "RioMainMenuItem"
            }
          >
            <Link to={item.link}>{item.title}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default MainMenu
