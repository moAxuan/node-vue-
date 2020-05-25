<template>
  <section>
    <ul>
      <li v-for="(item, index) in news" :key="index">
        <span
          @mouseenter="dupType(item._id)"
          :class="{ active: descIndex == item._id }"
          >{{ item.name }}</span
        >
      </li>
    </ul>
    <ul v-if="newsFilter[0]">
      <li
        :class="{ first: index == 0, ne: index != 0 }"
        v-for="(item, index) in newsFilter[0].newsList"
        :key="index"
        style="border-top: 1px #e0e2e2 solid;"
      >
        <span
          :class="{
            gonggao: item.categoryName == '公告',
            xinwen: item.categoryName == '新闻',
            shipin: item.categoryName == '视频',
            saishi: item.categoryName == '赛事',
            jiaoxue: item.categoryName == '教学',
            yule: item.categoryName == '娱乐',
          }"
          style="font-size:12px;"
          v-show="index != 0"
        >
          {{ item.categoryName }}
        </span>
        <a
          href=""
          @mouseenter="dupAColor(item.categoryName, index)"
          @mouseleave="$refs.AColor[index].className = ''"
          ref="AColor"
          style="border:none;"
        >
          {{ item.title }}
        </a>
        <span  v-show="index != 0" style="font-size:12px;padding:0;">
          {{item.time | data}}
        </span>
      </li>
    </ul>

    <div>
      <a href="" class="footer">
        阅读更多<span
          >最新资讯 <span><span>·-></span></span></span
        >
      </a>
    </div>
  </section>
</template>

<script>
import dayjs from 'dayjs';
export default {
  filters: {
    data(val){
      return dayjs(val).format('MM/DD')
    }
  },
  data() {
    return {
      // desc: ["公告", "赛事", "攻略", "社区"],
      news: [],
      desc: [],
      newsFilter: [],
      descIndex: 0,
    };
  },
  mounted() {
    this.dupType(0);
    this.fetch();
  },
  methods: {
    async fetch() {
      let res = await this.$http.get("news/list");
      this.news = res.data.cats;
      this.desc = res.data.parent;
      this.desc.unshift(this.news[0]);
      // console.log(this.news);
      // let res1 = this.desc.filter(v => { v.name === '综合'})
      this.newsFilter.push(this.news[0]);
    },
    dupType(index) {
      this.newsFilter = this.news.filter((v) => v._id === index);
      this.descIndex = index
    },
    dupAColor(type, index) {
      let TypeColor;
      if (!type ) {
        return;
      }
      switch (type) {
        case "公告":
          TypeColor = "gonggao";
          break;
        case "新闻":
          TypeColor = "xinwen";
          break;
        case "娱乐":
          TypeColor = "yule";
          break;
        case "视频":
          TypeColor = "shipin";
          break;
        case "赛事":
          TypeColor = "saishi";
          break;
        case "教学":
          TypeColor = "jiaoxue";
          break;
      }
      if(index === 0) {
        this.$refs.AColor[index].className = 'gonggao';
      }
      this.$refs.AColor[index].className = TypeColor;
    },
  },
};
</script>

<style scoped>
section {
  min-width: 470px;
  /* border:1px solid; */
}
section > ul:first-child {
  display: flex;
  border-bottom: 1px #e0e2e2 solid;
}
section > ul:first-child > li {
  flex: 1;
  cursor: pointer;
  min-width: 40px;
  height: 37px;
  overflow: visible;
  color: #676767;
  text-align: center;
}
section > ul > li > span {
  font-size: 18px;
  padding: 13px 6px;
}
section > ul > li > span.active {
  font-weight: 700;
  color: #1da6ba;
  border-bottom: 1px solid;
}
li::after {
  content: "";
  display: block;
  clear: both;
}
ul > li.first > a {
  display: block;
  width: 470px;
  height: 59px;
  overflow: hidden;
  line-height: 59px;
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  padding: 0 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #0da0b4;
}
ul > li.first > a.gonggao{
  color: #bb9a6c;
}
/*  */
ul > li.ne > span:last-child {
  float: right;
  margin-top: 10px;
  margin-right: 10px;
  color: #9d9d9d;
}
ul > li.ne > span:first-child {
  float: left;
  margin-top: 10px;
  padding: 2px 5px;
}
a {
  color: #424242;
}
ul > li.ne > a {
  float: left;
  width: 240px;
  height: 39px;
  line-height: 39px;
  overflow: hidden;
  margin-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
a.footer {
  display: block;
  width: 100%;
  height: 40px;
  background-color: #e3e2e2;
  line-height: 40px;
  text-align: center;
}
a.footer > span {
  color: #7ea1a6;
}
a.footer:hover > span > span {
  animation: move 1s infinite;
}

@keyframes move {
  0% {
    margin-left: 0;
  }
  50% {
    margin-left: 6px;
  }
  100% {
    margin-left: 0;
  }
}

.gonggao {
  color: #bb9a6c;
  border: 1px #c5ab86 solid;
}
.xinwen {
  color: #bb9a6c;
  border: 1px #c5ab86 solid;
}
.shipin {
  color: #e9852d;
  border: 1px #e9852d solid;
}
.saishi {
  color: #6388c5;
  border: 1px #97afc5 solid;
}
.jiaoxue {
  color: #4ba36a;
  border: 1px #4ba36a solid;
}
.yule {
  border: 1px #69c5d2 solid;
  color: #1da6ba;
}
</style>
