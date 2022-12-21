import jwt from 'jsonwebtoken';

const isAuth = async (req, res, next) => {
  const tokenFromClient =
    req.body.accessToken ||
    req.query.accessToken ||
    req.headers['x-access-token'];

  if (tokenFromClient) {
    try {
      const decoded = await jwt.verify(tokenFromClient, 'secret key');

      req.jwtDecoded = decoded;
      next();
    } catch (error) {
      console.log('Error while verify accessToken: ', error);

      return res.status(401).json({
        message: 'Unauthorized',
      });
    }
  } else {
    return res.status(403).send({
      message: 'No token provided.',
    });
  }
};

export default isAuth;
