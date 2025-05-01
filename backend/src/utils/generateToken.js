import jwt from 'jsonwebtoken';

const isProduction = process.env.NODE_ENV === 'production';

const generateToken = (res, userId) => {
  if (!process.env.JWT_SECRET) {
    throw new Error('❌ JWT_SECRET is missing from environment variables');
  }

  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: isProduction,                      // 🔐 Set to true only in HTTPS production
    sameSite: isProduction ? 'strict' : 'lax', // 🔄 Allow localhost testing via lax
    maxAge: 7 * 24 * 60 * 60 * 1000,           // ⏳ 7 days (adjustable)
  });
};

export default generateToken;
