import sanitize from "sanitize-html";
const sanitizeObject = async (obj) => {
  if (typeof obj !== "object") {
    return false;
  }
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      obj[key] = await sanitizeArray(obj[key]);
    } else if (typeof obj[key] === "object") {
      obj[key] = await sanitizeObject(obj[key]);
    } else {
      obj[key] = await sanitizeString(obj[key]);
      if (key === "email") {
        const check = await _sys.validate.email(obj[key]);
        if (check === false) {
          throw new Error("Invalid Email");
        }
      }
    }
  }
  return obj;
};

const sanitizeArray = async (array) => {
  if (!Array.isArray(array)) {
    return false;
  }
  let newArray = await Promise.all(
    array.map(async (item) => {
      if (typeof item === "string") {
        return await sanitizeString(item);
      } else if (typeof item === "object") {
        return await sanitizeObject(item);
      } else {
        return item;
      }
    })
  );
  return newArray;
};

const sanitizeString = async (string) => {
  if (typeof string !== "string") {
    return false;
  }
  let sanitizedString = String(sanitize(string));
  if (sanitizedString === "") {
    throw new Error("Invalid data type");
  }
  return sanitizedString;
};
export { sanitizeString, sanitizeArray, sanitizeObject };
