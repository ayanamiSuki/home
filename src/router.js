import Vue from 'vue'
import VueRouter from 'VueRouter'
import mainPage from './pages/mainPage'
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: mainPage
        }
    ]
})

export default router