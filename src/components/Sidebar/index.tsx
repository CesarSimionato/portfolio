import { Flex, Heading } from "@chakra-ui/react"

import { Link } from "react-router-dom"

import { SidebarLink } from "./SidebarLink"

import { sidebarRoutes } from "@/router/sidebarRoutes"

type SidebarProps = {
  menuOpen: boolean
  responsiveMenuOpen: boolean
  closeResponsiveMenu: () => void
}

export const Sidebar: React.FC<SidebarProps> = ({
  menuOpen,
  responsiveMenuOpen,
  closeResponsiveMenu,
}) => {
  return (
    <Flex
      left={responsiveMenuOpen ? "0" : "-100%"}
      w={{ base: "100%", md: menuOpen ? "260px" : "86px" }}
      h={{ base: "100%", md: "initial" }}
      pos={{ base: "fixed", md: "initial" }}
      zIndex={{ base: "tooltip", md: "initial" }}
      flexDir="column"
      bg="white"
      p="5"
      gap="5"
      transition="0.5s"
      overflow="hidden"
    >
      <Flex
        ml={{ base: "60px", md: "0" }}
        bg="primary.600"
        color="#fff"
        h="40px"
        borderRadius="base"
        align="center"
        justify="center"
      >
        <Link to="/admin/">
          <Heading
            cursor="pointer"
            size="md"
            textTransform="uppercase"
          >
            PA
          </Heading>
        </Link>

        <Link to="/admin/">
          <Heading
            cursor="pointer"
            ml="20px"
            size="md"
            textTransform="uppercase"
            transition="0.2s"
            display={
              responsiveMenuOpen ? "initial" : menuOpen ? "initial" : "none"
            }
          >
            Project
          </Heading>
        </Link>
      </Flex>

      <Flex
        direction="column"
        gap="3"
      >
        {sidebarRoutes.map((route) => (
          <SidebarLink
            key={route.name}
            menuOpen={responsiveMenuOpen ? true : menuOpen}
            name={route.name}
            path={route.path}
            icon={route.icon}
            onClick={closeResponsiveMenu}
          />
        ))}
      </Flex>
    </Flex>
  )
}
