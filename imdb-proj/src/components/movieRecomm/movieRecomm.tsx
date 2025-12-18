import { Box, Text, Image } from "@mantine/core";
import image from "../../assets/enternal-logo.jpg";
import { StarIcon } from "@phosphor-icons/react";
import ReviewPopup from "../reviewPopup/ReviewPopup";
import "./movieRecomm.css";
import { Link } from "react-router-dom";
interface movieRecomm {
  movieId: string;
  Posterimage?: string;
  name?: string;
  avgRating?: number;
  itemsPerRow: number;
}
const MovieRecomm = ({
  Posterimage = image,
  name = "eternal sunshine of the spotless mind",
  avgRating = 8.7,
  itemsPerRow,
  movieId,
}: movieRecomm) => {
  const widthPercent = 100 / itemsPerRow - 2;
  return (
    <Box className="recommContainer" style={{ width: `${widthPercent}%` }}>
      <Box component={Link} to={`/movie/${movieId}`}>
        <Box className="imgHolder">
          <Image src={Posterimage} className="image" radius="md" fit="cover" />
        </Box>
        <Text className="recommName" mt={3} ta="start">
          {name}
        </Text>
      </Box>
      <Box className="recommText ">
        <Box className="flex items-center gap-1 text-sm">
          <StarIcon color="yellow" weight="fill" />
          <span>{avgRating}</span>
        </Box>

        <Box className="itemBox">
          <ReviewPopup />
        </Box>
      </Box>
    </Box>
  );
};

export default MovieRecomm;
