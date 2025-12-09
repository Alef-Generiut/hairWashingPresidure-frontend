import "./App.css";
import Header from "../components/header";
import { AppShell, Flex } from "@mantine/core";
function App() {
  return (
    <AppShell>
      <AppShell.Header>
        <Flex>
          <Header />
        </Flex>
      </AppShell.Header>
    </AppShell>
  );
}

export default App;
