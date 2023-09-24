"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.User, { foreignKey: "userId" });
      Post.hasMany(models.Reply, { foreignKey: "postId" });
    }
  }
  Post.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "Users", key: "id" },
        onUpdate: "cascade",
        onDelete: "cascade",
        validate: {
          notEmpty: { args: true, msg: "Post must be attributed to user." },
          notNull: { args: true, msg: "Post must be attributed to user." },
        },
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "Post must have content." },
          notNull: { args: true, msg: "Post must have content." },
        },
      },
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
