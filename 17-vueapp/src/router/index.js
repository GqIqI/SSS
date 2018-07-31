import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '@/components/movie/MovieList'
import MusicList from '@/components/music/MusicList'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/components/movie/movielist'
    },
    {
      path: '/components/movie/movielist',
      component: MovieList
    },
    {
      path: '/components/music/musiclist',
      component: MusicList
    }
    

  ]
})
