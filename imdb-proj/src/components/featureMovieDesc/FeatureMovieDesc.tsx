import { Box, Image, Text } from "@mantine/core";

interface FeaturedMovieDesc {
  image: string;
  text: string;
}

const FeatureMovieDesc = ({ image, text }: FeaturedMovieDesc) => {
  return (
    <Box className="textHolder">
      <Box className="sideImageHolder">
        <Image src={image} className="sideImage" radius="md" fit="cover" />
      </Box>

      <Text size="xl" className="movieTitle">
        {text}
      </Text>
    </Box>
  );
};

export default FeatureMovieDesc;
