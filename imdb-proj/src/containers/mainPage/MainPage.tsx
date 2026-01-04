import { Flex, Box, Text } from "@mantine/core";
import HomePageMovie from "../../components/mainPage/featureMovie/FeatureMovie";
import MovieRecomm from "../../components/movieRecomm/movieRecomm";
import { movie, movieOptions } from "../../types/types";
import "./MainPage.css";
import { useEffect, useState } from "react";
import MovieAPI from "../../api/movie.api";
import { NOT_FOUND_MOVIE } from "../../constants/constants";

const MainPage = () => {
  const [featureMovie, setFeatureMovie] = useState<movie>(NOT_FOUND_MOVIE);
  const [topRatedMovies, setTopRatedMovies] = useState<movieOptions[]>([]);
  useEffect(() => {
    MovieAPI.getLatest().then(setFeatureMovie).catch(console.error);
    MovieAPI.getTopRated().then(setTopRatedMovies).catch(console.error);
  }, []);
  return (
    <>
      <Box className="lowTaperFade" />
      <Flex justify="center" align="center" direction="column">
        <HomePageMovie movie={featureMovie} />
      </Flex>
      <Box className="pt-[60vh] ">
        <Box className="mr-[61vw] mb-[3vh]">
          <Text>
            <span className="text-yellow-400 mr-4">●</span>
            Top Rated Movies
          </Text>
        </Box>
        <Flex
          justify="center"
          align="center"
          direction="row"
          gap="md"
          wrap="nowrap"
          className="w-[75vw] mx-auto "
        >
          {topRatedMovies.map((movie) => (
            <Box className="w-[14.667%]">
              <MovieRecomm movie={movie} />
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
};
export default MainPage;
