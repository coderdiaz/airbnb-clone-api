const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ServiceSchema} = require('./service');

const HouseSchema = new Schema({
  userId: String,
  description: String,
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
  },
  meta: {
    guests: Number,
    bedrooms: Number,
    beds: Number,
    baths: Number,
    likes: Number,
  },
  services: [ServiceSchema],
}, {
  timestamps: true,
});

// Model
const HouseModel = mongoose.model('House', HouseSchema);
module.exports = {HouseSchema, HouseModel};