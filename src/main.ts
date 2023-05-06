import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Tang from "./components/Tang.vue";
import Tang2 from "./components/Tang2.vue"

const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Tang},
        {path:'/x',component:Tang2}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
