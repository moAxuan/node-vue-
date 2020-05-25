<template>
  <div class="Imgcontent" :style="{ height: ImgScroll ? '54vh' : '95vh' }">
    <index-nav :ImgScroll="ImgScroll" :navDate="navDate"></index-nav>
    <img :src="edition.icon" alt="" v-show="!ImgScroll" />
    <img :src="edition.img" alt="" v-show="ImgScroll" />
    <a :href="edition.url" class="btn btn1" >
      查看详情
    </a>
    <div class="footer">
      <span style="color:#888787;">当前版本: </span>
      <span style="color:#f5d185;">{{ edition.edition }}</span>
      <button class="btn" style="margin-left:1em;padding:.2em 1.2em;">
        版本详情
      </button>
    </div>
  </div>
</template>

<script>
import indexNav from "./IndexNav";
export default {
  data() {
    return {
      ImgScroll: false,
      edition: {},
      navDate: [],
    };
  },
  methods: {
    async fetch() {
      let res = await this.$http.get(`rest/editions`);
      this.edition = res.data[0];
      res = await this.$http.get("rest/navs");
      this.navDate = res.data;
      if(location.hash != '#/') {
        this.ImgScroll = true;
      }
    },
  },
  components: {
    indexNav,
  },
  mounted() {
    this.fetch();
    window.onscroll = () => {
        this.ImgScroll = true;
    };
  },
};
</script>

<style scoped>
.Imgcontent {
  width: 100%;
  position: relative;
  transition: all 0.5s;
  margin-bottom: 35px;
}
.Imgcontent > img {
  position: absolute;
  left: 50%;
  top: 0;
  width: 1920px;
  height: 100%;
  margin-left: -960px;
}

.Imgcontent > .footer {
  position: absolute;
  right: 5%;
  bottom: 5%;
  font-size: 1.2rem;
}
.Imgcontent .btn {
  display: block;
  border:2px solid #f5d185;
  color: #f5d185;
  background: rgba(255, 255, 255, 0.4);
}
.Imgcontent > .btn1 {
  padding: 1em 5em;
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);
}
</style>
