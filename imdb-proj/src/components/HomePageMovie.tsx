import imageTemp from "../assets/Untitled.jpg";
import "./HomePageMovie.css";
import { Box, Text, Image } from "@mantine/core";
import SideImage from "./SideImage";

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

      <Box className="textHolder">
        <SideImage />
        <Text size="xl">Hello World</Text>
        <Text>Some description here</Text>
      </Box>
    </Box>
  );
};
export default HomePageMovie;
