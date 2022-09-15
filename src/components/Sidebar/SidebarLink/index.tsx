import { Flex, Icon } from "@chakra-ui/react"

import { Link, useLocation } from "react-router-dom"

import { IconType } from "react-icons"

type SidebarLinkProps = {
  name: string
  path: string
  menuOpen?: boolean
  icon: IconType
  onClick: () => void
}

export const SidebarLink: React.FC<SidebarLinkProps> = ({
  name,
  path,
  menuOpen,
  icon,
  onClick,
}) => {
  const { pathname } = useLocation()

  const selected = pathname === path

  return (
    <Link
      to={path}
      onClick={onClick}
    >
      <Flex
        pos="relative"
        align="center"
        padding="10px"
        borderRadius="base"
        overflow="hidden"
        bg={selected ? "primary.100" : "none"}
        color={selected ? "primary.500" : "primary.600"}
        _after={{
          position: "absolute",
          left: "50px",
          content: `"${name}"`,
          opacity: menuOpen ? "1" : "0",
          w: "max",
          transition: "0.5s",
          letterSpacing: "wide",
          fontSize: "lg",
          fontWeight: "semibold",
          wordBreak: "keep-all",
        }}
        _hover={{
          bg: "primary.100",
        }}
      >
        <Icon
          w="26px"
          h="26px"
          as={icon}
        />
      </Flex>
    </Link>
  )
}
