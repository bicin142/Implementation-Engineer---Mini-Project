const { Post, User, Reply } = require("../models/index");
const {
  getPagination,
  getPagingDataForReplies,
} = require("../helpers/pagination");

const getRepliesToPost = async (req, res, next) => {
  const { postId } = req.params;
  let { size, page } = req.query;

  size = size ? +size : 9;
  page = page ? +page : 1;

  try {
    const foundPost = await Post.findByPk(postId);
    if (!foundPost)
      throw {
        name: "BAD REQUEST",
        message: `Invalid postId provided. Post with postId ${postId} not found`,
      };

    const { limit, offset } = getPagination(page, size);

    let repliesToPostList = await Reply.findAndCountAll({
      limit,
      offset,
      where: { postId },
      order: [["createdAt", "DESC"]],
      attributes: ["id", "content", "createdAt"],
      include: [
        {
          model: User,
          attributes: ["id", "username"],
        },
      ],
    });

    res.status(200).json({
      message: `Replies to postId ${postId} below.`,
      data: getPagingDataForReplies(repliesToPostList, page, limit),
    });
  } catch (err) {
    next(err);
  }
};

const createNewReplyToPost = async (req, res, next) => {
  const { content, userId } = req.body;
  const { postId } = req.params;

  try {
    if (content.length > 100)
      throw {
        name: "BAD REQUEST",
        message: `Content of reply cannot exceed 100 characters.`,
      };

    const foundUser = await User.findByPk(userId);
    if (!foundUser)
      throw {
        name: "NOT FOUND",
        message: `Invalid userId provided. User with userId ${userId} not found`,
      };

    const username = foundUser.username;

    const foundPost = await Post.findByPk(postId);
    if (!foundPost)
      throw {
        name: "BAD REQUEST",
        message: `Invalid postId provided. Post with postId ${postId} not found`,
      };

    const newReply = await Reply.create({
      userId,
      content,
      postId,
    });

    const newReplyObject = newReply.toJSON();

    res.status(201).json({
      message: `New reply by ${username} to post ${postId} has been created below`,
      data: { ...newReplyObject, repliedBy: username },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getRepliesToPost,
  createNewReplyToPost,
};
