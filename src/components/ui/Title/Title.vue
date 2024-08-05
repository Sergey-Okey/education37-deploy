<template>
  <div :class="style.title">
    <h1 :class="style.title_italic"><slot name="italic"></slot></h1>
    <h1 :class="style.title_bold"><slot name="bold"></slot></h1>
  </div>
</template>

<script setup lang="ts">
import style from "@/components/ui/Title/title.module.scss";
</script>
