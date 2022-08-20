<template>
  <div id="app" class="content">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
h2 {
  font-family: "Montserrat";
}

p {
  font-family: "Roboto";
}
img {
  max-height: 64px;
}
.message {
  margin-top: 10px;
}
.chat {
  position: absolute;
  top: 5%;
  bottom: 5%;
  left: 5%;
  right: 5%;
}
</style>
