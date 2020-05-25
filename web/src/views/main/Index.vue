<template>
  <div id="container">
    <index-header></index-header>
    <article style="margin-bottom:35px;height:380px;" class="artT">
      <index-swiper></index-swiper>
      <index-new></index-new>
    </article>
    <article style="margin-bottom:35px;" class="artT">
      <index-hop></index-hop>
      <index-nav></index-nav>
    </article>
    <index-heros></index-heros>
    <index-footer></index-footer>
  </div>
</template>

<script>
import indexHeader from "../header/IndexHeader";
import indexSwiper from "../article/IndexSwiper";
import indexNew from "../article/IndexNews";
import indexHop from "../article/IndexHop";
import indexNav from "../article/IndexNav";
import indexHeros from "../article/indexHeros";
import indexFooter from "../footer/indexFooter";
export default {
  components: {
    indexHeader,
    indexSwiper,
    indexNew,
    indexHop,
    indexNav,
    indexHeros,
    indexFooter,
  },

  
};
</script>

<style scoped>
.artT {
  width: 1350px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
#container {
  width: 100%;
  overflow: hidden;
  background: #EEEEEE;
}
</style>
