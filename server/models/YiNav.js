const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String,
  },
  name: {
    type: String,
  }
})

// 3.根据规则创建集合
module.exports = mongoose.model('YiNav', schema)

