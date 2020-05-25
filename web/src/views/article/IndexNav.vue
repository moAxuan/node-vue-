<template>
  <section>
    <ul class="ulNav">
      <li>
        <video autoplay="" loop="" muted="">
          <source
            src="//ossweb-img.qq.com/images/lol/v3/btn-download.mp4"
            type="video/mp4"
          />
        </video>
      </li>
      <li v-for="(item, index) in nav" :key="index">
        <p v-show='index == 0'>
          {{item.title}}
        </p>
        <a :href="item.url" v-show="index != 0">{{item.title}}</a>
      </li>
      <div class="clear"></div>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          url: "",
          title: "新手必备",
          type: ["指引", "礼包"],
        },
        {
          url: "",
          title: "领取中心",
        },
        {
          url: "",
          title: "在线客服",
        },
        {
          url: "",
          title: "秩序殿堂",
        },
        {
          url: "",
          title: "游戏资料",
        },
        {
          url: "",
          title: "峡谷之巅",
        },
        {
          url: "",
          title: "云顶之羿",
        },
        {
          url: "",
          title: "攻略中心",
        },
        {
          url: "",
          title: "LOL宇宙",
        },
        {
          url: "",
          title: "微信绑定",
        },
      ],
    };
  },
};
</script>

<style scoped>
section {
  position: relative;
  min-width: 470px;
  max-width: 470px;
}

section ul > li:first-child {
  width: 340px;
  height: 138px;
  margin: 5px;
  line-height: 0;
  padding: 0;
}
section > ul > li {
  float: left;
  margin: 10px 5px;
  width: 107px;
  height: 64px;
  text-align: center;
  line-height: 64px;
}
section > ul > li:nth-child(n + 1) {
  background: url(http://game.gtimg.cn/images/lol/v3/index-spr.png);
  background-size: 638px 572px;
  background-position: -193px -316px;
  background-repeat: no-repeat;
  
}
section > ul > li:nth-child(n + 1) > * {
  color: white;
  transition: all 1s;
}
section > ul > li:nth-child(n + 1):hover > *{
  background: rgba(255,255,255,.4);
}
section > ul > li > a {
  display: block;
  width: 100%;
  height: 100%;
}
section > ul > li:nth-child(n + 4) > a {
  color: #424242;
  background: white;
}

section > ul > li:nth-child(n + 1):hover > *{
  background: rgba(255,255,255,.4);
}
section > ul > li:nth-child(n + 4):hover > *{
  background: white;
  color: #1da6ba;
  font-size: 13px;
}
.clear {
  clear: both;
}
video {
  width: 340px;
}
</style>
