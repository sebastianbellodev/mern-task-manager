import { z } from "zod";
import { RESPONSE_MESSAGE } from "../tools/message.js";

export const taskSchema = z.object({
  title: z
    .string({
      required_error: RESPONSE_MESSAGE.TITLE_REQUIRED,
    })
    .max(50, {
      message: RESPONSE_MESSAGE.TITLE_OVERFLOW,
    }),
  description: z
    .string({
      required_error: RESPONSE_MESSAGE.DESCRIPTION_REQUIRED,
    })
    .max(100, {
      message: RESPONSE_MESSAGE.DESCRIPTION_OVERFLOW,
    }),
  date: z.string().datetime().optional(),
});
