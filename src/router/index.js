import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Gateaux from '../views/Gateaux.vue'
import Apropos from '../views/Apropos.vue'
import Contact from '../views/Contact.vue'



const routes = [
  {
    path: '/',
    name: 'Accueil',
    component:Accueil
  },
  {
    path: '/apropos',
    name: 'Apropos',
    component:Apropos
  },
  {
    path: '/contacts',
    name: 'Contact',
    component:Contact
  }
  ,
  {
    path: '/gateaux',
    name: 'Gateaux',
   
    component:Gateaux
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
