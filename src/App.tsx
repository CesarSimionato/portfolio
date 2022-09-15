import { ChakraProvider } from "@chakra-ui/react"

import { BrowserRouter } from "react-router-dom"
import { useTheme } from "./hooks/useTheme"

import { Router } from "./router"

const App = () => {
  const { theme } = useTheme()

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
