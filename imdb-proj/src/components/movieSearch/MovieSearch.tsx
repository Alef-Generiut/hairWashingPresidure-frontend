import { Box, Flex, Title, Text } from "@mantine/core";
import { Link, useSearchParams } from "react-router-dom";
import MovieRecomm from "../movieRecomm/movieRecomm";
import "./movieSearch.css";
import { useEffect, useState } from "react";
import MovieAPI from "../../api/movie.api";
import { movieOptions } from "../../types/types";

const MovieSearch = () => {
  const [searchParams] = useSearchParams();
  const [searchedMovies, setSearchedMovies] = useState<movieOptions[]>([]);
  const query = searchParams.get("q")?.toLowerCase() || "";

  useEffect(() => {
    MovieAPI.searchMovies(query).then(setSearchedMovies).catch(console.error);
  }, [query]);

  return (
    <Box>
      <Box className="lowTaperFade" />;
      {searchedMovies.length > 0 ? (
        <Box>
          <Box className="titleContainer">
            <Title>results for: {query}</Title>
          </Box>
          <Flex
            justify="center"
            align="center"
            direction="row"
            gap="md"
            className="w-[90vw] mx-auto"
          >
            {searchedMovies.map((movie) => (
              <Box className="w-[18%]">
                <MovieRecomm movie={movie} />
              </Box>
            ))}
          </Flex>
        </Box>
      ) : (
        <Box pt={"xl"}>
          <Text size="xl">couldn't find results for {query}</Text>
          <Text component={Link} to={`/`} size="xl" td="underline" c="blue">
            press here to return home
          </Text>
        </Box>
      )}
    </Box>
  );
};
export default MovieSearch;
