import jwt from 'jsonwebtoken';

const isProduction = process.env.NODE_ENV === 'production';
const generateToken = (res, userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: isProduction,      // ✅ Only true in production
    sameSite: isProduction ? 'strict' : 'lax', // ✅ allow dev cookies cross-origin
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
};

export default generateToken;
