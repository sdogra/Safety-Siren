import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import SignUp from "./views/SignUp.vue";
import GoogleMaps from "./views/GoogleMaps.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },

    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },

    {
      path: '/googleMaps',
      name: 'map',
      component: GoogleMaps
    }
  ]
});
