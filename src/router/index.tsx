import { Route, Routes } from "react-router-dom"

import { AdminLayout } from "@/layouts/AdminLayout"

import { Home } from "@/pages/Home"
import { About } from "@/pages/About"
import { Portfolio } from "@/pages/Portfolio"
import { Contact } from "@/pages/Contact"

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<AdminLayout />}
      >
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/portfolio"
          element={<Portfolio />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Route>
    </Routes>
  )
}
