import firebase from 'firebase';
import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import SignUp from "./views/SignUp.vue";
import GoogleMaps from "./views/GoogleMaps.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "*",
      redirect: '/login'
    },
    
    {
      path: "/",
      redirect: '/login'
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    },

    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },

    {
      path: '/googleMaps',
      name: 'GoogleMaps',
      component: GoogleMaps,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('googleMaps');
  else next();
});


export default router;
