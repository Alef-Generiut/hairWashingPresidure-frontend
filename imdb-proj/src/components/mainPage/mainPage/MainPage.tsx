import { Flex, Box, Text } from "@mantine/core";
import HomePageMovie from "../../../components/mainPage/featureMovie/FeatureMovie";
import MovieRecomm from "../../../components/movieRecomm/movieRecomm";
import { movies } from "../../../hardCodedData";
import { movie } from "../../../types/types";
import "./MainPage.css";

const MainPage = () => {
  const featureMovie: movie = movies[0];
  return (
    <>
      <Box className="lowTaperFade" />
      <Flex justify="center" align="center" direction="column">
        <HomePageMovie movie={featureMovie} />
      </Flex>
      <Box className="pt-[60vh] ">
        <Box className="mr-[61vw] mb-[3vh]">
          <Text>
            <span className="text-yellow-400 mr-4">●</span>Picked For You
          </Text>
        </Box>

        <Flex
          justify="center"
          align="center"
          direction="row"
          gap="md"
          className="w-[75vw] mx-auto"
        >
          {movies.map((movie) => (
            <MovieRecomm
              name={movie.name}
              avgRating={movie.avgRating}
              itemsPerRow={6}
              movieId={movie.id}
            />
          ))}
        </Flex>
      </Box>
    </>
  );
};
export default MainPage;
