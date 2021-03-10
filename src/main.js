import { createApp } from 'vue'
import App from './App.vue'
import routes from '@/routes/routes'
window.localStorage.wmUserInfo = JSON.stringify({ userId: '18210833386', userTag: '蛤蟆金服', projectVersion: '1.0.1' })

createApp(App)
    .use(routes)
    .mount('#app')
