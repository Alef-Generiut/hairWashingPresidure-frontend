import { Flex, Box, Text } from "@mantine/core";
import ReviewPopup from "../../reviewPopup/ReviewPopup";
import { StarIcon } from "@phosphor-icons/react";
import "./OverviewHead.css";
import {
  NOT_FOUND_NUMBER,
  NOT_FOUND_STRING,
} from "../../../constants/constants";

interface overviewHead {
  name: string;
  releaseYear: number;
  movieLength: number;
  movieId:string;
}

const OverviewHead = ({ name, releaseYear, movieLength,movieId = NOT_FOUND_STRING}: overviewHead) => {
  const formatMovieLength = (minutes?: number) => {
    if (!minutes) return NOT_FOUND_NUMBER;

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${hours}h ${remainingMinutes}m`;
  };

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
          {releaseYear ?? NOT_FOUND_STRING}
          <span className="mx-2">•</span>
          {formatMovieLength(movieLength)}
        </Text>
      </Box>

      <Flex align="center" className="space-x-3">
        <Box className="reviewPopup">
          <ReviewPopup movieId={movieId} title={name}/>
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
