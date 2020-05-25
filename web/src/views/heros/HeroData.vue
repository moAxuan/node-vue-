<template>
  <div id="container">
    <index-header></index-header>
    <!-- 面包屑 -->
    <div class="mianbao">
      <ul>
        <li><a href="">英雄联盟首页</a></li>
        <li>></li>
        <li><a href="#/data/info-heros">游戏资料</a></li>
        <li>></li>
        <li><a href="#/data/info-heros">全部英雄</a></li>
        <li>></li>
        <li style="color:#000;">{{ hero.title }} {{ hero.name }}</li>
      </ul>
    </div>
    <!-- 角色展示 -->
    <div class="hero">
      <!-- 数据展示 -->
      <div class="data">
        <h2 style="font-size:25px;">{{ hero.title }}</h2>
        <h1 style="font-size:40px;">{{ hero.name }}</h1>
        <div>
          <span v-for="(item, index) in hero.categories" :key="index">
            {{ item.name }}
          </span>
        </div>
        <dl v-if="hero.scores">
          <dt>
            物理攻击力
          </dt>
          <dd>
            <i>
              <span
                :style="{ width: `${(hero.scores.ad + 1) * 10}%` }"
                style="background:#f2c500;"
              ></span>
            </i>
          </dd>
          <dt>
            魔法攻击力
          </dt>
          <dd>
            <i>
              <span
                :style="{ width: `${(hero.scores.ap + 1) * 10}%` }"
                style="background:#f59d00;"
              ></span>
            </i>
          </dd>
          <dt>
            防御力
          </dt>
          <dd>
            <i>
              <span
                :style="{ width: `${(hero.scores.tc + 1) * 10}%` }"
                style="background:#2c97de;"
              ></span>
            </i>
          </dd>
          <dt>
            上手难度
          </dt>
          <dd>
            <i>
              <span
                :style="{ width: `${(hero.scores.difficulty + 1) * 10}%` }"
                style="background:#1eca6b;"
              ></span>
            </i>
          </dd>
        </dl>
      </div>

      <!-- 左边图层 -->
      <span></span>
      <!-- 图片轮播 -->
      <div class="swiper">
        <ul v-if="hero.skins" ref="swiper">
          <li v-for="(item, index) in hero.skins" :key="index">
            <img :src="item.img" alt="" class="bigImg" />
          </li>
        </ul>
        <div class="icon" v-if="hero.skins">
          <span>{{ hero.skins[heroIndex].name }}</span>
          <ul>
            <li
              v-for="(item, index) in hero.skins"
              :key="index"
              :class="{ active: heroIndex === index }"
              @click="changeSkin(index)"
            >
              <img :src="item.icon" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 使用技巧 -->
    <article>
      <section>
        <h4>背景故事</h4>
        <div class="bgG">
          <div :class="{ show: show === '查看更多' }">
            {{ hero.backTips }}
          </div>
          <a
            href="javascript:;"
            @click="show === '查看更多' ? (show = '收起') : (show = '查看更多')"
            >{{ show }}</a
          >
        </div>
        <h4>技能介绍</h4>
        <ul class="skills" v-if="hero.skills">
          <li
            v-for="(item, index) in hero.skills"
            :key="index"
            :class="{ active: index === skillIndex }"
            @click="skillIndex = index"
          >
            <img :src="item.icon" alt="" />
          </li>
        </ul>
        <div class="bgG" style="margin-top:-3px;">
          <div v-if="hero.skills">
            <div class="title" >
              <h5>{{ hero.skills[skillIndex].name }}</h5>
              <em>{{ hero.skills[skillIndex].teamTips }}</em>
            </div>
            <p>
              {{ hero.skills[skillIndex].introduce }}
            </p>
          </div>
        </div>
        <h4>使用技巧</h4>
        <div class="bgG">
          <div>
            <h3>当你使用黑暗之女</h3>
            <ul>
              <li v-for="(item, index) in hero.usageTips" :key="index">
                {{ item.tips }}
              </li>
            </ul>
          </div>
          <div>
            <h3>敌人使用黑暗之女</h3>
            <ul>
              <li v-for="(item, index) in hero.battleTips" :key="index">
                {{ item.tips }}
              </li>
            </ul>
          </div>
        </div>
      </section>
      <aside style="margin-left:20px;">
        <h4>我的记录</h4>
        <div class="bgG">
          <div style="width:80%;padding-left:10px;">
            <p >您无法查看使用该英雄的记录，请<a href="" style="color: #00a483;font-size:12px;padding:0;">[登陆]</a>，并绑定所在大区。</p>
          </div>
        </div>
      </aside>
    </article>

    <index-footer></index-footer>
  </div>
</template>

<script>
import indexHeader from "../header/IndexHeader";
import indexFooter from "../footer/indexFooter";
export default {
  props: ["id"],
  components: {
    indexHeader,
    indexFooter,
  },
  data() {
    return {
      hero: {},
      show: "查看更多",
      heroIndex: 0,
      skillIndex: 0,
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    async fetch() {
      let res = await this.$http.get(`hero/${this.id}`);
      this.hero = res.data;
      console.log(this.hero);
    },
    changeSkin(index) {
      this.heroIndex = index;
      this.$refs.swiper.style.transform = `translateX(${this.heroIndex *
        -1240}px)`;
    },
  },
};
</script>

<style scoped>
#container {
  width: 100%;
  overflow: hidden;
  background: #eeeeee;
}
.mianbao {
  width: 80%;
  margin: 0 auto;
}
.mianbao > ul {
  min-width: 520px;
  width: 40%;
  display: flex;
  justify-content: space-between;
}
.mianbao > ul > li > a,
li {
  font-size: 15px;
  color: #a9a9a9;
}
.mianbao > ul > li > a:hover {
  text-decoration: underline;
}
/* 英雄展示 */
.hero {
  width: 80%;
  min-width: 1200px;
  position: relative;
  margin: 20px auto;
}
/* 数据展示 */
.data {
  width: 290px;
  height: 300px;
  position: absolute;
  left: 60px;
  top: 60px;
  z-index: 999;
  color: white;
}
.data > div {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 15px;
}
.data > div > span {
  font-size: 12px;
  padding: 5px 6px;
  border-radius: 10px;
  text-align: center;
  background: #00a483;
  margin: 0 4px 0 0;
}
.data > dl {
  width: 100%;
}
dl::after {
  clear: both;
  content: "";
  display: block;
}
.data > dl > * {
  float: left;
  margin: 3px 0;
}
.data > dl > dt {
  width: 30%;
}
.data > dl > dd {
  width: 70%;
}
dd > i {
  display: inline-block;
  width: 45%;
  height: 12px;
  background: #363c3c;
}
dd > i > span {
  display: inline-block;
  height: 12px;
}
/* 图层 */
.hero > span {
  position: absolute;
  left: 0;
  top: 0;
  width: 25%;
  height: 99%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 998;
}
/* 图片 */
.hero > .swiper {
  width: 100%;
  position: relative;
  overflow: hidden;
}
.hero > .swiper > ul {
  display: flex;
  transition: all 0.3s;
}
.hero > .swiper > ul > li {
  flex: 1;
}
.bigImg {
  min-width: 1230px;
}
.icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 999;
  text-align: right;
}
.icon > ul {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}
.icon > ul > li {
  box-sizing: border-box;
}
.icon > ul > li > img {
  width: 100%;
  height: 100%;
}
.icon > ul > li.active {
  border: 4px solid #00a483;
}
.icon > span {
  position: relative;
  color: white;
  font-size: 25px;
  background: black;
}
/* 左侧主要内容 */
article {
  width: 80%;
  min-width: 1200px;
  margin: 20px auto;
  display: flex;
}
article > * h4 {
  margin: 20px 0px 10px 0px;
  font-size: 24px;
  color: #338c7a;
}
article > section {
  flex: 2;
}
article > aside {
  flex: 1;
}
article .bgG {
  width: 100%;
  border: 1px solid #e1e1e1;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  background: #fff;
  padding-bottom: 20px;
}
.bgG a {
  padding: 28px 32px 30px 32px;
  margin-bottom: 20px;
  font-size: 15px;
  color: #999;
}
.bgG > div {
  height: auto;
  padding: 28px 32px;
  font-size: 14px;
  line-height: 24px;
  text-indent: 2em;
}
.bgG > div.show {
  height: 130px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
}
article > * h3 {
  margin: 20px 0px;
  font-size: 16px;
  color: #338c7a;
}
.bgG > div > ul > li {
  line-height: 28px;
  font-size: 14px;
  color: #333;
}
.skills {
  display: flex;
}
.skills > li {
  text-indent: 0;
  padding: 10px 20px;
}
.skills > li.active {
  border-top: 3px solid #00a383;
  border-left: 1px solid #e1e1e1;
  border-right: 1px solid #e1e1e1;
  background: #fff;
}

.title > h5 {
  display: inline;
  padding-right: 10px;
  font-size: 16px;
  color: #333;
}
.title > em {
  padding-bottom: 10px;
  font-size: 14px;
  color: #999;
}
</style>
