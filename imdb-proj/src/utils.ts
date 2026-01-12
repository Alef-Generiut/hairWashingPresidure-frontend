import z from "zod";

import { EMAIL_REGEX, NOT_FOUND_NUMBER } from "./constants/constants";

export const formatMovieLength = (minutes?: number) => {
    if (!minutes) return NOT_FOUND_NUMBER;

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${hours}h ${remainingMinutes}m`;
  };

  export const userScheme = z
    .object({
      username: z.string(),
      mail: z.email({ pattern: EMAIL_REGEX }),
      password: z.string(),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });