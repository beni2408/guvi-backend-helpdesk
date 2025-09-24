import jwt from "jsonwebtoken";
const protect = (req, res, next) => {
  const authString = req.headers.authorization;

  if (!authString || !authString.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Unauthorized",
      status: "failed",
    });
  }

  const token = authString.split(" ")[1];

  const userData = jwt.verify(token, process.env.JWT_AUTH_SECRET_KEY);
  req.user = userData;
  next();
};

export default protect;
