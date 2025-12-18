import { Box, Flex, Title } from "@mantine/core";
import { useSearchParams } from "react-router-dom";
import { movies } from "../../hardCodedData";
import MovieRecomm from "../movieRecomm/movieRecomm";

const MovieSearch = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("q")?.toLowerCase() || "";

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(search)
  );
  return (
    <Box>
      <Box className="lowTaperFade" />;
      <Box className="relative  flex items-end justify-center rounded-md -z-10 mt-[10vh] pb-5">
        <Title>{`results for: ${search}`}</Title>
      </Box>
      <Flex
        justify="center"
        align="center"
        direction="row"
        gap="md"
        className="w-[90vw] mx-auto"
      >
        {filteredMovies.map((movie) => (
          <MovieRecomm
            name={movie.name}
            avgRating={movie.avgRating}
            itemsPerRow={6}
            movieId={movie.id}
          />
        ))}
      </Flex>
    </Box>
  );
};
export default MovieSearch;
