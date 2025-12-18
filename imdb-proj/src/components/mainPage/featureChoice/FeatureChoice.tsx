import imageTemp from "../../../assets/eternal-sunshine-of-the-spotless-mind.jpg";
import image from "../../../assets/enternal-logo.jpg";
import { Box, Image, Text } from "@mantine/core";
import "./FeatureChoice.css";
import { Link } from "react-router-dom";
interface featureChoice {
  bgPhoto?: string;
  posterPhoto?: string;
  movieName?: string;
  movieId: string;
}

const FeatureChoice = ({
  movieName = "placeHolder",
  movieId,
}: featureChoice) => {
  return (
    <Box className="featuredCard" component={Link} to={`/movie/${movieId}`}>
      <Box className="featuredBg">
          <Image src={imageTemp} className="featuredBgImg" fit="cover" />
      </Box>

      <Box className="featuredContent">
        <Box className="featuredPoster">
          <Image src={image} className="posterImg" radius="md" fit="cover" />
        </Box>
        <Text size="sm" className="featuredTitle">
          {movieName}
        </Text>
      </Box>
    </Box>
  );
};
export default FeatureChoice;
