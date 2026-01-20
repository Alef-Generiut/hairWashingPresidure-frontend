import { Flex, Box, Text } from "@mantine/core";
import ReviewPopup from "../../reviewPopup/ReviewPopup";
import { StarIcon } from "@phosphor-icons/react";
import "./OverviewHead.css";
import { NOT_FOUND_STRING } from "../../../constants/constants";
import { formatMovieLength } from "../../../utils";

interface overviewHead {
  movieName: string;
  releaseYear: number;
  movieLength: number;
  movieId: string;
  avgRating: number;
}

const OverviewHead = ({
  movieName,
  releaseYear,
  movieLength,
  movieId = NOT_FOUND_STRING,
  avgRating,
}: overviewHead) => {
  return (
    <Flex
      direction="row"
      justify="space-between"
      align="flex-start"
      className="w-full mb-6"
    >
      <Box>
        <Text fz={40}>{movieName}</Text>

        <Text className=" movieLength" fz={12} c="gray.6">
          {releaseYear ?? NOT_FOUND_STRING}
          <span className="mx-2">•</span>
          {formatMovieLength(movieLength)}
        </Text>
      </Box>

      <Flex align="center" className="space-x-3">
        <Box className="reviewPopup">
          <ReviewPopup movieId={movieId} title={movieName} />
        </Box>
        <Flex align="center" className="rating">
          <StarIcon color="yellow" weight="fill" />
          <Text size="medium">{avgRating}/10</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default OverviewHead;
