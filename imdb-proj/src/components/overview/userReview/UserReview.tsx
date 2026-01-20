import { Box, Text, Title } from "@mantine/core";
import "./UserReview.css";
import { review } from "../../../types/types";
import { StarIcon } from "@phosphor-icons/react";

interface userReview {
  review: review;
}

const UserReview = ({ review }: userReview) => {
  const { createdAt, title, rating, username, content } = review;
  return (
    <Box className="reviewHolder">
      <Box className="starAndRating">
        <StarIcon weight="fill" color="yellow" />
        <Box className="ratingHolder">
          <Text c="yellow.4">{rating}</Text>
          <Text className="opacity-80">/10</Text>
        </Box>
      </Box>
      <Box className="mb-3">
        <Title order={4} title={title}>
          {title}
        </Title>
      </Box>
      <Box className="contentHolder">
        <Text size="xs" c="yellow.2">
          {username}
        </Text>
        <span className="mx-2">•</span>
        <Text size="xs">{createdAt.toLocaleDateString()}</Text>
      </Box>
      <Text className="content ">{content}</Text>
    </Box>
  );
};

export default UserReview;
