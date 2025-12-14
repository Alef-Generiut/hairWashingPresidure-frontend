import { Box, Divider, Flex, TableOfContents } from "@mantine/core";
import { movie, movieReview } from "../../../types/types";
import "./Overview.css";
import OverviewHead from "../overviewHead/OverviewHead";
import OverviewPhotos from "../overviewPhotos/OverviewPhotos";
import OverviewDesc from "../overviewDesc/OverviewDesc";
import UserReview from "../userReview/UserReview";
import MovieRecomm from "../../movieRecomm/movieRecomm";

interface OverviewProps {
  movie: movie;
}

const randomMovieReview: movieReview = {
  id: "rev_8f3c2a91",
  rating: 9,
  title: "A Visceral, Grand-Scale Sequel That Raises the Bar",
  content:
    "Dune: Part Two expands everything that made the first film compelling. The world feels heavier, the stakes more personal, and the imagery consistently breathtaking.",
  username: "cinemaEnthusiast92",
  movieId: "movie_dune_part_two",
  createdAt: new Date("2024-02-20T19:42:00Z"),
};

const STICKY_OFFSET = 80;

const Overview = ({ movie }: OverviewProps) => {
  return (
    <Flex gap="xl" className="p-6">
      <Box flex={1} id="overview">
        <Box>
          <OverviewHead
            name={movie.name}
            releaseYear={movie.releaseYear}
            movieLength={movie.length}
          />

          <OverviewPhotos />

          <OverviewDesc genres={movie.genres} plot={movie.plot} />
        </Box>
        <Divider my="xl" />
        <Box id="reviews">
          <Flex direction="row" gap="lg">
            <UserReview review={randomMovieReview} />
            <UserReview review={randomMovieReview} />
          </Flex>
        </Box>
        <Divider my="xl" />
        <Box id="similar">
          <Box className="moreLike">
            <span className="text-yellow-400">●</span> More like this
          </Box>
          <Flex justify="center" gap="md" wrap="wrap">
            <MovieRecomm />
            <MovieRecomm />
            <MovieRecomm />
            <MovieRecomm />
            <MovieRecomm />
          </Flex>
        </Box>
      </Box>

      <Box
        w={220}
        pos="sticky"
        top={STICKY_OFFSET}
        className="tableOfContentHolder"
      >
        <TableOfContents
          scrollSpyOptions={{
            selector: "Box[id]",
            offset: STICKY_OFFSET,
          }}
          getControlProps={({ data, active }) => ({
            component: "a",
            href: `#${data.id}`,
            className: `tableOfContentGeneral ${
              active ? "tableOfContentActive" : ""
            }
            `,
            children: data.value,
            c: active ? "yellow" : "",
            bg: "transparent",
          })}
        />
      </Box>
    </Flex>
  );
};

export default Overview;
