import { Flex, Box, Text } from "@mantine/core";
import ReviewPopup from "../../reviewPopup/ReviewPopup";
import { StarIcon } from "@phosphor-icons/react";
import "./OverviewHead.css";

interface overviewHead {
  name?: string;
  releaseYear?: number;
  movieLength?: number;
}
const NOT_FOUND_NUMBER = -999;
const NOT_FOUND_STRING = "notFound";

const OverviewHead = ({
  name = NOT_FOUND_STRING,
  releaseYear = NOT_FOUND_NUMBER,
  movieLength = NOT_FOUND_NUMBER,
}: overviewHead) => {
  return (
    <Flex
      direction="row"
      justify="space-between"
      align="flex-start"
      className="w-full mb-6"
    >
      <Box>
        <Text fz={40}>{name}</Text>

        <Text className=" movieLength" fz={12} c="gray.6">
          {releaseYear != NOT_FOUND_NUMBER ? releaseYear : NOT_FOUND_STRING}
          <span className="mx-2">•</span>
          {movieLength != NOT_FOUND_NUMBER
            ? Math.floor(movieLength / 60) + "h " + (movieLength % 60) + "m"
            : NOT_FOUND_STRING}
        </Text>
      </Box>

      <Flex align="center" className="space-x-3">
        <Box className="reviewPopup">
          <ReviewPopup />
        </Box>
        <Flex align="center" className="rating">
          <StarIcon color="yellow" weight="fill" />
          <Text size="medium">{8.7}/10</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default OverviewHead;
