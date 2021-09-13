import React from "react"
import i18n from "i18n"

import IconOverview from "components/commons/Icons/IconOverview"
import IconGarage from "components/commons/Icons/IconGarage"
import IconAssets from "components/commons/Icons/IconAssets"
import IconActivity from "components/commons/Icons/IconActivity"
import IconSetting from "components/commons/Icons/IconSetting"
import IconRio from "components/commons/Icons/IconRio"
import IconShop from "components/commons/Icons/IconShop"
import IconRace from "components/commons/Icons/IconRace"

export const getUserMenu = () => [
  {
    title: i18n.t("overview"),
    route: "/dashboard/overview",
    icon: <IconOverview />,
  },
  // { title: i18n.t("wallet"), route: "/dashboard/wallet", icon: <IconOverview />, },
  {
    title: i18n.t("garage.pageTitle"),
    route: "/dashboard/garage",
    icon: <IconGarage />,
  },
  {
    title: i18n.t("assets.pageTitle"),
    route: "/dashboard/assets",
    icon: <IconAssets />,
  },
  {
    title: i18n.t("activity.pageTitle"),
    route: "/dashboard/activity",
    icon: <IconActivity />,
  },
  // {
  //   title: i18n.t("claim-tokens"),
  //   route: "/dashboard/claim-tokens",
  //   icon: <IconActivity />,
  // },
  {
    title: i18n.t("settings.title"),
    route: "/dashboard/setting",
    icon: <IconSetting />,
  },
]

export const getMainMenu = () => [
  { title: i18n.t("menu.marketplace"), link: "/shop", icon: <IconShop /> },
  {
    title: i18n.t("menu.myAccount"),
    link: "/dashboard/overview",
    icon: <IconOverview />,
  },
  {
    title: i18n.t("menu.theWorld"),
    icon: <IconRio />,
    menus: [
      { title: i18n.t("menu.fuelMe"), link: "/world" },
      {
        title: i18n.t("menu.visitMechanic"),
        link: "/world/mechanic",
      },
      { title: i18n.t("menu.theTracks"), link: "/world/tracks" },
      {
        title: i18n.t("menu.billboards"),
        link: "/world/billboards",
      },
    ],
  },
  { title: i18n.t("menu.letRace"), link: "/letsrace", icon: <IconRace /> },
]
