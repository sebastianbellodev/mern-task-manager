import { z } from "zod";
import { RESPONSE_MESSAGE } from "../../tools/message.js";

export const loginObject = z.object({
  username: z
    .string({
      required_error: RESPONSE_MESSAGE.USERNAME_REQUIRED,
    })
    .max(30, {
      message: RESPONSE_MESSAGE.USERNAME_OVERFLOW,
    }),
  password: z
    .string({
      required_error: RESPONSE_MESSAGE.PASSWORD_REQUIRED,
    })
    .min(8, {
      message: RESPONSE_MESSAGE.PASSWORD_UNDERFLOW,
    })
    .max(20, {
      message: RESPONSE_MESSAGE.USERNAME_OVERFLOW,
    }),
});
