export const send = (res, code, info = null) => {
  if (info === null) {
    return res.status(code);
  }
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
  FORBIDDEN: "Forbidden resource",
  INTERNAL_SERVER_ERROR: "Something went wrong",
  UNAUTHORIZED: "User unauthorized",
  URL_NOT_FOUND: "URL not found",

  USERNAME_REQUIRED: "Username required",
  PASSWORD_REQUIRED: "Password required",
  USERNAME_OVERFLOW: "Username must have less than 30 characters",
  PASSWORD_OVERFLOW: "Password must have less than 20 characters",
  PASSWORD_UNDERFLOW: "Password must have at least 8 characters",

  USER_ALREADY_REGISTERED: "User already registered in the system",
  USER_NOT_FOUND: "User not found",
  USER_DELETE: "User deleted successfully",
  USER_POST: "User posted successfully",
  USER_PUT: "User updated successfully",
};
