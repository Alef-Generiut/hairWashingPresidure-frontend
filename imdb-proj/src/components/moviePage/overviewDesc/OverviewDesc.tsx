import { Flex, Box } from "@mantine/core";
import { genre } from "../../../types/types";
import "./OverviewDesc.css";

interface overvireDesc {
  genres: genre[];
  plot: string;
}

const OverviewDesc = ({ genres, plot }: overvireDesc) => {
  return (
    <Box className="overviewDesc">
      <Flex direction="row" className="genreHolder">
        <Box className="genreHeadline">Genre</Box>

        <Flex className="genreBg">
          {genres.map((genre) => (
            <Box key={genre.name} className="genreBox">
              {genre.name}
            </Box>
          ))}
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
