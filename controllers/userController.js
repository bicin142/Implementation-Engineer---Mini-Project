const { User } = require("../models/index");
const generateUniqueUsername = require("../helpers/usernameGenerator");

const createNewUser = async (req, res, next) => {

  try {

      const uniqueUsername = await generateUniqueUsername(10);
      const createdUser = await User.create({ username: uniqueUsername });

    res.status(201).json({
      message: `New username ${createdUser.username} has been created`,
      data: createdUser,
    });
  } catch (err) {
    next(err);
  }
};

const getUserById = async (req, res, next) => {
  const {userId} = req.params;
  
  try {
    if (isNaN(userId)) throw { name: "BAD REQUEST", message: `Invalid id` };
    const foundUser = await User.findByPk(userId);

    if (!foundUser)
      throw {
        name: "NOT FOUND",
        message: `User with userId ${userId} not found`,
      };

    res.status(200).json({
      message: `User with userId ${userId} found below`,
      data: foundUser,
    });
  } catch (err) {
    next(err);
  }
};

const getUsers = async (req, res, next) => {

  try {
    const foundUsers = await User.findAll();
    res.status(200).json({
      message: `All users listed below`,
      data: foundUsers,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createNewUser,
  getUserById,
  getUsers,
};
