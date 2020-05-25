<template>
  <div style="width:100%;" class="content">
    <div class="nav">
      <a href="" style="flex:1;order:0;">
        <img src="../../assets/img/logo-public.png" alt=""/>
      </a>
      <nav style="flex:6;order:1;padding:1.2em 0;" @mouseenter="show = true" @mouseleave="show = false">
        <li v-for="(item, index) in navDate" :key="index" style="margin-left:20px;">
          <a :href="item.url" v-if="item.url">
            <span>{{item.name}}</span>
            <span>{{item.Ename}}</span>
          </a>
          <p  v-if="!item.url"> 
             <span>{{item.name}}</span>
             <span>{{item.Ename}}</span>
          </p>
        </li>
      </nav>
      <div style="float:right;color:white;flex:2;order:5;">
        <span style="font-size:1.3rem;">亲爱的召唤师，欢迎</span>
        <a href="" style="color:yellow;font-size:1.3rem;">登录</a>
      </div>
      <span style="float:right;flex:1;order:4;" class="search">phone</span>
      <a href="" style="float:right;flex:1;order:3;" class="search">search</a>
    </div>

    <i-nav :show='show' :navDate="navDate" ></i-nav>
  </div>
</template>

<script>
import INav from "../header/INav";
export default {
  props: ["ImgScroll", "navDate"],
  data() {
    return {
      show: false
    }
  },
  components: {
    INav,
  },
};
</script>

<style scoped>
.content {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  z-index: 999;
  background: rgba(0,0,0,.3);
}
.nav {
  margin:0 auto;
  width: 90%;
  min-width: 1300px;
  /* padding: 1.2rem 0; */
  display: flex;
  align-items: center;
}
.nav > * {
  text-align: center;
}

.nav > nav {
  /* width: 80%; */
  display: flex;
  justify-content: space-around;
}
.nav > nav > *  span {
  display: block;
  
}
.nav > nav > *  span:first-child {
  color: white;
  font-size: 1.7em;
}
.nav > nav > *  span:last-child {
  color: rgba(255,255,255,.5);
  font-size: 12px;
}
.search {
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  margin: 17px 12px 0 0;
}
</style>
