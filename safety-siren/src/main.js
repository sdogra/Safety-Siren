import Vue from "vue";
import firebase from 'firebase';
import App from "./App.vue";
import router from "./router";
import GoogleMaps from "./views/GoogleMaps";
import Sidebar from "./views/Sidebar";

Vue.component('GoogleMaps', GoogleMaps);
Vue.component("Sidebar", Sidebar);


Vue.config.productionTip = false;

let app = '';

//Set up EventBus
window.EventBus = new Vue({
  data(){
    return {
      annarbor: [42.281420, -83.748480]
    }
  }
})


//Configure Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCuhitY3EqVXoEagvtWffJuaMAdaPyEEro",
  authDomain: "safetysiren.firebaseapp.com",
  databaseURL: "https://safetysiren.firebaseio.com",
  projectId: "safetysiren",
  storageBucket: "safetysiren.appspot.com",
  messagingSenderId: "1072625271222",
  appId: "1:1072625271222:web:dd0a860ae4f33336838117",
  measurementId: "G-2DV9BRFLGK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged(() => {
  if (!app){
    app = new Vue({
      el: '#app',
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});


