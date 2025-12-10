import { Box, Text, Image } from "@mantine/core";
import image from "../../assets/eternal-sunshine-of-the-spotless-mind.jpg";
import { StarIcon } from "@phosphor-icons/react";
interface MovieRecomm {
  Posterimage?: string;
  name?: string;
  avgRating?: number;
}
const MovieRecomm = ({
  Posterimage=image,
  name = "eternal sunshine of the spotless mind",
  avgRating = 8.7,
}: MovieRecomm) => {
  return (
    <Box>
      <Image src={Posterimage} className="sideImage" radius="md" fit="cover" />
      <Text>{name}</Text>
      <Box>
        <Box>
          <StarIcon /> {avgRating}
        </Box>
        
      </Box>
    </Box>
  );
};

export default MovieRecomm;
