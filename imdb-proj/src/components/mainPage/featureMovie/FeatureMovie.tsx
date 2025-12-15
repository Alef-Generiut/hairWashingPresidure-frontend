import imageTemp from "../../../assets/eternal-sunshine-of-the-spotless-mind.jpg";
import "./FeatureMovie.css";
import { Box, Image, Text } from "@mantine/core";
import image from "../../../assets/enternal-logo.jpg";
import FeatureMovieDesc from "../featureMovieDesc/FeatureMovieDesc.tsx";
import FeatureChoice from "../featureChoice/FeatureChoice.tsx";
const HomePageMovie = () => {
  return (
    <Box className="headlineMovie">

      <Box className="mainRow">
        <Box className="featureMovieGroup">
          <Box className="imageHolder">
            <Image
              src={imageTemp}
              alt="Background"
              className="frontImage"
              fit="cover"
            />
          </Box>

          <Box className="contentRow">
            <FeatureMovieDesc
              image={image}
              text="Eternal Sunshine Of The Spotless Mind"
            />
          </Box>
        </Box>
        <Box className="features space-y-[4vh]">
          <Box>
            <Text className="flex justify-start" size="xs">
              <span className="text-yellow-400 mx-0.5">●</span> Featured Choices
            </Text>
          </Box>
          <Box>
            <FeatureChoice />
            <FeatureChoice />
            <FeatureChoice />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default HomePageMovie;
