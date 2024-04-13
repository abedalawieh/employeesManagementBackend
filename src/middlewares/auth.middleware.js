const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return _sys.utils.response1.unauthorized(
        res,
        "Your session is not valid, you must be logged in!"
      );
    }

    const token = authHeader.split(" ")[1];

    _sys.jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return _sys.utils.response1.forbidden(
          res,
          "Your session has expired, please login again"
        );
      }
      req.user = decoded;
      next();
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export default verifyToken;
