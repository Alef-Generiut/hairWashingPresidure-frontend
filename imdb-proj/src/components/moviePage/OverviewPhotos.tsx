import { Box, Image, Flex } from "@mantine/core";
import movieImage from "../../assets/eternal-sunshine-of-the-spotless-mind.jpg";
import posterImage from "../../assets/enternal-logo.jpg";

interface overviewPhotos {
  posterImage: string;
  movieImage: string;
}

const OverviewPhotos = (/*{ posterImage, movieImage }: overviewPhotos*/) => {
  return (
    <Flex className="w-full gap-6">
      <Box className="w-[22vw] h-[60vh] overflow-hidden rounded-lg shadow-lg">
        <Image
          src={posterImage}
          className="w-full h-full object-cover"
          radius="md"
        />
      </Box>

      <Box className="flex-1 h-[60vh] overflow-hidden rounded-lg shadow-lg">
        <Image
          src={movieImage}
          className="w-full h-full object-cover"
          radius="md"
        />
      </Box>
    </Flex>
  );
};
export default OverviewPhotos;
