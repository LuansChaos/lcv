import { install as installLcvUi } from "@lcv/ui";
import { createApp } from "vue";
import { createPinia } from 'pinia'
import router from "./router";
import App from "./App.vue";

createApp(App).use(installLcvUi).use(createPinia()).use(router).mount("#app");
