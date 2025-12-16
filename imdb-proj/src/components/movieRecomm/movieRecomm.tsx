import { Box, Text, Image, Flex } from "@mantine/core";
import image from "../../assets/enternal-logo.jpg";
import { StarIcon, InfoIcon } from "@phosphor-icons/react";
import ReviewPopup from "../reviewPopup/ReviewPopup";
import "./movieRecomm.css";
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
    <Box className="recommContainer">
      <Box className="imgHolder">
        <Image src={Posterimage} className="image" radius="md" fit="cover" />
      </Box>
      <Text className="recommName" ta="start">{name}</Text>
      <Flex direction="row" justify="center" align="center" className="mt-1">
        <Box className="recommText">
          <Box className="recommRating">
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
