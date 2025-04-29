import jwt from 'jsonwebtoken';

/**
 * Generates a JWT token for a user
 * @param {String} userId - The unique user identifier
 * @returns {String} - Signed JWT token
 */
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '30d', // Token valid for 30 days
  });
};

export default generateToken;
