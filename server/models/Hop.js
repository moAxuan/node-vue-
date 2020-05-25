const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  url: { type: String },
  image: { type: String },
  des: { type: String },
  endTime: { type: Date },
  type: { type: String },
}, {
  timestamps: true
})

module.exports = mongoose.model('Hop', schema, "hops")