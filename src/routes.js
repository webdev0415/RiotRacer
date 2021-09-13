import { lazy } from "react"

const Home = lazy(() => import("views/Home"))
const Theshop = lazy(() => import("views/Theshop"))
const Theworld = lazy(() => import("views/Theworld"))
const LetsRace = lazy(() => import("views/LetsRace"))
const Dashboard = lazy(() => import("views/Dashboard"))
const ApiExplorer = lazy(() => import("views/ApiExplorer"))
const CarDetail = lazy(() => import("views/CarDetail"))
const PrivacyPolicy = lazy(() => import("views/PrivacyPolicy"))
const TermsOfServie = lazy(() => import("views/TermsOfServie"))
const NotFound = lazy(() => import("views/NotFound"))

const appRoutes = [
  {
    path: "/",
    component: Home,
    isPrivate: false,
    exact: true,
  },
  {
    path: "/shop",
    component: Theshop,
    isPrivate: false,
    exact: true,
  },
  {
    path: "/world",
    component: Theworld,
    isPrivate: false,
    exact: false,
  },
  {
    path: "/letsrace",
    component: LetsRace,
    isPrivate: false,
    exact: true,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    isPrivate: true,
    exact: false,
  },
  {
    path: "/cars/:id",
    component: CarDetail,
    isPrivate: false,
    exact: false,
  },
  {
    path: "/privacy-policy",
    component: PrivacyPolicy,
    isPrivate: false,
    exact: false,
  },
  {
    path: "/terms-of-service",
    component: TermsOfServie,
    isPrivate: false,
    exact: false,
  },
  {
    path: "*",
    component: NotFound,
    isPrivate: false,
    exact: false,
  },
  {
    path: "/api-playground",
    component: ApiExplorer,
    isPrivate: true,
    exact: true,
  },
]

export default appRoutes
