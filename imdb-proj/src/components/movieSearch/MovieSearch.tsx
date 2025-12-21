import { Box, Flex, Title } from "@mantine/core";
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
      <Box className="titleContainer">
        {filteredMovies.length != 0 ? (
          <Title>results for: {search}</Title>
        ) : (
          <Box component={Link} to={`/`}>
            couldnt find results, click here to return home
          </Box>
        )}
      </Box>
      <Flex
        justify="center"
        align="center"
        direction="row"
        gap="md"
        className="w-[90vw] mx-auto"
      >
        {filteredMovies.map((movie) => (
          <MovieRecomm movie={movie} itemsPerRow={6} />
        ))}
      </Flex>
    </Box>
  );
};
export default MovieSearch;
