const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
     title: String,
     message: String,
     creator: String,
     tags: [String],
     image: String,
     likes: {
          type: Number,
          default: 0
     }
}, { timestamp: true });

const Post = mongoose.model("post", postSchema);

module.exports = Post;