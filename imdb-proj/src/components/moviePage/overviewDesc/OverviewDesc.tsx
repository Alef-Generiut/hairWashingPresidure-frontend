import { Flex, Box } from "@mantine/core";
import { genre } from "../../../types/types";
import "./OverviewDesc.css";
import {
  NOT_FOUND_NUMBER,
  NOT_FOUND_STRING,
} from "../../../constants/constants";

interface overvireDesc {
  genres?: genre[];
  plot?: string;
}

const OverviewDesc = ({
  genres = [{ id: NOT_FOUND_NUMBER, name: NOT_FOUND_STRING }],
  plot = NOT_FOUND_STRING,
}: overvireDesc) => {
  return (
    <Box className="overviewDesc">
      <Flex direction="row" className="genreHolder">
        <Box className="genreHeadline">Genre</Box>

        <Flex className="genreBg">
          {genres
            ? genres.map((genre) => (
                <Box key={genre.name} className="genreBox">
                  {genre.name}
                </Box>
              ))
            : "notFound"}
        </Flex>
      </Flex>

      <Flex direction="row" className="items-start">
        <Box className="plotHeadline">Plot</Box>

        <Box className="plot">{plot}</Box>
      </Flex>
    </Box>
  );
};
export default OverviewDesc;
