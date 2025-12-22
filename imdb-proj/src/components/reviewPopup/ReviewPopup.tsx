import { useState } from "react";
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

interface reviewPopup {
  title?: string;
}

const ReviewPopup = ({
  title = "eternal sunshine of the spottles mind",
}: reviewPopup) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviewTitle, setReviewTitle] = useState("");

  const [IsOpend, setIsOpend] = useState(false);

  const handleSubmit = () => {
    if (rating === 0 || reviewText.trim() === "") return;

    setIsOpend((opend) => !opend);
  };

  return (
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
          <Flex justify="center" className="space-x-[1.5vw]">
            <Box>
              <button
                id="closer"
                className="closeButton"
                onClick={() => setIsOpend(false)}
              >
                &times;
              </button>
            </Box>
            <Box>
              <Text size="lg" className="truncate" w="75%">
                Review '{title}'
              </Text>

              <Rating
                value={rating}
                onChange={setRating}
                count={10}
                size="md"
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
