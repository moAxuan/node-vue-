const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String },
  title: { type: String }, //称号
  icon: { type: String },
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Category" }],
  scores: {
    ad: { type: Number },
    ap: { type: Number },
    tc: { type: Number }, //防御
    difficulty: { type: Number },
  },
  skills: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Skill",
    },
  ],
  skins: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Skin",
    },
  ],
  usageTips: [
    {
      tips: { type: String },
    },
  ],
  battleTips: [
    {
      tips: { type: String },
    },
  ],
  backTips: { type: String },
  // partners: [{
  //   hero: { type: mongoose.SchemaTypes.ObjectId, ref: 'Hero' },
  //   description: { type: String },
  // }],
});
module.exports = mongoose.model("Hero", schema, "heroes");
