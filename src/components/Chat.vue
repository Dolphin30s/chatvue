<template lang="pug">
#app
  .card.chat
    h2.card-header.text-center Это чат на основе Firebase
    .card-body
      .row.justify-content-left
        .row.info Вы авторизованы как "{{ user1 }}"
        .btn.btn-danger(@click="logout") Выход

      .card(v-for="message in messages.slice().reverse()")
        .row.justify-content-left(v-if="user1 !== message.author")
          .col-auto
            img.img-thumbnail(
              src="https://yt3.ggpht.com/a/AATXAJy8gFOSGhtZp3SbBEweND4Ut-coSjGjnQco2vQADg=s900-c-k-c0xffffffff-no-rj-mo"
            )
          .col-auto
            .alert.alert-dark {{ message.author }} : {{ message.text }}
        .row.justify-content-end(v-else="user1 !== message.author") 
          .col-auto
            .alert.alert-primary {{ message.text }}
          .col-auto
            img.img-thumbnail(
              src="http://cdn.onlinewebfonts.com/svg/img_474642.png"
            )
    .card-footer
      .input-group
        input.form-control(
          v-model="currentMessage",
          type="text",
          @keyup.enter="btnSendClick1"
        )
        .btn.btn-primary(@click="btnSendClick1") Отправить
</template>

<script>
import firebase from "firebase";
import firestore from "../database/firestore";

export default {
  data: () => {
    return {
      currentMessage: "",
      messages: [],
      user: "",
      user1: firebase.auth().currentUser.email,
    };
  },

  firestore: {
    messages: firestore.collection("messages").orderBy("date", "desc").limit(7),
  },

  methods: {
    btnSendClick1() {
      if (this.currentMessage) {
        var user = firebase.auth().currentUser.email;

        firestore.collection("messages").add({
          author: user,
          text: this.currentMessage,
          date: new Date(),
        });
        this.currentMessage = "";
      }
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("Login");
        });
    },
  },
};
</script>

<style>
h2 {
  font-family: "Montserrat";
}

p {
  font-family: "Roboto";
}
.message {
  margin-top: 10px;
}
.chat {
  position: absolute;
  top: 10%;
  left: 20%;
  right: 20%;
}
.card {
  border: none;
}
.row.info {
  font-weight: 400;
  color: black;
}
.btn.btn-danger {
  margin-left: 90%;
  width: 100px;
}
</style>
