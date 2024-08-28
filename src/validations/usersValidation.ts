import { z } from "zod";

export const getAllUserVal = z.object({
  page: z
    .number({
      invalid_type_error: "Page must be a number",
    })
    .optional(),
});

export const getSingleUserVal = z.object({
  id: z.number({
    invalid_type_error: "ID must be a number",
  }),
});
