import { createApp } from "vue";
import "./assets/css";
import router from "./router";
import { createPinia } from "pinia";
import AppVue from "./App.vue";

const app = createApp(AppVue);
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.mount("#app");
