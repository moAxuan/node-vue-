import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Main";
import SkillEdit from "../views/SkillEdit";
import SkinEdit from "../views/SkinEdit";
import HeroEdit from "../views/HeroEdit";
import ArticleEdit from '../views/ArticleEdit'
import CategoryEdit from '../views/CategoryEdit'
import CategoryList from '../views/CategoryList'
import NewEditionEdit from '../views/NewEditionEdit'
import NewEditionList from '../views/NewEditionList'
import AdEdit from '../views/AdEdit'
import AdList from '../views/AdList'
import HopEdit from '../views/HopEdit'
import HopList from '../views/HopList'
import NavEdit from '../views/NavEdit'
import NavList from '../views/NavList'
import SkinList from '../views/SkinList'
import SkillList from '../views/SkillList'
import HeroList from '../views/HeroList'
import ArticleList from '../views/ArticleList'
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: Home,
      children: [
        { path: '/skill/create', component: SkillEdit },
        { path: '/skill/edit/:id', component: SkillEdit, props: true },
        { path: '/skill/list', component: SkillList },
        { path: '/skin/create', component: SkinEdit },
        { path: '/skin/edit/:id', component: SkinEdit, props: true },
        { path: '/skin/list', component: SkinList },
        { path: '/heroes/create', component: HeroEdit },
        { path: '/heroes/edit/:id', component: HeroEdit, props: true },
        { path: '/heroes/list', component: HeroList },
        { path: '/articles/create', component: ArticleEdit },
        { path: '/articles/edit/:id', component: ArticleEdit, props: true },
        { path: '/articles/list', component: ArticleList },
        { path: '/categories/create', component: CategoryEdit },
        { path: '/categories/edit/:id', component: CategoryEdit, props: true },
        { path: '/categories/list', component: CategoryList },
        { path: '/edition/create', component: NewEditionEdit },
        { path: '/edition/edit/:id', component: NewEditionEdit, props: true },
        { path: '/edition/list', component: NewEditionList },
        { path: '/ads/create', component: AdEdit },
        { path: '/ads/edit/:id', component: AdEdit, props: true },
        { path: '/ads/list', component: AdList },
        { path: '/nav/create', component: NavEdit },
        { path: '/nav/edit/:id', component: NavEdit, props: true },
        { path: '/nav/list', component: NavList },
        { path: '/hop/create', component: HopEdit },
        { path: '/hop/edit/:id', component: HopEdit, props: true },
        { path: '/hop/list', component: HopList },
      ],
    },
  ],
});

export default router;
