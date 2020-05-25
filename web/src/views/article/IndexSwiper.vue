<template>
  <section>
    <article>
      <ul ref="swiperImg" style="transition:all 1s;">
        <li v-for="(item, index) in swiper" :key="index">
          <a :href="item.items[0].url">
            <img :src="item.items[0].image" alt="" />
          </a>
        </li>
      </ul>
    </article>
    <ul class="swiperTitle" >
      <li
        v-for="(item, index) in swiper"
        :key="index"
        @mouseenter="swiperDup(index)"
        @mouseleave="swiperM()"
      >
        <span
          :class="{ active: index == swiperIndex - 1 }"
          style="padding:10px 0;"
          v-show="index != 5"
          >{{ item.name }}</span
        >
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      swiper: [ ],
      swiperIndex: 0,
      swiperDianIndex: 0,
      time: -1,
    };
  },
  mounted() {
    this.swiperM();
    this.fetch();
  },
  methods: {
    async fetch() {
      let res = await this.$http.get('rest/ads');
      this.swiper = res.data
    },
    swiperM() {
      this.time = setInterval(this.swiperMove, 1500);
    },
    swiperMove() {
      if (this.$refs.swiperImg) {
        this.$refs.swiperImg.style.transition = "all 1s";
        if (this.swiperIndex == this.swiper.length) {
          this.$refs.swiperImg.style.transition = "";
          this.swiperIndex = 0;
        }
        this.$refs.swiperImg.style.transform = `translate(${this.swiperIndex *
          -820}px)`;
        this.swiperIndex++;
      }
    },
    swiperDup(index) {
      clearInterval(this.time);
      this.swiperIndex = index;
      this.swiperMove();
    },
  },
};
</script>

<style scoped>
section {
  position: relative;
}
section > article {
  width: 820px;
  overflow: hidden;
}
section ul {
  display: flex;
}
.swiperTitle li {
  flex:1;
}
section > .swiperTitle span {
  padding: 8px 25.5px;
  display: block;
  box-sizing: border-box;
  background-color: #e3e2e2;
  font-size: 14px;
  text-align: center;
  color: #424242;
  letter-spacing: 1px;
}
section > .swiperTitle span.active {
  color: #ab8e66;
  background-color: #f7f6f6;
  border-bottom: 2px #cea861 solid;
}
</style>
