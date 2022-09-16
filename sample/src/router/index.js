import Vue from 'vue'
import VueRouter from 'vue-router'

import Homepage from '../views/home.vue'
import NotFound from '../views/notfound.vue'
import Signup from '../views/signup.vue'
import Login from '../views/login.vue'
import Description from '../views/description.vue'
import Espace from '../views/espace.vue'
import ListerUnProduit from '../views/lister_un_produit.vue'
import ModesPaiement from '../views/modes_de_paiement.vue'
import Faq from '../views/faq.vue'
import SuiviProduits from '../views/suivi_de_produits.vue'
import Adresses from '../views/adresses.vue'
import ForgetPassword from '../views/forgotPassword.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode : "history",
  routes : [
    {path: "/", component: Homepage},
    {path: "/inscription", component: Signup},
    {path: "/connexion", component: Login},
    {path: "/description", component: Description},
    {path: "/espace", component: Espace},
    {path: "/modes_paiement", component: ModesPaiement},
    {path: "/lister_un_produit", component: ListerUnProduit},
    {path: "/faq", component: Faq},
    {path: "/adresses", component: Adresses},
    {path: "/suivi_produits", component: SuiviProduits},
    {path: "/forgot_password", component: ForgetPassword},
    {path: "*", component: NotFound} //A mettre a la fin de tous les routeurs
  ]
})

export default router
