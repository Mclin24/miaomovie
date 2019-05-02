import Vue from 'vue'
import Router from 'vue-router'
import MineRouter from './Mine';
import MovieRouter from "./Movie";
import CinemaRouter from "./Cinema";
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    MineRouter,
    MovieRouter,
    CinemaRouter,
    {
      path : '/*',
      redirect : '/movie/playing'
    }
  ]
})
