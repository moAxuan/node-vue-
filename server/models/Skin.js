const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  // heroId: { type: mongoose.SchemaTypes.ObjectId, ref: 'Hero'},
  name: { type: String },
  icon: { type: String },
  img: { type: String },
  money: { type: Number },
})

module.exports = mongoose.model('Skin', schema)