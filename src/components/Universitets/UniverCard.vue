<script setup lang="ts">
import style from "./univercard.module.scss";
import { defineProps } from "vue";
import type { IUniverCard } from "@/types/univers";


const props = defineProps<{
  card: IUniverCard;
}>();


const socialIcons: Record<string, string> = {
  Youtube: "icons/youtube.svg",
  Vk: "icons/vk.svg",
};
const getIconPath = (socialName: string)  => {
  return socialIcons[socialName] || 'icons/default.png';
};

</script>

<template>
  <div :class="style.card">
    <div :class="style.card__wrapper">
      <div v-if="card.image" :class="style.card__circle">
        <NuxtImg :src="card.image" alt="photo univer" />
      </div>
      <div :class="style.card__fullinfo">
      <div v-if="card.name" :class="style.card__title">{{ card.name }}</div>
      <div v-if="card.links" :class="style.card__links">
        <div v-for="link in card.links" :key="link.name">
          <a :href="link.link" target="_blank" :class="style.card__link">
           {{  link.name }}
           <NuxtImg src="icons/arrow-right.svg" width="24px" height="25px" alt="arrow right icon" />
          </a>
        </div>
      </div>
        <div :class="style.card__info">
          <div v-if="card.address" :class="style.card__address">
            <NuxtImg src="icons/map-pin.svg" width="24px" height="24px" alt="geoposition icon" />
            {{ card.address }}
          </div>
          <div v-if="card.site" :class="style.card__site">
            <NuxtImg src="icons/globe.svg" width="24px" height="24px" alt="globus icon" />
            {{ card.site }}
          </div>
          <div v-if="card.phone" :class="style.card__phone">
            <NuxtImg src="icons/phone.svg" width="24px" height="24px" alt="icon phone" />
            {{ card.phone }}
          </div>
          <div v-if="card.socials" :class="style.card__socials">
            <div v-for="social in card.socials" :key="social.name">
                <a :href="social.link" target="_blank" :class="style.card__social">
                    <NuxtImg :src="getIconPath(social.name)" width="36px" height="36px" alt="socials icons" />
                </a>
            </div>
          </div>
        </div>
        </div>
      </div>
  </div>
</template>
