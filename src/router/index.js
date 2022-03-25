import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/IniciarSesion',
        name: 'IniciarSesion',
        component: () =>
            import ('../views/IniciarSesion.vue')
    },
    {
        path: '/',
        name: 'Home',
        component: () =>
            import ('../views/Home.vue')
    },

    {
        path: '/Home',
        name: 'Home',
        component: () =>
            import ('../views/Home.vue')
    },
    {
        path: '/Nosotros',
        name: 'Nosotros',
        component: () =>
            import ('../views/Nosotros.vue')
    },
    {
        path: '/Registrarme',
        name: 'Registrarme',
        component: () =>
            import ('../views/Registrarme.vue')
    },
    {
        path: '/Administrador',
        name: 'Administrador',
        component: () =>
            import ('../views/Administrador.vue')
    },
    {
        path:'/Principal',
        name:'Principal',
        component: () =>
        import ('../views/Principal.vue')        
    }

]

const router = new VueRouter({
    routes
})

export default router