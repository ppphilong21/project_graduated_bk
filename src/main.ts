import Vue from 'vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import Antd from 'ant-design-vue'
import router from '@/routers'
import '@/assets/styles/index.css'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCAMhZV4vvs0jwhSqIkAG57mMdywoKOhpM",
  authDomain: "prime-agency-386715.firebaseapp.com",
  projectId: "prime-agency-386715",
  storageBucket: "prime-agency-386715.appspot.com",
  messagingSenderId: "685115782528",
  appId: "1:685115782528:web:a2a2469692c7439fc67d65",
  measurementId: "G-6SVKGJEGKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

Vue.use(Antd)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

new Vue({
  router,
  render: h => h(App),
}).$mount('#app-page')
