import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // ルートレベルのコード分割
    // this generates a separate chunk (about.[hash].js) for this route
    // これにより、このルート用に個別のチャンク（about。[hash] .js）が生成されます
    // which is lazy-loaded when the route is visited.
    // これは、ルートにアクセスしたときに遅延ロードされます。
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
