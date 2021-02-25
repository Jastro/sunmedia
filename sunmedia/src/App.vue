<template>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
    rel="stylesheet"
  />

  <div class="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import "tailwindcss/dist/tailwind.css";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
