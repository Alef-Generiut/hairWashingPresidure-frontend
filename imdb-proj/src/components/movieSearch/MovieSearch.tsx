import { Box, Flex, Title, Text, Button } from "@mantine/core";
import { Link, useSearchParams } from "react-router-dom";
import { movies } from "../../hardCodedData";
import MovieRecomm from "../movieRecomm/movieRecomm";
import "./movieSearch.css";

const MovieSearch = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("q")?.toLowerCase() || "";

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(search)
  );
  return (
    <Box>
      <Box className="lowTaperFade" />;
      {filteredMovies.length != 0 ? (
        <Box className="titleContainer">
          <Title>results for: {search}</Title>
        </Box>
      ) : (
        <Box pt={"xl"}>
          <Text size="xl">couldnt find results for {search}</Text>
          <Text component={Link} to={`/`} size="xl" td="underline" c="blue">
            press here to return home
          </Text>
        </Box>
      )}
      <Flex
        justify="center"
        align="center"
        direction="row"
        gap="md"
        className="w-[90vw] mx-auto"
      >
        {filteredMovies.map((movie) => (
          <Box className="w-[18%]">
          <MovieRecomm movie={movie} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
export default MovieSearch;
