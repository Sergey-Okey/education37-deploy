<template>
  <div :class="style.greeting">
    <div :class="style.greeting_container">
      <div :class="style.title">
        <div>
          <h1
            >твой <span :class="style.small">г. Иваново</span> образовательный
            гид</h1
          >
        </div>
      </div>
      <div :class="style.banner">
        <div :class="style.banner_affter">
          <img src="@/assets/images/greeting/banner.png" alt="Banner" />
        </div>
      </div>
    </div>
    <FilterTop />
    <UniverGrid />
  </div>
  <FilterSidebar />
</template>

<script setup lang="ts">
import style from "./greeting.module.scss";
import FilterTop from "@/components/Filters/FilterTop.vue";
import FilterSidebar from "@/components/Filters/FilterSidebar.vue";
import UniverGrid from "../Universitets/UniverGrid.vue";
</script>
