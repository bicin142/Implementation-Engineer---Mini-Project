const { Post, User, Reply } = require("../models/index");
const { getPagination, getPagingDataForPosts } = require("../helpers/pagination");

const getLatestPost = async (req, res, next) => {
  let { size, page } = req.query;

  size = size ? +size : 9;
  page = page ? +page : 1;
  try {
    const { limit, offset } = getPagination(page, size);

    let latestPostList = await Post.findAndCountAll({
      limit,
      offset,
      include: [
        {
          model: Reply,
          attributes: ["userId", "content"],
          required: false,
          limit: 1,
          order: [["createdAt", "DESC"]],
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    res.status(200).json({
      message: `Latest posts below`,
      data: getPagingDataForPosts(latestPostList,page,limit),
    });
  } catch (err) {
    next(err);
  }
};

const createPost = async (req, res, next) => {
  const { content, userId } = req.body;

  try {
    if (content.length > 100)
      throw {
        name: "BAD REQUEST",
        message: `Content of post cannot exceed 100 characters.`,
      };

    const foundUser = await User.findByPk(userId);
    if (!foundUser)
      throw {
        name: "BAD REQUEST",
        message: `Invalid userId provided. User with userId ${userId} not found`,
      };

    const username = foundUser.username;

    const newPost = await Post.create({
      userId,
      content,
    });

    const newPostObject = newPost.toJSON();

    res.status(201).json({
      message: `New post by ${username} has been created below`,
      data: { ...newPostObject, postedBy: username },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createPost,
  getLatestPost,
};
