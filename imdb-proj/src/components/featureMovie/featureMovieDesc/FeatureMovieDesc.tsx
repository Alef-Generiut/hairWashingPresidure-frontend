import { Box, Image, Text } from "@mantine/core";

interface featureMovieDesc {
  image: string;
  movieName: string;
}

const FeatureMovieDesc = ({ image, movieName }: featureMovieDesc) => {
  return (
    <Box className="textHolder">
      <Box className="sideImageHolder">
        <Image src={image} className="sideImage" radius="md" fit="cover" />
      </Box>
      <Text size="xl" className="movieTitle">
        {movieName}
      </Text>
    </Box>
  );
};

export default FeatureMovieDesc;
