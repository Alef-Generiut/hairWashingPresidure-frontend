import { Box, Image } from "@mantine/core";
import { movie } from "./types/types";
import Overview from "./components/moviePage/overview/Overview";

const MoviePage = (movie: movie) => {
  return (
    <Box>
      <Overview movie={movie} />
    </Box>
  );
};
export default MoviePage;
