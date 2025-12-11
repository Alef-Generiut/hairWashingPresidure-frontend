import { Flex,Box,Text } from "@mantine/core";
import ReviewPopup from "../reviewPopup/ReviewPopup";
import { StarIcon } from "@phosphor-icons/react";

interface overviewHead {
    name:string;
    releaseYear:number
    movieLength:number
}
const OverviewHead = ({name,releaseYear,movieLength}:overviewHead) => {
  return (
    <Flex
      direction="row"
      justify="space-between"
      align="flex-start"
      className="w-full mb-6"
    >
      <Box>
        <Text className="text-4xl font-semibold mb-1">{name}</Text>

        <Text className="text-gray-300 text-sm flex items-center">
          {releaseYear}
          <span className="mx-2">•</span>
          {Math.floor(movieLength / 60) + "h " + (movieLength % 60) + "m"}
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
  );
};
export default OverviewHead
