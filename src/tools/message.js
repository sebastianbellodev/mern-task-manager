export const send = (res, code, info) => {
  return res.status(code).json({ info });
};

export const RESPONSE_CODE = {
  OK: 200,
  CREATED: 201,
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
  PASSWORD_REQUIRED: "Password required",
  USERNAME_OVERFLOW: "Username must have less than 30 characters",
  PASSWORD_OVERFLOW: "Password must have less than 20 characters",
  PASSWORD_UNDERFLOW: "Password must have at least 8 characters",

  UNSUCCESSFUL_LOGIN: "Incorrect username or pasword",

  SUCCESSFUL_LOGOUT: "Come back soon",

  DUPLICATED: "Information duplicated",
  NOT_FOUND: "Information not found",
  DELETE: "Deleted successfully",
  POST: "Posted successfully",
  PUT: "Updated successfully",
};
