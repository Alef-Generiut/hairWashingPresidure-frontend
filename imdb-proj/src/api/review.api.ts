import axios from "axios";
import { addReviewDto, review, ReviewApiResponse } from "../types/types";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/review`,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});

const ReviewAPI = {
  get: async (movieId: string) => {
    const res = await API.get(`/${movieId}`);
    const data: ReviewApiResponse[] = res.data;
    const reviews: review[] = data.map((review: ReviewApiResponse) => ({
      ...review,
      createdAt: new Date(review.createdat),
    }));

    return reviews;
  },
  create: (review: addReviewDto) =>
    API.post("/", review).then((res) => res.data),
};

export default ReviewAPI;
