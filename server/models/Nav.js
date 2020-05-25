const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  Ename: { type: String },
  url: { type: String },
  items: [{
    subName: { type: String },
    url: {type: String },
    icon: { type: String },
  }]
})

module.exports = mongoose.model('Nav', schema)




