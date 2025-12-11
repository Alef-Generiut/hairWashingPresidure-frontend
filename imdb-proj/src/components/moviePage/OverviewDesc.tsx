import { Flex, Box } from "@mantine/core";
import { genre } from "../../types/types";

interface overvireDesc {
  genres: genre[];
  plot: string;
}

const OverviewDesc = ({ genres, plot }: overvireDesc) => {
  return (
    <Box className="max-w-md pt-[4vh]">
      <Flex direction="row" className="items-center mb-6">
        <Box className="text-xl font-bold mr-6">Genre</Box>

        <Flex className="gap-3 flex-wrap">
          {genres.map((genre) => (
            <Box
              key={genre.name}
              className="px-4 py-1.5 bg-white/10 rounded-full text-sm text-white"
            >
              {genre.name}
            </Box>
          ))}
        </Flex>
      </Flex>

      <Flex direction="row" className="items-start">
        <Box className="text-xl font-bold mr-6 ">Plot</Box>

        <Box className="text-white/80 leading-relaxed max-w-[45ch]">{plot}</Box>
      </Flex>
    </Box>
  );
};
export default OverviewDesc;
