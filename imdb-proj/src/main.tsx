import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./containers/App.tsx";
import { MantineProvider,createTheme } from "@mantine/core";
import '@mantine/core/styles.css'
const theme = createTheme({

})
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </StrictMode>
);
