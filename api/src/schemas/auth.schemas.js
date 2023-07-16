import { z } from "zod";
import { RESPONSE_MESSAGE } from "../tools/message.js";

export const signupSchema = z.object({
  username: z
    .string({
      required_error: RESPONSE_MESSAGE.USERNAME_REQUIRED,
    })
    .max(30, {
      message: RESPONSE_MESSAGE.USERNAME_OVERFLOW,
    }),
  email: z
    .string({
      required_error: RESPONSE_MESSAGE.EMAIL_REQUIRED,
    })
    .email({
      message: RESPONSE_MESSAGE.EMAIL_NOT_VALID,
    })
    .max(40, {
      message: RESPONSE_MESSAGE.EMAIL_OVERFLOW,
    }),
  password: z
    .string({
      required_error: RESPONSE_MESSAGE.PASSWORD_REQUIRED,
    })
    .min(8, {
      message: RESPONSE_MESSAGE.PASSWORD_UNDERFLOW,
    })
    .max(30, {
      message: RESPONSE_MESSAGE.USERNAME_OVERFLOW,
    }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: RESPONSE_MESSAGE.EMAIL_REQUIRED,
    })
    .email({
      message: RESPONSE_MESSAGE.EMAIL_NOT_VALID,
    })
    .max(40, {
      message: RESPONSE_MESSAGE.EMAIL_OVERFLOW,
    }),
  password: z
    .string({
      required_error: RESPONSE_MESSAGE.PASSWORD_REQUIRED,
    })
    .min(8, {
      message: RESPONSE_MESSAGE.PASSWORD_UNDERFLOW,
    })
    .max(30, {
      message: RESPONSE_MESSAGE.USERNAME_OVERFLOW,
    }),
});
