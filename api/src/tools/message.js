export const RESPONSE_CODE = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  ALREADY_DATA: 456,
  INTERNAL_SERVER_ERROR: 500,
};

export const RESPONSE_MESSAGE = {
  UNAUTHORIZED: "Unauthorized resource",
  FORBIDDEN: "Forbidden resource",
  INTERNAL_SERVER_ERROR: "Something went wrong",
  URL_NOT_FOUND: "URL not found",

  USERNAME_REQUIRED: "Username required",
  EMAIL_REQUIRED: "Email required",
  PASSWORD_REQUIRED: "Password required",

  USERNAME_OVERFLOW: "Username must have less than 30 characters",
  EMAIL_OVERFLOW: "Email must have less than 40 characters",
  PASSWORD_OVERFLOW: "Password must have less than 30 characters",
  PASSWORD_UNDERFLOW: "Password must have at least 8 characters",

  TITLE_REQUIRED: "Title required",
  DESCRIPTION_REQUIRED: "Description required",
  DATE_REQUIRED: "Date required",

  TITLE_OVERFLOW: "Title must have less than 50 characters",
  DESCRIPTION_OVERFLOW: "Description must have less than 100 characters",
  DATE_OVERFLOW: "Date must have less than 20 characters",

  UNSUCCESSFUL_LOGIN: "Incorrect username or pasword",

  SUCCESSFUL_LOGOUT: "Come back soon",

  USER_DUPLICATED: "Email not available",
  USER_NOT_FOUND: "User not found",

  TASK_NOT_FOUND: "Task not found",
};
