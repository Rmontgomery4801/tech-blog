const Post = require("./Post");
const User = require("./User");
const Comment = require("./Comment");

// create associations
//a user has many posts
User.hasMany(Post, {
  foreignKey: "user_id",
});

//a post belongs to a single user
Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

// a comment belongs to a user
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

// a comment belongs to a post
Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "SET NULL",
});

//a user can have many comments
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

// a post can have many comments
Post.hasMany(Comment, {
  foreignKey: "post_id",
});

module.exports = { User, Post, Comment };
