import { Box, Text } from "@mantine/core";
import "./UserReview.css";
import { movieReview } from "../../../types/types";
import { StarIcon } from "@phosphor-icons/react";

interface userReview {
  review: movieReview;
}

const UserReview = ({ review }: userReview) => {
  return (
    <Box className="rounded-2xl bg-white/5 p-6 shadow-lg shadow-black/40 text-left">
      {/* Rating */}
      <Box className="mb-3 flex items-center gap-2">
        <StarIcon weight="fill" color="yellow"/>
        <Box className="flex items-baseline font-semibold ">
          <Text c="#ffe066">{review.rating}</Text>
          <Text className="opacity-80">/10</Text>
        </Box>
      </Box>

      {/* Headline */}
      <Box className="mb-3">
        <Text
          className="text-lg font-semibold leading-snug  truncate"
          title={review.title}
        >
          {review.title}
        </Text>
      </Box>

      {/* User + date */}
      <Box className="mb-4 flex items-center text-xs ">
        <Text
          className="text-amber-300 truncate max-w-[140px]"
        >
          {review.username}
        </Text>
        <span className="mx-2">•</span>
        <Text className="truncate max-w-[120px]">
          {review.createdAt.toLocaleDateString()}
        </Text>
      </Box>

      {/* Content */}
      <Text
        className="text-sm leading-relaxed text-gray-300 overflow-hidden text-ellipsis"
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
