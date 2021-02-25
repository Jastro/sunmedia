import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Favorites from "./views/Favorites.vue";
import Detail from "./views/Detail.vue";

const app = createApp(App);

const routes = [
  { path: "/", component: Home },
  { path: "/favorites", name: "Favorites", component: Favorites },
  { path: "/detail/:id", name: "detail", props: true, component: Detail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(store);
app.use(router);
app.mount("#app");
