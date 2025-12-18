import { Box, Image, Flex } from "@mantine/core";
import movieImage from "../../../assets/eternal-sunshine-of-the-spotless-mind.jpg";
import posterImage from "../../../assets/enternal-logo.jpg";
import "./overviewPhotos.css";

interface overviewPhotos {
  posterImage: string;
  movieImage: string;
}

const OverviewPhotos = (/*{ posterImage, movieImage }: overviewPhotos*/) => {
  return (
    <Flex className="w-full gap-6">
      <Box className="posterImage">
        <Image src={posterImage} className="image" radius="md" />
      </Box>
      <Box className="movieImage">
        <Image src={movieImage} className="image" radius="md" />
      </Box>
    </Flex>
  );
};
export default OverviewPhotos;
