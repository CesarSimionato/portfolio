import { useContext } from "react"

import { ThemeContext } from "@/contexts/theme.context"

export const useTheme = () => {
  const theme = useContext(ThemeContext)
  return theme
}
