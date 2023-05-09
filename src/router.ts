import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/SwitchDemo.vue'
import Button from './components/ButtonDemo.vue'
import Dialog from './components/DialogDemo.vue'
import Tabs from './components/TabsDemo.vue'
import Docdome from './components/Docdome.vue'
import Start from './components/Start.vue'
import Introduce from './components/Introduce.vue'
import Installation from  './components/Installation.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc,
            children:[
                {path:'',component:Docdome},
                {path:'button',component:Button},
                {path:'dialog',component:Dialog},
                {path:'tabs',component:Tabs},
                {path:'switch',component:Switch},
                {path:'introduce',component:Introduce},
                {path:'installation',component:Installation},
                {path:'start',component:Start},
            ]}
    ]
})

// router.afterEach(()=>{
//     console.log("路由切换了")
// })
