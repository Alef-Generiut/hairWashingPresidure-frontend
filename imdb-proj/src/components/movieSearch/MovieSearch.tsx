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
  const search = searchParams.get("q")?.toLowerCase() || "";

  useEffect(() => {
    MovieAPI.searchMovies(search).then(setSearchedMovies).catch(console.error);
  }, [search]);

  return (
    <Box>
      <Box className="lowTaperFade" />;
      {searchedMovies.length != 0 ? (
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
        {searchedMovies.map((movie) => (
          <Box className="w-[18%]">
            <MovieRecomm movie={movie} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
export default MovieSearch;
