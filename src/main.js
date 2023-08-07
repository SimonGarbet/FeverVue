import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Concert from './pages/Concert.vue'
import ConcertTarget from './pages/ConcertTarget.vue'

const router = VueRouter.createRouter({
history: VueRouter.createWebHistory(),
routes: [
    {
    path: '/',
    name: 'Home',
    component: Home
    },
    {
        path: '/concert/:id',
    name: 'concertTarget',
    component: ConcertTarget
    },
    {
        path: '/concert/:town',
    name: 'concert',
    component: Concert
    }
  ]
})

const app = createApp(App)
app.use(router).mount('#app')
app.mount('app')
