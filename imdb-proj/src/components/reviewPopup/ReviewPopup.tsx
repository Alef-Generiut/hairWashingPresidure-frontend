import { useState } from "react";
import {
  Card,
  Text,
  Rating,
  Textarea,
  Button,
  Group,
  Popover,
} from "@mantine/core";
import { PlusIcon } from "@phosphor-icons/react";
import { StarIcon } from "@phosphor-icons/react";
interface ReviewPopup {
  title?: string;
  avgRating?: number;
}
export function ReviewPopup({
  title = "eternal sunshine of the spottles mind",
  avgRating = 8.7,
}: ReviewPopup) {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  return (
    <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
      <Popover.Target>
        <StarIcon /> {avgRating}
      </Popover.Target>
      <Popover.Dropdown>
        <Card withBorder radius="md" shadow="md" className="card">
          <button onClick={() => console.log("asd")} className="closeButton">
            &times;
          </button>

          <Text size="lg" className="mb-4">
            Review '{title}'
          </Text>

          <Rating
            value={rating}
            onChange={setRating}
            count={10}
            size="lg"
            color="yellow"
            className="mb-6"
          />

          <Textarea
            placeholder="Review text"
            minRows={6}
            maxLength={500}
            value={reviewText}
            onChange={(event) => setReviewText(event.currentTarget.value)}
            classNames={{
              input: "textEreaInput",
            }}
          />

          <Text size="xs" className="mt-1 select-none">
            {reviewText.length}/500
          </Text>

          <Group mt="md">
            <Button
              color="yellow"
              radius="md"
              className="submitButton"
              disabled={rating === 0 || reviewText.trim() === ""}
              onClick={() => {
                console.log({ rating, reviewText });
              }}
            >
              <PlusIcon /> Add Review
            </Button>
          </Group>
        </Card>
      </Popover.Dropdown>
    </Popover>
  );
}
