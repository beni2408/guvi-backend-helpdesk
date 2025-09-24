const errorHandler = (err, req, res, next) => {
  console.error("🔥 Error caught:", err);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
    status: "failed",
  });
};

export default errorHandler;
