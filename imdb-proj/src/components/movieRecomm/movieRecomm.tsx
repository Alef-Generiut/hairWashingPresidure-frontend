import { Box, Text, Image } from "@mantine/core";
import image from "../../assets/enternal-logo.jpg";
import { StarIcon } from "@phosphor-icons/react";
import ReviewPopup from "../reviewPopup/ReviewPopup";
import "./movieRecomm.css";
import { Link } from "react-router-dom";
import { movieOptions } from "../../types/types";
interface movieRecomm {
  movie: movieOptions;
}
const MovieRecomm = ({ movie }: movieRecomm) => {
  return (
    <Box className="recommContainer">
      <Box component={Link} to={`/movie/${movie.id}`}>
        <Box className="imgHolder">
          <Image src={image} className="image" radius="md" fit="cover" />
        </Box>
        <Text className="recommName" mt={3} ta="start">
          {movie.name}
        </Text>
      </Box>
      <Box className="recommText ">
        <Box className="avgRatingIcon">
          <StarIcon color="yellow" weight="fill" />
          <span>{movie.avgRating}</span>
        </Box>
        <Box className="itemBox">
          <ReviewPopup movieId={movie.id} title={movie.name} />
        </Box>
      </Box>
    </Box>
  );
};

export default MovieRecomm;
