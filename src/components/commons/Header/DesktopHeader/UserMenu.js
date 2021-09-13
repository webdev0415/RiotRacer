import React, { useMemo } from "react"
import { useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"
import { Menu, Dropdown } from "antd"
import { useTranslation } from "react-i18next"
import { getUserMenu } from "constants/routes"
import { getProfilePictureSelector } from "store/auth/selectors"

const UserMenu = ({ handleLogout }) => {
  const { t, i18n } = useTranslation()
  const { pathname } = useLocation()
  const items = useMemo(() => getUserMenu(), [i18n.language])
  const userPic = useSelector(getProfilePictureSelector)

  const menuOverlay = (
    <Menu>
      {items.map((item, itemIndex) => (
        <Menu.Item
          key={itemIndex}
          className={pathname === item.route ? "active" : ""}
        >
          <Link to={item.route}>{item.title}</Link>
        </Menu.Item>
      ))}
      <Menu.Item key="logoutButton" onClick={handleLogout}>
        {t("logout")}
      </Menu.Item>
    </Menu>
  )

  return (
    <Dropdown
      overlay={menuOverlay}
      trigger="click"
      getPopupContainer={(triggerNode) => triggerNode.parentElement}
    >
      <div className="UserImage ml30">
        <img src={userPic} alt="" />
      </div>
    </Dropdown>
  )
}

export default UserMenu
