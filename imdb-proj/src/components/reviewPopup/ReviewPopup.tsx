import { useEffect, useState } from "react";
import {
  Card,
  Text,
  Rating,
  Textarea,
  Button,
  Popover,
  Box,
  Flex,
} from "@mantine/core";
import { PlusIcon } from "@phosphor-icons/react";
import { StarIcon } from "@phosphor-icons/react";
import { addReviewDto } from "../../types/types";
import ReviewAPI from "../../api/review.api";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface reviewPopup {
  title: string;
  movieId: string;
}

const ReviewPopup = ({
  title = "eternal sunshine of the spottles mind",
  movieId,
}: reviewPopup) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviewTitle, setReviewTitle] = useState("");
  const [IsOpend, setIsOpend] = useState(false);
  const [userReview, setUserReview] = useState<number | null>(null);
  const { userId } = useSelector((state: RootState) => state.auth);

  const resetComment = () => {
    setIsOpend(false);
    setRating(0);
    setReviewTitle("");
    setReviewText("");
  };

  useEffect(() => resetComment, [movieId]);
  useEffect(() => {
    if (userId) {
      ReviewAPI.getByIds(userId, movieId)
        .then((res) => setUserReview(res.rating))
        .catch(console.error);
    }
  }, [movieId, userId]);
  const handleSubmit = async () => {
    if (rating === 0 || reviewText.trim() === "") return;
    if (!movieId) return;

    if (!userId) throw console.error("user not connected");

    const reviewToAdd: addReviewDto = {
      rating,
      title: reviewTitle,
      content: reviewText,
      userId: userId,
      movieId,
    };

    try {
      await ReviewAPI.create(reviewToAdd);
      setUserReview(reviewToAdd.rating);
      resetComment();
    } catch (err) {
      console.error(err);
    }
  };

  return userReview !== null ? (
    <Box className="flex row-auto text-sm space-x-2">
      <StarIcon className="mt-1.5" size={15} color="#ffff00" weight="fill" />
      <Text>{userReview}</Text>
    </Box>
  ) : (
    <Popover
      width={450}
      trapFocus
      position="bottom"
      withArrow
      shadow="md"
      opened={IsOpend}
      onClose={() => setIsOpend(false)}
    >
      <Popover.Target>
        <button
          className="flex row-auto text-sm"
          onClick={() => setIsOpend((o) => !o)}
        >
          <StarIcon className="mt-[0.5vh]" size={13} />
          <Text fz="xs" ml={3}>
            Rate
          </Text>
        </button>
      </Popover.Target>
      <Popover.Dropdown>
        <Card className="card" withBorder={false} px={0}>
          <Flex justify="start" w="100%" className="space-x-[1.5vw]">
            <Box>
              <button
                id="closer"
                className="closeButton"
                onClick={() => setIsOpend(false)}
              >
                &times;
              </button>
            </Box>
            <Box w="92%">
              <Text size="lg" className="truncate" w="75%">
                Review '{title}'
              </Text>

              <Rating
                value={rating}
                onChange={setRating}
                count={10}
                size="lg"
                color="yellow.5"
                className="mt-1 mb-4"
              />
              <Textarea
                placeholder="Title text"
                minRows={2}
                maxLength={50}
                pb={7}
                value={reviewTitle}
                onChange={(event) => setReviewTitle(event.currentTarget.value)}
                autosize
                classNames={{
                  input: "textEreaInput",
                }}
              />
              <Textarea
                placeholder="Review text"
                minRows={6}
                maxLength={500}
                value={reviewText}
                onChange={(event) => setReviewText(event.currentTarget.value)}
                autosize
                classNames={{
                  input: "textEreaInput",
                }}
              />
              <Text
                fz={10}
                ta="right"
                className="mt-1 select-none"
                pr={3}
                mt={5}
              >
                {reviewText.length}/500
              </Text>
              <Flex mt="md" justify="end">
                <Button
                  color={
                    rating === 0 || reviewText.trim() === ""
                      ? "gray.7"
                      : "yellow.4"
                  }
                  c="black"
                  radius="md"
                  onClick={() => handleSubmit()}
                >
                  Add Review
                  <PlusIcon className="ml-[0.5vw]" />
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Card>
      </Popover.Dropdown>
    </Popover>
  );
};

export default ReviewPopup;
