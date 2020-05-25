<template>
  <article>
    <header>
      <h2>英雄资料</h2>
      <ul class="hopNav">
        <li
          v-for="(item, index) in heros"
          :key="index"
          :class="{ active: descIndex == index }"
          @click="dupType(index, item)"
        >
          {{ item.name }}
        </li>
        <li>资料库<span>·-></span></li>
      </ul>
    </header>
    <section>
      <ul v-if="heros[descIndex]">
        <router-link tag="li" :to="'data/info-details/'+item._id" v-for="(item, index) in heros[descIndex].heroList" :key="index">
          <img :src="item.icon" alt="">
          <p>{{item.title}}</p>
          <a href="">search</a>
        </router-link>
      </ul>
    </section>
  </article>
</template>

<script>
export default {
  data() {
    return {
      heros: [],
      descIndex: 0,
    };
  },
  mounted() {
    this.dupType();
    this.fetch();
  },
  methods: {
    async fetch() {
      let res = await this.$http.get('heros/list');
      this.heros = res.data
    },
    dupType(index = 0, type = "所有英雄") {
      this.descIndex = index;
      if (type != "所有英雄") {
        this.newHeros = this.heros.filter((item) => {
          return item.type == type;
        });
      } else {
        this.newHeros = this.heros;
      }
    },
  },
};
</script>

<style scoped>
article {
  height: auto;
  margin-top: 0;
  padding: 66px 0 66px 0;
  position: relative;
  width: 100%;
  min-width: 1358px;
  overflow: hidden;
  background-color: white;
}

header {
  margin:0 auto;
  display: flex;
  width:100%;
  max-width: 1350px;
  min-width: 1350px;
}
header > h2 {
  /* position: absolute; */
  padding-left: 10px;
  width: auto;
  height: 28px;
  top: 5px;
  left: -6px;
  box-sizing: border-box;
  color: #0b0b0b;
  font-size: 24px;
  line-height: 28px;
  font-weight: 400;
  border-left: 5px solid #1da6ba;
}
header > ul.hopNav {
  display: flex;
  margin-left: 20px;
  flex: 1;
}
header > ul.hopNav > li {
  margin: 0 10px;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  min-width: 50px;
  height: 28px;
  overflow: visible;
  color: #676767;
  list-style-type: disc;
  list-style-position:inside;
}
header > ul.hopNav > li:last-child {
  font-size: 12px;
  margin-left: auto;
  color: #7ea1a6;
  line-height: 25px;
}
header > ul.hopNav > li.active {
  font-weight: 700;
  color: #1da6ba;
}
header > ul.hopNav > li:last-child:hover {
  color: #1da6ba;
  font-weight: 600;
}
header > ul.hopNav > li:last-child:hover > span {
  animation: move 1s infinite;
}
section {
  max-width: 1350px;
  min-width: 1350px;
  max-height: 460px;
  min-height: 460px;
  overflow: hidden;
  overflow-y: scroll;
  margin:0 auto;
}
section > ul {
  display:flex;
  flex-wrap: wrap;
 
}
section > ul > li {
  max-width: 60px;
  margin: 20px;
  text-align: center;
  position:relative;
}
section > ul > li img {
  width:100%;
}
section > ul > li > a {
  position: absolute;
  display:none;
  text-align: center;
  left:0;
  top:0;
  width:100%;
  height:60px;
  color:#fff;
  line-height: 60px;
  background:rgba(0,0,0,.5);
}
section > ul > li:hover a {
  display: block;
}
section > ul > li:hover > p {
  color: #1da6ba;
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
</style>
