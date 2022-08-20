import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase";

import Chat from "../components/Chat.vue";
import Login from "../components/Login.vue";
import SignUp from "../components/SignUp.vue";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp
    },
    {
      path: "/Chat",
      name: "Chat",
      component: Chat,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("login");
  else if (!requiresAuth && currentUser) next("Chat");
  else next();
});

export default router;
