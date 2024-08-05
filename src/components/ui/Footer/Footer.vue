<template>
  <footer :class="style.footer">
    <div :class="style.footer_container">
      <span>(с) 2024</span>
      <NuxtLink :to="'/about'">О проекте</NuxtLink>
    </div>
  </footer>
</template>
<script setup lang="ts">
import style from "./footer.module.scss";
</script>
