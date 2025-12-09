import "./App.css";
import Header from "../components/header";
import { Flex } from "@mantine/core";
function App() {
  return (
    <Flex
      mih={50}
      gap="xl"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
      <Header />
    </Flex>
  );
}

export default App;
