import { createRouter, createWebHistory } from 'vue-router'
import UploadImg from '@/views/upload/index.vue'


const routes = [
    //默认路径下显示该路由
    {
        path: '/',
        name: 'upload',
        component: UploadImg
    }
]
const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes
})
export default router