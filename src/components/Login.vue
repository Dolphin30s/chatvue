<template>
  <div class="login">
    <h3>Вход</h3>
    <input
      type="text"
      v-model="email"
      placeholder="E-mail"
      class="form-control form-control-lg"
    />
    <input
      type="password"
      v-model="password"
      placeholder="Password"
      class="form-control form-control-lg"
    />
    <button v-on:click="login" class="btn btn-primary">Войти</button>
    <p>
      <router-link to="/signup">Регистрация</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "login",
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((response) => {
          this.$router.replace("/Chat");
        })
        .catch((err) => {
          alert(err.message);
        });
    },
  },
};
</script>

<style scoped>
.login {
  margin-top: 100px;
  margin-left: 40%;
}
input {
  align-self: center;
  margin: 10px 0;
  width: 400px;
  padding: 15px;
}
button {
  margin: 10px 0;
  width: 400px;
  font-size: 23px;
}
a {
  color: black;
  text-decoration: underline;
  margin: 0 160px;
}

h3 {
  font-family: "Arial";
  font-weight: normal;
  font-size: 30px;
  margin: 0 160px;
}
</style>