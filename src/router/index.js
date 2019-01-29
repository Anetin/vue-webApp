import Vue from 'vue'
import Router from 'vue-router'
// import Recommend from 'components/recommend/recommend.vue'
// import Singer from 'components/singer/singer'
// import Search from 'components/search/search'
// import Rank from 'components/rank/rank'
// import SingerDetail from 'components/singer-detail/singer-detail'
// import TopList from 'components/top-list/top-list'
// import Disc from 'components/disc/disc'

Vue.use(Router)

const Recommend = (resolve) => {
  import('components/recommend/recommend').then(module => {
    resolve(module)
  })
}
const Singer = (resolve) => {
  import('components/singer/singer').then(module => {
    resolve(module)
  })
}
const Search = (resolve) => {
  import('components/search/search').then(module => {
    resolve(module)
  })
}
const Rank = (resolve) => {
  import('components/rank/rank').then(module => {
    resolve(module)
  })
}
const SingerDetail = (resolve) => {
  import('components/singer-detail/singer-detail').then(module => {
    resolve(module)
  })
}
const TopList = (resolve) => {
  import('components/top-list/top-list').then(module => {
    resolve(module)
  })
}
const Disc = (resolve) => {
  import('components/disc/disc').then(module => {
    resolve(module)
  })
}

export default new Router({
  // mode: 'history',
  base: '/fun-music/',
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: Disc
        }
      ]
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: TopList
        }
      ]
    }
  ]
})
