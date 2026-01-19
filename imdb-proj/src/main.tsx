import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./containers/app/App.tsx";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store.ts";
import { THEME } from "./configs.ts";
import { PersistGate } from "redux-persist/lib/integration/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={THEME} defaultColorScheme="dark">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </MantineProvider>
  </StrictMode>
);
