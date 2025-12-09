import { createRouter, createWebHistory} from "vue-router";

import Respuestas from "./components/Respuestas.vue"; 
import Conversor from "./components/Conversor.vue";

const routes =[

    {path: '/', component: Conversor},  
    {path: '/conversor', component: Conversor}, 
    {path: '/respuestas', component: Respuestas},

    {path: '/:pathmatch(.*)*', component: Conversor}, 
]

const router = createRouter({
    history: createWebHistory(), 
    routes: routes
})

export default router; 