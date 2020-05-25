const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  icon: { type: String},
  teamTips: { type: String}, //小提示
  introduce: { type: String},//介绍
}, )

module.exports = mongoose.model('Skill', schema)