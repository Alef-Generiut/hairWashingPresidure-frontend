import { Box, Image } from "@mantine/core";
import { movie } from "./types/types";
import Overview from "./components/moviePage/OverView";

const MoviePage = (movie: movie) => {
  return (
    <Box>
      <Overview movie={movie} />
        
    </Box>
  );
};
export default MoviePage;
