import { Box, Text, Image, Flex } from "@mantine/core";
import image from "../../assets/enternal-logo.jpg";
import { StarIcon, InfoIcon } from "@phosphor-icons/react";
import ReviewPopup from "../reviewPopup/ReviewPopup";
interface movieRecomm {
  Posterimage?: string;
  name?: string;
  avgRating?: number;
}
const MovieRecomm = ({
  Posterimage = image,
  name = "eternal sunshine of the spotless mind",
  avgRating = 8.7,
}: movieRecomm) => {
  return (
    <Box className="p-2 bg-neutral-800 rounded-2xl w-[11vw] h-[40vh]">
      <Box className="overflow-hidden w-full">
        <Image
          src={Posterimage}
          className="w-full h-full object-cover"
          radius="md"
          fit="cover"
        />
      </Box>
      <Text className="truncate mt-2 font-medium">{name}</Text>
      <Flex direction="row" justify="center" align="center" className="mt-1">
        <Box className="flex items-center space-x-2">
          <Box className="flex items-center gap-1">
            <StarIcon color="yellow" weight="fill" />
            <span>{avgRating}</span>
          </Box>
          <ReviewPopup />
          <InfoIcon weight="fill" />
        </Box>
      </Flex>
    </Box>
  );
};

export default MovieRecomm;
