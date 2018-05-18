import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import TriviaApp from './components/TriviaApp.vue'

export const router = new VueRouter({
    routes : [
        {
            path: '/',
            component: TriviaApp,
            name: 'trivia-app'
        }

    ],
    mode: 'history',
    
})