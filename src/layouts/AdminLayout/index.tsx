import { useEffect, useState } from "react"

import { Box, Grid } from "@chakra-ui/react"

import { Outlet } from "react-router-dom"

import Cookies from "js-cookie"

import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"

export const AdminLayout: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(true)
  const [responsiveMenuOpen, setResponsiveMenuOpen] = useState(false)

  const toggleMenu = () => {
    Cookies.set(
      "PROJECT_ADMIN_001_MENU_OPEN",
      String(!menuOpen ? "open" : "close"),
    )
    setMenuOpen(!menuOpen)
  }

  const closeResponsiveMenu = () => {
    setResponsiveMenuOpen(false)
  }

  const toggleResponsiveMenu = () => {
    setResponsiveMenuOpen(!responsiveMenuOpen)
  }

  useEffect(() => {
    const menuStatus = Cookies.get("PROJECT_ADMIN_001_MENU_OPEN")

    if (menuStatus !== undefined) {
      if (menuStatus === "open") {
        setMenuOpen(true)
      } else {
        setMenuOpen(false)
      }
    }
  }, [])

  return (
    <Grid
      minHeight="100vh"
      templateColumns={{ base: "1fr", md: "auto 1fr" }}
      bg="primary.100"
    >
      <Sidebar
        menuOpen={menuOpen}
        responsiveMenuOpen={responsiveMenuOpen}
        closeResponsiveMenu={closeResponsiveMenu}
      />

      <Grid
        templateRows="auto 1fr"
        gap="5"
        p="5"
      >
        <Header
          menuOpen={menuOpen}
          responsiveMenuOpen={responsiveMenuOpen}
          toggleMenu={toggleMenu}
          toggleResponsiveMenu={toggleResponsiveMenu}
        />

        <Box as="main">
          <Outlet />
        </Box>
      </Grid>
    </Grid>
  )
}
