import { z } from "zod";

const delayValidation = z.object({
  delay: z
    .number({
      invalid_type_error: "Delay must be a number",
    })
    .optional(),
});

export default delayValidation;
