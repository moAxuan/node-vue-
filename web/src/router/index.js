import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/main/Index.vue';
import HeroData from '../views/heros/HeroData'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/data/info-details/:id',
    name: 'Herodata',
    component: HeroData,
    props: true
  },
];

const router = new VueRouter({
  routes,
});

export default router;
