import { z } from "zod";

export const getAllResourceVal = z.object({
  page: z
    .number({
      invalid_type_error: "Page must be a number",
    })
    .optional(),
});

export const getSingleResourceVal = z.object({
  id: z.number({
    invalid_type_error: "ID must be a number",
  }),
});
