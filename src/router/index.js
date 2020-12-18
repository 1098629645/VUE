import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/noticias',
    name: 'noticias',
    component: () => import('../views/Peliculas.vue'),
    meta:{
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  routes
})

// si para donde voy requiere autenti, pregunto si hay token activo
router.beforeEach( (to , from, next) => {

  if (to.matched.some( destinoRequiereAut => destinoRequiereAut.meta.requiresAuth)) {
    // pregunta token
    if (localStorage.getItem('token'))
    {
      next();
    } else{
      next({
        path: '/'
      })
    }
  } else{
    next();
  }

})

export default router
