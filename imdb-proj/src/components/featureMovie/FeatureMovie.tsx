import imageTemp from "../../assets/eternal-sunshine-of-the-spotless-mind.jpg";
import "./FeatureMovie.css";
import { Box, Text, Image } from "@mantine/core";
import image from "../../assets/enternal-logo.jpg";
import FeatureMovieDesc from "../featureMovieDesc/FeatureMovieDesc.tsx";
const HomePageMovie = () => {
  return (
    <Box className="headlineMovie">
      <Box className="lowTaperFade" />

      <Box className="imageHolder">
        <Image
          src={imageTemp}
          alt="Background"
          className="frontImage"
          fit="cover"
        />
      </Box>

      <FeatureMovieDesc image={image} text={'Eternal Sunshine Of The Spotless Mind'} />
      
    </Box>
  );
};
export default HomePageMovie;
