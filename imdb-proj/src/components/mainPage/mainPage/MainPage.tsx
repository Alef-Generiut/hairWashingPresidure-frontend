import { Flex, Box, Text } from "@mantine/core";
import HomePageMovie from "../../../components/mainPage/featureMovie/FeatureMovie";
import MovieRecomm from "../../../components/movieRecomm/movieRecomm";
import { movies } from "../../../hardCodedData";
const MainPage = () => {
  return (
    <>
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
          {movies.map((movie) => (
            <MovieRecomm  name={movie.name} avgRating={movie.avgRating}/>
          ))}
        </Flex>
      </Box>
    </>
  );
};
export default MainPage;
