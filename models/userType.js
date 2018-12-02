const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserTypeSchema = new Schema({
  type: String,
  name: String,
}, {
  timestamps: true,
});

// Model
const UserTypeModel = mongoose.model('UserType', UserTypeSchema);
module.exports = {UserTypeSchema, UserTypeModel};