import { createApp } from 'vue'
import App from './App.vue'
import routes from '@/routes/routes'
import Element3 from 'element3'
import 'element-ui/lib/theme-chalk/index.css';

//性能监控
window.localStorage.wmUserInfo = JSON.stringify({ userId: '18210833386', userTag: '蛤蟆金服', projectVersion: '1.0.1' })

createApp(App)
    .use(routes)
    .use(Element3)
    .mount('#app')
