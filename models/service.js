const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
  slug: String,
  name: String,
}, {
  timestamps: true,
});

// Model
const ServiceModel = mongoose.model('Service', ServiceSchema);
module.exports = {ServiceSchema, ServiceModel};