import { Flex, Heading, IconButton, Tooltip } from "@chakra-ui/react"

import { Link, useLocation } from "react-router-dom"

import { MdDashboard, MdExitToApp, MdMenu, MdMenuOpen } from "react-icons/md"

import { sidebarRoutes } from "@/router/sidebarRoutes"

type HeaderProps = {
  menuOpen: boolean
  responsiveMenuOpen: boolean
  toggleMenu: () => void
  toggleResponsiveMenu: () => void
}

export const Header: React.FC<HeaderProps> = ({
  menuOpen,
  responsiveMenuOpen,
  toggleMenu,
  toggleResponsiveMenu,
}) => {
  const { pathname } = useLocation()

  const pageName = sidebarRoutes.find((route) => route.path === pathname)?.name

  return (
    <Flex
      as="header"
      justify="space-between"
    >
      <Flex
        align="center"
        gap="5"
      >
        <Tooltip
          label={menuOpen ? "Fechar Menu" : "Abrir Menu"}
          bg="primary.500"
          placement="bottom"
          openDelay={500}
        >
          <IconButton
            borderRadius="full"
            display={{ base: "none", md: "flex" }}
            aria-label={menuOpen ? "Fechar Menu" : "Abrir Menu"}
            icon={menuOpen ? <MdMenuOpen size={24} /> : <MdMenu size={24} />}
            onClick={toggleMenu}
          />
        </Tooltip>

        <IconButton
          zIndex="tooltip"
          display={{ base: "flex", md: "none" }}
          borderRadius="full"
          aria-label={responsiveMenuOpen ? "Fechar Menu" : "Abrir Menu"}
          icon={
            responsiveMenuOpen ? <MdMenuOpen size={24} /> : <MdMenu size={24} />
          }
          onClick={toggleResponsiveMenu}
        />

        <Heading
          color="primary.800"
          size="lg"
        >
          {pageName}
        </Heading>
      </Flex>

      <Flex
        gap={{ base: "2.5", md: "5" }}
        align="center"
      >
        <Tooltip
          display={{ base: "none", md: "initial" }}
          label="Dashboard"
          bg="primary.500"
          placement="bottom"
          openDelay={500}
        >
          <Link to="/admin/">
            <IconButton
              color="primary.600"
              bg="none"
              _hover={{
                color: "primary.500",
              }}
              aria-label="Dashboard"
              icon={<MdDashboard size={26} />}
              _active={{
                bg: "none",
              }}
            />
          </Link>
        </Tooltip>

        <Tooltip
          display={{ base: "none", md: "initial" }}
          label="Sair"
          bg="red.500"
          placement="bottom"
          openDelay={500}
        >
          <IconButton
            color="primary.600"
            bg="none"
            _hover={{
              color: "red.500",
            }}
            aria-label="Sair"
            icon={<MdExitToApp size={28} />}
            _active={{
              bg: "none",
            }}
          />
        </Tooltip>
      </Flex>
    </Flex>
  )
}
