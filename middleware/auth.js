const { UnauthError } = require("../errors");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthError("Not authorized to access this part of the site");
  }

  const token = authHeader.split(" ")[1];

  try {
      const payload = jwt.verify(token, process.env.JWT_SECRET)
      const { id, username } = decoded
      req.user = {userID: payload.userID, name:payload.name }
      next();
  } catch (err) {
      throw new UnauthError("Authorization invalid")
  }
};

module.exports = authMiddleware