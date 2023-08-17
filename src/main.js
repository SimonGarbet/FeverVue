import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Town from './pages/Town.vue'
import Concert from './pages/Concert.vue'
import ErrorPage from './components/ErrorPage.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronDown, faXmark, faStar, faStarHalfStroke, faLocationDot, faHourglassEnd, faWheelchair, faChild, faCirclePlus, faCircleMinus, faCalendarDay, faCheck} from '@fortawesome/free-solid-svg-icons';
import {faHeart, faCircleUser, faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faSquareFacebook, faSquareTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
library.add(faChevronDown, faXmark, faHeart, faCircleUser, faStar, faStarHalfStroke, faCopyright, faSquareFacebook, faSquareTwitter, faInstagram, faLocationDot, faHourglassEnd, faWheelchair, faChild, faCirclePlus, faCircleMinus, faCalendarDay, faCheck)



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
    name: 'Concert',
    component: Concert
    },
    {
    path: '/concert/:town',
    name: 'town',
    component: Town
    },
    ,
    {
    path: '/:catchAll(.*)',
    name: 'ErrorPage',
    component: ErrorPage
    }
  ]
})

const app = createApp(App);
app.use(router).mount('#app');
app.component("font-awesome-icon", FontAwesomeIcon);
