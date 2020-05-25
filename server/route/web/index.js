module.exports = (app) => {
  const express = require("express");
  const mongoose = require("mongoose");
  const Category = mongoose.model("Category");
  const resourceMiddleware = require("../../middleware/resource");
  const Article = mongoose.model("Article");
  const Hero = mongoose.model("Hero");
  const Hop = mongoose.model("Hop");
  const router = express.Router({
    mergeParams: true,
  });

  router.get("/news/list", async (req, res) => {
    const parent = await Category.find({
      name: { $in: ["公告", "赛事", "攻略", "社区"] },
    });
    let id1 = parent[0]._id;
    let id2 = parent[1]._id;
    let id3 = parent[2]._id;
    let id4 = parent[3]._id;
    const cats = await Category.aggregate([
      { $match: { parent: { $in: [id1, id2, id3, id4] } } },
      {
        $lookup: {
          from: "articles",
          localField: "_id",
          foreignField: "categories",
          as: "newsList",
        },
      },
      {
        $addFields: {
          newsList: { $slice: ["$newsList", 5] },
        },
      },
     
    ]);
    const subCats = cats.map((v) => v._id);
    cats.unshift({
      name: "综合",
      _id: 0,
      newsList: await Article.find()
        .where({
          categories: { $in: subCats },
        })
        .populate("categories")
        .limit(7)
        .lean(),
    });
    cats.map((cat) => {
      cat.newsList.map((news) => {
        news.categoryName =
          cat.name === "综合" ? news.categories[0].name : cat.name;
        return news;
      });
      return cat;
    });
    res.send({ parent, cats });
  });


  router.get("/rest/:resource", resourceMiddleware(), async (req, res) => {
    const queryOptions = {};
    if (req.Model.modelName === "Category") {
      queryOptions.populate = "parent";
    }
    const items = await req.Model.find().setOptions(queryOptions);
    res.send(items);
  });
  router.get("/rest/hops/:type", async (req, res) => {
    let items
    if(req.params.type === '正在进行') {
      items = await Hop.find().limit(4);
    }else if(req.params.type === '商城特惠'){
      items = await Hop.find({type: req.params.type}).limit(4);
    }else {
      items = await (await Hop.find().limit(4)).filter(item => {
        return !item.endTime
      });
    }

    res.send(items);
  });
  router.get("/heros/list", async(req, res) => {
    const parent = await Category.findOne({
      name: '英雄分类'
    })
    const cats = await Category.aggregate([
      { $match: { parent: parent._id} },
      {
        $lookup: {
          from: 'heroes',
          localField: '_id',     
          foreignField: 'categories',
          as: 'heroList'
        }
      }
    ])
    const subCats = cats.map( v => v._id )
    cats.unshift({
      name: '所有英雄',
      heroList: await Hero.find().where({
        categories: { $in: subCats }
      }).lean()
    })
    res.send(cats)
  })
  router.get("/hero/:id", async(req, res) => {
    const data = await Hero.findById(req.params.id).populate('skills categories skins').lean()
    res.send(data)
  })
  app.use("/web/api", router);
};
