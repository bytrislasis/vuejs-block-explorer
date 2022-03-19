import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlockDetail from "@/views/BlockDetail";
import TransferDetail from "@/views/TransferDetail";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/block/:block',
    name: 'BlockDetail',
    component: BlockDetail

  },

  {
    path: '/transfer/:txid',
    name: 'TransferDetail',
    component: TransferDetail

  },
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes
})

export default router
