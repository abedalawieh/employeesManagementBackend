import validator from "validator";
const emailValidator = async (email) => {
  if (typeof email !== "string") {
    return false;
  }
  if (!validator.isEmail(email)) {
    return false;
  }
  return true;
};

export { emailValidator };
