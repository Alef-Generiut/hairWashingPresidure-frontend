import { Box, Flex, TableOfContents, Text } from "@mantine/core";
import { movie } from "../../types/types";

import OverviewHead from "./overviewHead/OverviewHead";
import OverviewPhotos from "./overviewPhotos/OverviewPhotos";
import OverviewDesc from "./overviewDesc/OverviewDesc";
import { movieReview } from "../../types/types";
import UserReview from "./userReview/UserReview";

interface overview {
  movie: movie;
}
const randomMovieReview: movieReview = {
  id: "rev_8f3c2a91",
  rating: 9,
  title: "A Visceral, Grand-Scale Sequel That Raises the Bar",
  content:
    "Dune: Part Two expands everything that made the first film compelling. The world feels heavier, the stakes more personal, and the imagery consistently breathtaking. Denis Villeneuve delivers a sequel that respects its audience, trusting silence and scale over spectacle alone. Performances are measured yet powerful, and the film’s patience allows its themes to fully land. This is blockbuster filmmaking with rare confidence and restraint.",
  username: "cinemaEnthusiast92",
  movieId: "movie_dune_part_two",
  createdAt: new Date("2024-02-20T19:42:00Z"),
};
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
      <Box>
        <Box className="text-left  text-2xl my-[4vh]">
          <span className="mr-4 text-yellow-400">●</span>
          User Reviews
        </Box>
        <Text className="flex items-center gap-4 font-bold text-left ">
          <UserReview review={randomMovieReview} />
          <UserReview review={randomMovieReview} />
        </Text>
      </Box>
    </Box>
  );
};

export default Overview;
