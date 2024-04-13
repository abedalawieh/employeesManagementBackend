import { login } from "../services/admin.service.js";
const requiredMessage = "All fields are required";
const successLoginMessage = "Logged In ";
export const loginOp = async (req, res, next) => {
  try {
    if (!req.body.email || !req.body.password) {
      return _sys.utils.response1.clientError(res, requiredMessage);
    }
    const password = await _sys.sanitize.string(req.body.password);
    const email = await _sys.sanitize.string(req.body.email);
    const result = await login(email, password);
    return _sys.utils.response1.success(res, successLoginMessage, result);
  } catch (error) {
    return _sys.utils.response1.clientError(res, error.message);
  }
};
