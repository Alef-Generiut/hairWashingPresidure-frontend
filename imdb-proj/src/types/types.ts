export type user = {
  id: string;
  username: string;
  password: string;
  mail: string;
};

export type userDto = Omit<user, "id">;
export type userLogin = Omit<user, "id" | "username">;
export type signUpUser = Omit<user, "id"> & { confirmPassword: string };

export type genre = {
  id: number;
  name: string;
};

export type movie = {
  id: string;
  name: string;
  posterPhoto: string;
  bgPhoto: string;
  length: number;
  plot: string;
  releaseDate: Date;
  genres: genre[];
  avgRating: number;
};
export type MovieApiResponse = Omit<movie, "releaseDate"> & {
  releaseDate: string;
};

export type posterMovie = Omit<
  movie,
  "length" | "plot" | "releaseDate" | "genres"
>;

export type movieOptions = Omit<posterMovie, "bgPhoto">;

export type featuredChoice = Omit<movieOptions, "avgRating">;

export type review = {
  id: string;
  rating: number;
  title: string;
  content: string;
  username: string;
  createdAt: Date;
};

export type reviewDto = Omit<review, "id" | "createdAt">;

export type addReviewDto = Omit<reviewDto, "username"> & {
  movieId: string;
  userId: string;
};

export type ReviewApiResponse = Omit<review, "createdAt"> & {
  createdat: string;
};
