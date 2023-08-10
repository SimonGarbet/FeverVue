import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Concert from './pages/Concert.vue'
import Target from './pages/Target.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronDown, faXmark} from '@fortawesome/free-solid-svg-icons';
import {faHeart, faCircleUser } from '@fortawesome/free-regular-svg-icons';
library.add(faChevronDown, faXmark, faHeart, faCircleUser)

const router = VueRouter.createRouter({
history: VueRouter.createWebHistory(),
routes: [
    {
    path: '/',
    name: 'Home',
    component: Home
    },
    {
        path: '/concert/:town/:id',
    name: 'Target',
    component: Target
    },
    {
        path: '/concert/:town',
    name: 'concert',
    component: Concert
    }
  ]
})

const app = createApp(App);
app.use(router).mount('#app');
app.component("font-awesome-icon", FontAwesomeIcon);
