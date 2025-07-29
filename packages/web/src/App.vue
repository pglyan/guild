<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
const links = [
  { to: "/", text: "now" },
  { to: "/board", text: "board" },
  { to: "/me", text: "me" },
]
</script>

<template>
  <header class="header">
    <nav class="nav">
      <ul class="list">
        <li class="item" v-for="{ to, text } in links">
          <RouterLink class="link" :to>{{ text }}</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <div class="content">
    <RouterView />
  </div>
</template>

<style lang="css" module>
.header {}

.nav {}

.list {}

.item {}

.link {}

.content {
  background-color: pink;
}
</style>
