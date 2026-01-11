import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./containers/app/App.tsx";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
const theme = createTheme({
  components: {
    Button: {
      defaultProps: {
        c: "rgba(227, 227, 225, 1)",
      },
    },
  },
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
        <Provider store={store}>
      <App />
      </Provider>
    </MantineProvider>
  </StrictMode>
);
