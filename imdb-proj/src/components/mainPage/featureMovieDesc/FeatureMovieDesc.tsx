import { Box, Image, Text } from "@mantine/core";

interface featureMovieDesc {
  image: string;
  text: string;
}

const FeatureMovieDesc = ({ image, text }: featureMovieDesc) => {
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
