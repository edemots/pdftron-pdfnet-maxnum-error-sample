import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Index from "./components/Index.vue";
import WebViewer from "./components/WebViewer.vue";

const routes = [
  { path: "/", component: Index },
  { path: "/preview", component: WebViewer },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
