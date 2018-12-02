const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  houseId: String,
  userId: String,
  content: String,
}, {
  timestamps: true,
});

// Model
const CommentModel = mongoose.model('Comment', CommentSchema);
module.exports = {CommentSchema, CommentModel};