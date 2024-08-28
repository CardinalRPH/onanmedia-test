import { z } from "zod";

export const registerVal = z.object({
  email: z.string({
    required_error: 'Missing email or username"',
    invalid_type_error: "email must String",
  }),
  password: z.string({
    required_error: "Missing password",
    invalid_type_error: "password must String",
  }),
});

export const loginVal = z.object({
  email: z.string({
    required_error: 'Missing email or username"',
    invalid_type_error: "email must String",
  }),
  password: z.string({
    required_error: "Missing password",
    invalid_type_error: "password must String",
  }),
});
