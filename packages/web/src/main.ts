/// <reference types="vite/client"/>

import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "./router";
import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

enableMocking().then(() => {
  app.mount("#app");
});

async function enableMocking() {
  if (import.meta.env.DEV) {
    const { worker } = await import("./__mocks__/browser");

    return worker.start({
      onUnhandledRequest: "bypass",
    });
  }
}
