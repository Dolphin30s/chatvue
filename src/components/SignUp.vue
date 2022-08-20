<template>
  <div class="SignUp">
    <h3>Регистрация</h3>
    <input
      v-model="email"
      type="text"
      class="form-control form-control-lg"
      placeholder="E-mail"
    />
    <input
      v-model="password"
      type="password"
      class="form-control form-control-lg"
      placeholder="Password"
    />
    <button v-on:click="signUp" class="btn btn-primary">
      Зарегистрироваться
    </button>
    <p>
      <router-link to="/login"> Авторизоваться</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "signup",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
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
.SignUp {
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
  margin: 0 140px;
}

h3 {
  font-family: "Arial";
  font-weight: normal;
  font-size: 30px;
  margin: 0 110px;
}
</style>