const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
  const token = req.headers.token;
  let result;

  if (token) {
    const token = req.headers.token;
    const options = { expiresIn: process.env.JWT_EXPIRES_IN };

    try {
      // verify makes sure that the token hasn't expired and has been issued by us
      result = jwt.verify(token, process.env.JWT_SECRET, options);
      // Let's pass back the decoded token to the request object
      req.decoded = result;
      // We call next to pass execution to the subsequent middleware
      next();
    } catch (err) {
      result = {
        message: `Authentication error. Token required.`,
        error: err,
        status: 401,
        serverTime: new Date(),
      };
      res.status(401).send(result);
    }
  } else {
    result = {
      error: `Authentication error. Token required.`,
      status: 401
    };
    res.status(401).send(result);
  }
}

module.exports = validateToken;