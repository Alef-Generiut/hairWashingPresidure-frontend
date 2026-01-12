import { AppShell, Flex } from "@mantine/core";
import Header from "./components/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";

const AppLayout = () => {
  return (
    <AppShell>
      <ScrollRestoration />
      <AppShell.Header>
        <Flex mih={50} justify="center" align="center">
          <Header />
        </Flex>
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default AppLayout;
