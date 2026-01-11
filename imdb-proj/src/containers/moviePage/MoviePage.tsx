import { Box, Divider, Flex, TableOfContents } from "@mantine/core";
import { movie, movieOptions, review } from "../../types/types";
import "./MoviePage.css";
import React, { useEffect, useState } from "react";
import OverviewHead from "../../components/moviePage/overviewHead/OverviewHead";
import OverviewPhotos from "../../components/moviePage/overviewPhotos/OverviewPhotos";
import OverviewDesc from "../../components/moviePage/overviewDesc/OverviewDesc";
import UserReview from "../../components/moviePage/userReview/UserReview";
import MovieRecomm from "../../components/movieRecomm/movieRecomm";
import { useParams } from "react-router-dom";
import ReviewAPI from "../../api/review.api";
import MovieAPI from "../../api/movie.api";
import { NOT_FOUND_MOVIE } from "../../constants/constants";

const STICKY_OFFSET = 80;

const MoviePage = () => {
  const [reviews, setReviews] = useState<review[]>([]);
  const [featureMovie, setFeatureMovie] = useState<movie>(NOT_FOUND_MOVIE);
  const [movieReccoms, setMovieReccoms] = useState<movieOptions[]>([]);
  const { movieId } = useParams<{ movieId: string }>();

  useEffect(() => {
    if (movieId) {
      ReviewAPI.get(movieId).then(setReviews).catch(console.error);

      MovieAPI.getById(movieId).then(setFeatureMovie).catch(console.error);
    }
  }, [movieId]);

  useEffect(() => {
    MovieAPI.getReccomended(featureMovie.genres.map((genre) => genre.id))
      .then(setMovieReccoms)
      .catch(console.error);
  }, [featureMovie.genres]);

  return (
    <Flex gap="xl" className="p-6  mt-[10vh]">
      <Box className="lowTaperFade" />

      <Box flex={1}>
        <section>
          <h2 id="overview" className="sr-only">
            Overview
          </h2>

          <OverviewHead
            name={featureMovie.name}
            releaseYear={featureMovie.releaseDate.getFullYear()}
            movieLength={featureMovie.length}
            movieId={movieId!}
            avgRating={featureMovie.avgRating}
          />

          <MemoizedOverviewPhotos />

          <OverviewDesc
            genres={featureMovie.genres}
            plot={featureMovie?.plot}
          />
        </section>

        <Divider my="xl" />

        <section>
          <h2 id="reviews" className="sr-only">
            User Reviews
          </h2>

          <Flex gap="lg" justify="center" align="center">
            {reviews.length == 0
              ? "could not find reviews"
              : reviews.map((review: review) => (
                  <MemoizedUserReview key={review.id} review={review} />
                ))}
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
            {movieReccoms.map((movie) => (
              <Box key={movie.id} className="w-[18%]">
                <MemoizedMovieRecomm movie={movie} />
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
            component: "button",
            type: "button",
            onClick: () => {
              const element = document.getElementById(data.id);
              if (!element) return;

              const top =
                element.getBoundingClientRect().top +
                window.scrollY -
                STICKY_OFFSET;

              window.scrollTo({
                top,
                behavior: "smooth",
              });
            },
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
