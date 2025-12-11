import "./App.css";
import Header from "../components/Header";
import { AppShell, Flex, Box, Text } from "@mantine/core";
import HomePageMovie from "../components/mainPage/featureMovie/FeatureMovie";
import MovieRecomm from "../components/movieRecomm/movieRecomm";
function App() {
  return (
    <AppShell padding="md">
      <AppShell.Header>
        <Flex mih={50} justify="center" align="center" direction="row">
          <Header />
        </Flex>
      </AppShell.Header>

      <AppShell.Main>
        <Flex justify="center" align="center" direction="column">
          <HomePageMovie />
        </Flex>
        <Box className="pt-[60vh] space-x-[1vw] ">
          <Box className="mr-[56vw] mb-[3vh]">
            <Text>
              <span className="text-yellow-400 mr-4">●</span>Picked For You
            </Text>
          </Box>
          <Flex justify="center" align="center" direction="row">
            <MovieRecomm />
            <MovieRecomm />
            <MovieRecomm />
            <MovieRecomm />
            <MovieRecomm />
            <MovieRecomm />
          </Flex>
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
