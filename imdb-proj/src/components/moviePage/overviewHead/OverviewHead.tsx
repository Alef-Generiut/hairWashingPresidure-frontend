import { Flex, Box, Text } from "@mantine/core";
import ReviewPopup from "../../reviewPopup/ReviewPopup";
import { StarIcon } from "@phosphor-icons/react";
import "./OverviewHead.css";

interface overviewHead {
  name?: string;
  releaseYear?: number;
  movieLength?: number;
}
const OverviewHead = ({
  name = "notFound",
  releaseYear = -999,
  movieLength = -999,
}: overviewHead) => {
  return (
    <Flex
      direction="row"
      justify="space-between"
      align="flex-start"
      className="w-full mb-6"
    >
      <Box>
        <Text  fz={40} >{name}</Text>

        <Text className=" movieLength" fz={12} c="gray.6">
          {releaseYear != -999 ? releaseYear : "notFound"}
          <span className="mx-2">•</span>
          {movieLength != -999
            ? Math.floor(movieLength / 60) + "h " + (movieLength % 60) + "m"
            : "notFound"}
        </Text>
      </Box>

      <Flex align="center" className="space-x-3">
        <Box className="reviewPopup">
          <ReviewPopup />
        </Box>
        <Flex align="center" className="rating">
          <StarIcon color="yellow" weight="fill" />
          <Text className="font-medium">{8.7}/10</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default OverviewHead;
