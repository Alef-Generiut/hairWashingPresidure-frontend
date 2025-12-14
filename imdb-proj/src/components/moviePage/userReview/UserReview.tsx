import { Box, Text } from "@mantine/core";
import "./UserReview.css";
import { movieReview } from "../../../types/types";
import { StarIcon } from "@phosphor-icons/react";

interface userReview {
  review: movieReview;
}

const UserReview = ({ review }: userReview) => {
  return (
    <Box className="reviewHolder">
      <Box className="starAndRating">
        <StarIcon weight="fill" color="yellow" />
        <Box className="ratingHolder">
          <Text c="#ffe066">{review.rating}</Text>
          <Text className="opacity-80">/10</Text>
        </Box>
      </Box>
      <Box className="mb-3">
        <Text className="reviewTitle" title={review.title}>
          {review.title}
        </Text>
      </Box>
      <Box className="contentHolder">
        <Text className="username">{review.username}</Text>
        <span className="mx-2">•</span>
        <Text className="time">{review.createdAt.toLocaleDateString()}</Text>
      </Box>
      <Text
        className="content"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical",
        }}
      >
        {review.content}
      </Text>
    </Box>
  );
};

export default UserReview;
