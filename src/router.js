import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import TriviaApp from './components/TriviaApp.vue'
import ChuckNoris from './components/ChuckNoris.vue'

export const router = new VueRouter({
    routes : [
        {path: '/', component: TriviaApp, name: 'trivia-app'},
        {path: '/chuck', component: ChuckNoris, name: 'chuck'}

    ],
    mode: 'history',
    
})