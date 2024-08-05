<template>
  <header :class="style.header">
    <div :class="style.header_container">
      <div :class="style.logo">
        <span v-if="!isRootPage"><a href="/">ТВОЙ ОБРАЗОВАТЕЛЬНЫЙ ГИД</a></span>
      </div>
      <nav>
        <NuxtLink :to="'/universities'">Учебные заведения</NuxtLink>
        <NuxtLink :to="'/specialties'">Специальности</NuxtLink>
        <div :class="style.search_container">
          <input :class="style.search" type="text" placeholder="Поиск" />
          <NuxtImg src="icons/search.svg" width="18px" height="18px" alt="arrow right icon" />
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import style from "./header.module.scss";
const route = useRoute();
const isRootPage = computed(() => route.path === "/");
</script>
