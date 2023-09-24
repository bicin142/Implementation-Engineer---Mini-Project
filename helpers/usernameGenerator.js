
const { User } = require("../models/index");

function generateRandomUsername(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let username = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      username += characters.charAt(randomIndex);
    }
  
    return username;
  }

  async function generateUniqueUsername(length) {
    const newUsername = generateRandomUsername(length);
    const existingUser = await User.findOne({ where: { username: newUsername } });
  
    if (existingUser) {
      return generateUniqueUsername(length);
    }
    return newUsername;
  }

module.exports = generateUniqueUsername;
