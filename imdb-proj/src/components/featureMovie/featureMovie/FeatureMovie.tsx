import imageTemp from "../../../assets/eternal-sunshine-of-the-spotless-mind.jpg";
import "./FeatureMovie.css";
import { Box, Image, Text } from "@mantine/core";
import image from "../../../assets/enternal-logo.jpg";
import FeatureMovieDesc from "../featureMovieDesc/FeatureMovieDesc.tsx";
import FeatureChoice from "../featureChoice/FeatureChoice.tsx";
import { Link } from "react-router-dom";
import { featuredChoice, movie } from "../../../types/types.ts";
import { useEffect, useState } from "react";
import MovieAPI from "../../../api/movie.api.ts";

interface homePageMovie {
  movie: movie;
}

const HomePageMovie = ({ movie }: homePageMovie) => {
  const [featureChoices, setFeatureChoices] = useState<featuredChoice[]>([]);

  useEffect(() => {
    MovieAPI.getFeatured().then(setFeatureChoices).catch(console.error);
  },[]);

  return (
    <Box className="headlineMovie">
      <Box className="mainRow">
        <Box
          component={Link}
          to={`/movie/${movie.id}`}
          className="featureMovieGroup"
        >
          <Box>
            <Box className="imageHolder">
              <Image src={imageTemp} className="frontImage" fit="cover" />
            </Box>

            <Box className="contentRow">
              <FeatureMovieDesc image={image} movieName={movie.name} />
            </Box>
          </Box>
        </Box>
        <Box className="features">
          <Box>
            <Text ta="start" size="xs">
              <span className="text-yellow-400 mx-0.5">●</span> Featured Choices
            </Text>
          </Box>
          <Box>
            {featureChoices.map((movie) => (
              <FeatureChoice movieName={movie.name} movieId={movie.id} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default HomePageMovie;
