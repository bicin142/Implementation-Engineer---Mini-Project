"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Post, {foreignKey: "userId"})
      User.hasMany(models.Reply, {foreignKey: "userId"})
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
