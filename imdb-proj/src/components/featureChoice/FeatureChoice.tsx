import imageTemp from "../../assets/eternal-sunshine-of-the-spotless-mind.jpg";
import image from "../../assets/enternal-logo.jpg";
import { Box, Image, Text } from "@mantine/core";
import "./FeaturedChoice.css";

const FeaturedChoice = () => {
  return (
    <Box className="featuredCard">
      <Box className="featuredBg">
        <Image
          src={imageTemp} 
          className="featuredBgImg"
          fit="cover"
        />
      </Box>

      <Box className="featuredContent">
        <Box className="featuredPoster">
          <Image src={image} className="posterImg" radius="md" fit="cover" />
        </Box>

        <Text size="xl" className="featuredTitle">
          'Inside Out' 2 Make us Feel Every Emotion
        </Text>
      </Box>
    </Box>
  );
};
export default FeaturedChoice;
