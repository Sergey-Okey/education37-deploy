<template>
  <Header />
  <main>
    <div class="container">
      <slot />
    </div>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from "@components/ui/Header/Header.vue";
import Footer from "@components/ui/Footer/Footer.vue";
</script>
