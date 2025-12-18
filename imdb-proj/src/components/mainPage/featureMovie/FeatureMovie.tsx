import imageTemp from "../../../assets/eternal-sunshine-of-the-spotless-mind.jpg";
import "./FeatureMovie.css";
import { Box, Image, Text } from "@mantine/core";
import image from "../../../assets/enternal-logo.jpg";
import FeatureMovieDesc from "../featureMovieDesc/FeatureMovieDesc.tsx";
import FeatureChoice from "../featureChoice/FeatureChoice.tsx";
import { movies } from "../../../hardCodedData.ts";
import { Link } from "react-router-dom";
import { movie } from "../../../types/types.ts";

interface homePageMovie {
  movie: movie;
}

const HomePageMovie = ({ movie }: homePageMovie) => {
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
              <Image
                src={imageTemp}
                alt="Background"
                className="frontImage"
                fit="cover"
              />
            </Box>

            <Box className="contentRow">
              <FeatureMovieDesc image={image} text={movie.name} />
            </Box>
          </Box>
        </Box>
        <Box className="features space-y-[4vh]">
          <Box>
            <Text className="flex justify-start" size="xs">
              <span className="text-yellow-400 mx-0.5">●</span> Featured Choices
            </Text>
          </Box>
          <Box>
            {movies.slice(0, 3).map((movie) => (
              <FeatureChoice movieName={movie.name} movieId={movie.id} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default HomePageMovie;
