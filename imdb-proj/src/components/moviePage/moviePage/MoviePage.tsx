import { Box, Divider, Flex, TableOfContents } from "@mantine/core";
import { movie, movieReview } from "../../../types/types";
import "./MoviePage.css";
import React from "react";
import OverviewHead from "../overviewHead/OverviewHead";
import OverviewPhotos from "../overviewPhotos/OverviewPhotos";
import OverviewDesc from "../overviewDesc/OverviewDesc";
import UserReview from "../userReview/UserReview";
import MovieRecomm from "../../movieRecomm/movieRecomm";

interface OverviewProps {
  movie: movie;
}

const STICKY_OFFSET = 80;

const mockReview: movieReview = {
  id: "rev_8f3c2a91",
  rating: 9,
  title: "A Visceral, Grand-Scale Sequel That Raises the Bar",
  content:
    "Dune: Part Two expands everything that made the first film compelling. The world feels heavier, the stakes more personal, and the imagery consistently breathtaking.",
  username: "cinemaEnthusiast",
  movieId: "movie_dune_part_two",
  createdAt: new Date("2024-02-20T19:42:00Z"),
};

const mockRecommendations = Array.from({ length: 5 });

const Overview = ({ movie }: OverviewProps) => {
  return (
    <Flex gap="xl" className="p-6">
      <Box flex={1}>
        <section>
          <h2 id="overview" className="sr-only">
            Overview
          </h2>

          <OverviewHead
            name={movie.name}
            releaseYear={movie.releaseYear}
            movieLength={movie.length}
          />

          <MemoizedOverviewPhotos />

          <OverviewDesc genres={movie.genres} plot={movie.plot} />
        </section>

        <Divider my="xl" />

        <section>
          <h2 id="reviews" className="sr-only">
            User Reviews
          </h2>

          <Flex gap="lg">
            <MemoizedUserReview review={mockReview} />
            <MemoizedUserReview review={mockReview} />
          </Flex>
        </section>
        <Divider my="xl" />

        <section>
          <h2 id="similar" className="sr-only">
            More Like This
          </h2>
          <Box className="moreLike">
            <span className="text-yellow-400">●</span> More like this
          </Box>

          <Flex justify="center" gap="md" wrap="wrap">
            {mockRecommendations.map((_, i) => (
              <MemoizedMovieRecomm key={i} />
            ))}
          </Flex>
        </section>
      </Box>
      <Box
        w={220}
        pos="sticky"
        top={STICKY_OFFSET}
        visibleFrom="md"
        className="tableOfContentHolder"
      >
        <TableOfContents
          scrollSpyOptions={{
            selector: "h2[id]",
            offset: STICKY_OFFSET,
          }}
          getControlProps={({ data, active }) => ({
            component: "a",
            href: `#${data.id}`,
            className: `
              tableOfContentGeneral
              ${active ? "tableOfContentActive" : ""}
            `,
            children: data.value,
            c: active ? "yellow" : undefined,
            bg: "transparent",
          })}
        />
      </Box>
    </Flex>
  );
};
const MemoizedUserReview = React.memo(UserReview);
const MemoizedMovieRecomm = React.memo(MovieRecomm);
const MemoizedOverviewPhotos = React.memo(OverviewPhotos);

export default React.memo(Overview);