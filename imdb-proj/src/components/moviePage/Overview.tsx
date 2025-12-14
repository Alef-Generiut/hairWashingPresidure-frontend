import { Box } from "@mantine/core";
import { movie } from "../../types/types";

import OverviewHead from "./overviewHead/OverviewHead";
import OverviewPhotos from "./OverviewPhotos";
import OverviewDesc from "./overviewDesc/OverviewDesc";

interface overview {
  movie: movie;
}

const Overview = ({ movie: movie }: overview) => {
  return (
    <Box className="w-full p-6">
      <OverviewHead
        name={movie.name}
        releaseYear={movie.releaseYear}
        movieLength={movie.length}
      />

      <OverviewPhotos
      // posterImage={movie.posterPhoto}
      // movieImage={movie.bgPhoto}
      />
      <OverviewDesc genres={movie.genres} plot={movie.plot} />
    </Box>
  );
};

export default Overview;
