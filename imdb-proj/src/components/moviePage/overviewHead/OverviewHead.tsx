import { Flex, Box, Text } from "@mantine/core";
import ReviewPopup from "../../reviewPopup/ReviewPopup";
import { StarIcon } from "@phosphor-icons/react";
import "./OverviewHead.css"

interface overviewHead {
  name: string;
  releaseYear: number;
  movieLength: number;
}
const OverviewHead = ({ name, releaseYear, movieLength }: overviewHead) => {
  return (
    <Flex
      direction="row"
      justify="space-between"
      align="flex-start"
      className="w-full mb-6"
    >
      <Box>
        <Text className="movieName">{name}</Text>

        <Text className=" movieLength">
          {releaseYear}
          <span className="mx-2">•</span>
          {Math.floor(movieLength / 60) + "h " + (movieLength % 60) + "m"}
        </Text>
      </Box>

      <Flex align="center" className="space-x-3">
        <Box className="reviewPopup">
          <ReviewPopup />
        </Box>
        <Flex
          align="center"
          className="rating"
        >
          <StarIcon color="yellow" weight="fill" />
          <Text className="font-medium">{8.7}/10</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default OverviewHead;
