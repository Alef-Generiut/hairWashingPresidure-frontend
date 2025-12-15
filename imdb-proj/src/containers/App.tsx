import "./App.css";
import Header from "../components/Header";
import { AppShell, Flex, Box, Text } from "@mantine/core";
import HomePageMovie from "../components/mainPage/featureMovie/FeatureMovie";
import MovieRecomm from "../components/movieRecomm/movieRecomm";
import { movie } from "../types/types";
import MoviePage from "../components/moviePage/moviePage/MoviePage";
import LoginSignUp from "../components/LoginSignUp/LoginSignUp";
const movieTest: movie = {
  id: "asd",
  name: "Eternal Sunshine of the Spotless Mind",
  posterPhoto: "../assets/enternal-logo.jpg",
  bgPhoto: "../assets/eternal-sunshine-of-the-spotless-mind.jpg",
  length: 190,
  plot: "adasd sdfi asdi fasi dfao isdf aius dfai sud fhpi",
  releaseYear: 1999,
  genres: [
    { id: 1, name: "Drama" },
    { id: 2, name: "Romance" },
    { id: 3, name: "Sci-Fi" },
  ],
};
const App = () => {
  return (
    <AppShell>
      <AppShell.Header>
        <Flex mih={50} justify="center" align="center" direction="row">
          <Header />
        </Flex>
      </AppShell.Header>

      <AppShell.Main>
        {/* <LoginSignUp/> */}
        <Box className="lowTaperFade" />

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
        <MoviePage movie={movieTest} />
      </AppShell.Main>
    </AppShell>
  );
};

export default App;
