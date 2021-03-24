import { createRouter, createWebHistory } from 'vue-router'
import UploadImg from '@/views/upload/index.vue'
import Wmh from '@/views/wmh.vue'


const routes = [
    //默认路径下显示该路由
    {
        path: '/',
        name: 'upload',
        component: UploadImg
    },
    {
        path: '/wmh',
        name: 'wmh',
        component: Wmh
    }
]
let isProd = process.env.NODE_ENV === 'production'
const routerHistory = createWebHistory(isProd ? '/uploadDist/' : '')
const router = createRouter({
    history: routerHistory,
    routes,
})
export default router