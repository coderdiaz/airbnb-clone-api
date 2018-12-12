const jwt = require('jsonwebtoken');

/**
 * Middleware to know if the token is valid and authorized
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const isAuthenticated = (req, res, next) => {
  const {body, query, headers} = req;
  const token = body.token || query.token || headers['authorization'];
  if (token) {
    return jwt.verify(token, process.env.JWT_SECRETKEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          code: 401,
          message: 'Unauthorized',
        });
      }
      next();
    });
  }
  return res.status(403).json({
    code: 403,
    message: 'No token provided',
  });
};

module.exports = isAuthenticated;