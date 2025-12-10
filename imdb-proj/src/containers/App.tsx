import "./App.css";
import Header from "../components/Header";
import { AppShell, Flex } from "@mantine/core";
import HomePageMovie from "../components/featureMovie/FeatureMovie";
function App() {
  return (
    <AppShell padding="md">
      <AppShell.Header>
        <Flex mih={50} justify="center" align="center" direction="row">
          <Header />
        </Flex>
      </AppShell.Header>

      <AppShell.Main>
        <Flex justify="center" align="center" direction="row">
          <HomePageMovie />
        </Flex>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
