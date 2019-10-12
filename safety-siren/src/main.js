import Vue from "vue";
import firebase from 'firebase';
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

let app = '';

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
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});


