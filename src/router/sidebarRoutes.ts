import { IconType } from "react-icons"

import {
  MdDashboard,
  MdStore,
  MdCommute,
  MdDirectionsCar,
} from "react-icons/md"

type RouteProps = {
  name: string
  path: string
  icon: IconType
}

export const sidebarRoutes: RouteProps[] = [
  {
    name: "Início",
    path: "/",
    icon: MdDashboard,
  },
  {
    name: "Sobre",
    path: "/about",
    icon: MdStore,
  },
  {
    name: " Portfólio",
    path: "/portfolio",
    icon: MdCommute,
  },
  {
    name: "Contato",
    path: "/contact",
    icon: MdDirectionsCar,
  },
]
