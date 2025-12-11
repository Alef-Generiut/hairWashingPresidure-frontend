import { Box, Image, Flex, Text } from "@mantine/core";
import { StarIcon } from "@phosphor-icons/react";
import ReviewPopup from "../reviewPopup/ReviewPopup";
import { movie } from "../../types/types";
import movieImage from "../../assets/eternal-sunshine-of-the-spotless-mind.jpg";
import posterImage from "../../assets/enternal-logo.jpg";

interface overview {
  movie: movie;
}

const Overview = ({ movie: movie }: overview) => {
  return (
    <Box className="w-full p-6">
      <Flex
        direction="row"
        justify="space-between"
        align="flex-start"
        className="w-full mb-6"
      >
        <Box>
          <Text className="text-4xl font-semibold mb-1">{movie.name}</Text>

          <Text className="text-gray-300 text-sm flex items-center">
            {movie.releaseYear}
            <span className="mx-2">•</span>
            {Math.floor(movie.length / 60) + "h " + (movie.length % 60) + "m"}
          </Text>
        </Box>

        <Flex align="center" className="space-x-3">
          <Box className="px-4 py-2 bg-white/5 rounded-lg cursor-pointer space-x-2 inset-shadow-sm/50">
            <ReviewPopup />
          </Box>
          <Flex
            align="center"
            className="px-4 py-2 bg-white/10 rounded-lg cursor-pointer space-x-2 inset-shadow-sm/50"
          >
            <StarIcon color="yellow" weight="fill" />
            <Text className="font-medium">{8.7}/10</Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex className="w-full gap-6">
        <Box className="w-[22vw] h-[60vh] overflow-hidden rounded-lg shadow-lg">
          <Image
            src={posterImage}
            className="w-full h-full object-cover"
            radius="md"
          />
        </Box>

        <Box className="flex-1 h-[60vh] overflow-hidden rounded-lg shadow-lg">
          <Image
            src={movieImage}
            className="w-full h-full object-cover"
            radius="md"
          />
        </Box>
      </Flex>

      <Box className="max-w-md pt-[4vh]">
        <Flex direction="row" className="items-center mb-6">
          <Box className="text-xl font-bold mr-6">Genre</Box>

          <Flex className="gap-3 flex-wrap">
            {movie.genres.map((genre) => (
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

          <Box className="text-white/80 leading-relaxed max-w-[45ch]">
            {movie.plot}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Overview;
