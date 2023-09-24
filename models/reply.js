"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {
    static associate(models) {
      Reply.belongsTo(models.User, {foreignKey: "userId"})
      Reply.belongsTo(models.Post, {foreignKey: "postId"})
    }
  }
  Reply.init(
    {
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "Posts", key: "id" },
        onUpdate: "cascade",
        onDelete: "cascade",
        validate: {
          notEmpty: { args: true, msg: "Reply must be attributed to post." },
          notNull: { args: true, msg: "Reply must be attributed to post." },
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "Users", key: "id" },
        onUpdate: "cascade",
        onDelete: "cascade",
        validate: {
          notEmpty: { args: true, msg: "Reply must be attributed to user." },
          notNull: { args: true, msg: "Reply must be attributed to user." },
        },
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "Reply must have content." },
          notNull: { args: true, msg: "Reply must have content." },
        },
      },
    },
    {
      sequelize,
      modelName: "Reply",
    }
  );
  return Reply;
};
