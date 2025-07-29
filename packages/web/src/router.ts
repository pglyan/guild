import { createRouter, createWebHistory } from "vue-router";
import NowPage from "#/pages/NowPage.vue";
import BoardPage from "#/pages/BoardPage.vue";
import MePage from "#/pages/MePage.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: NowPage,
    },
    {
      path: "/board",
      component: BoardPage,
    },
    {
      path: "/me",
      component: MePage,
    },
  ],
});
