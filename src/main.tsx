import ReactDOM from "react-dom/client"

import { ThemeProvider } from "./contexts/theme.context"

import App from "./App"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
)
