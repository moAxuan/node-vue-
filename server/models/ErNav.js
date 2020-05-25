const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  parentId: { type: mongoose.Schema.ObjectId, ref: 'nav'},
  title : {
    type: String,
    require: [true, '请填写一级导航名称']
  },
  type: {type: String}
})

// 3.根据规则创建集合
module.exports = mongoose.model('ErNav', schema);

