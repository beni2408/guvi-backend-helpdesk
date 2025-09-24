export const authorizeRoles = (...roles) => {
  // returning a middleware function
  // ! roles is an array of roles which will be accessible from closure
  return (req, res, next) => {
    const role = req.user.role;

    console.log("User role:", role, roles.includes(role));
    console.log("Allowed roles:", roles);
    if (!roles.includes(role)) {
      return res.status(401).json({
        status: "failed",
        message: "Unauthorized - You don't have permission to create a service",
      });
    }
    next();
  };
};
