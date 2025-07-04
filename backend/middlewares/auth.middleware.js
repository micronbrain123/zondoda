const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || '74a1f2685ea590aef29d11477a46e96cc58f112ed1dc4a49a121d4be6d6c9392cdd9318d';

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid Token' });
  }
};

module.exports = verifyToken;
