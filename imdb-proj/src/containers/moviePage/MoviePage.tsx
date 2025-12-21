import { Box, Divider, Flex, TableOfContents } from "@mantine/core";
import { movie, movieReview } from "../../types/types";
import "./MoviePage.css";
import React from "react";
import OverviewHead from "../../components/moviePage/overviewHead/OverviewHead";
import OverviewPhotos from "../../components/moviePage/overviewPhotos/OverviewPhotos";
import OverviewDesc from "../../components/moviePage/overviewDesc/OverviewDesc";
import UserReview from "../../components/moviePage/userReview/UserReview";
import MovieRecomm from "../../components/movieRecomm/movieRecomm";
import { useParams } from "react-router-dom";
import { movies } from "../../hardCodedData";

const STICKY_OFFSET = 80;

const mockReview: movieReview = {
  id: "rev_8f3c2a91",
  rating: 9,
  title: "A Visceral, Grand-Scale Sequel That Raises the Bar",
  content:
    "Dune: Part Two expands everything that made the first film compelling. The world feels heavier, the stakes more personal, and the imagery consistently breathtaking.aaaaaaa aaaaaaaaa aaaaaaa aaaaaaaa aaaaaaaaa aaaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaa aaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaaa aaaaaa aaaaaaa aaaaaa aaaaaa aaaaa ",
  username: "cinemaEnthusiast",
  movieId: "movie_dune_part_two",
  createdAt: new Date("2024-02-20T19:42:00Z"),
};

const MoviePage = () => {
  const { movieId } = useParams<{ movieId: string }>();

  const movie: movie | undefined = movies.find((movie) => movie.id === movieId);
  return (
    <Flex gap="xl" className="p-6  mt-[10vh]">
      <Box className="lowTaperFade" />

      <Box flex={1}>
        <section>
          <h2 id="overview" className="sr-only">
            Overview
          </h2>

          <OverviewHead
            name={movie?.name}
            releaseYear={movie?.releaseYear}
            movieLength={movie?.length}
          />

          <MemoizedOverviewPhotos />

          <OverviewDesc genres={movie?.genres} plot={movie?.plot} />
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

        <section>
          <h2 id="similar" className="sr-only">
            More Like This
          </h2>
          <Box className="moreLike">
            <span className="text-yellow-400">●</span> More like this
          </Box>

          <Flex
            justify="center"
            align="center"
            direction="row"
            gap="md"
            className="w-[75vw] mx-auto"
          >
            {movies.slice(0, 5).map((movie) => (
              <Box className="w-[18%]">
                <MemoizedMovieRecomm movie={movie}  />
              </Box>
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
            c: active ? "yellow.5" : undefined,
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

export default React.memo(MoviePage);
