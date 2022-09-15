import { createContext, ReactNode, useState } from "react"

import { extendTheme } from "@chakra-ui/react"

import { themeComponents } from "@/themes/components"

import {
  gryffindorStyles,
  hufflepuffStyles,
  ravenclawStyles,
  slytherinStyle,
} from "@/themes/styles"

type ThemeProps = {
  name: string
  type: "gryffindor" | "hufflepuff" | "ravenclaw" | "slytherin"
  file: object
}

type ThemeContextData = {
  theme: object
  selectedTheme: ThemeProps
}

export const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData,
)

type ThemeProviderProps = {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const themes: ThemeProps[] = [
    {
      name: "Grifinória",
      type: "gryffindor",
      file: gryffindorStyles,
    },
    {
      name: "Lufa-Lufa",
      type: "hufflepuff",
      file: hufflepuffStyles,
    },
    {
      name: "Corvinal",
      type: "ravenclaw",
      file: ravenclawStyles,
    },
    {
      name: "Sonserina",
      type: "slytherin",
      file: slytherinStyle,
    },
  ]

  const selectedTheme = themes[3]

  const overrides = {
    ...selectedTheme.file,
    components: {
      ...themeComponents,
    },
  }

  const theme = extendTheme(overrides)

  return (
    <ThemeContext.Provider value={{ theme, selectedTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
