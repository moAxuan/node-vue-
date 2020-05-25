const mongoose = require('mongoose')
// 新版本内容
const schema = new mongoose.Schema({
  // heroId: { type: mongoose.SchemaTypes.ObjectId, ref: 'Hero'},
  edition: { type: String },
  name: { type: String },
  icon: { type: String },
  img: { type: String },
  url: { type: String },
})

module.exports = mongoose.model('Edition', schema)