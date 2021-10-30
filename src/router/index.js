import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL
    routes: [
        {
            path: '/',
            name: 'start',
            component: require('@/pages/start/').default,
        },
        {
            path: '/game',
            name: 'game',
            component: require('@/pages/game/').default,
        },
        // {
        //     path: '/404',
        //     name: '404',
        //     component: require('@/pages/404/').default,
        // },
        // {
        //     path: '/logout',
        //     name: 'logout',
        //     component: require('@/layouts/logout/').default,
        // },
        // {
        //     path: '*',
        //     redirect: '/404'
        // },
    ]
})

// router.beforeEach((to, from, next) => {
//     if (from.name === 'login' || from.name === 'call-form-data' || to.name === 'home_operator' || to.name === 'home_admin') {
//         store.commit('SET_BACK_BTN_ACTIVE', false)
//     }
//     else {
//         store.commit('SET_BACK_BTN_ACTIVE')
//     }
//     next()
// })

export default router
