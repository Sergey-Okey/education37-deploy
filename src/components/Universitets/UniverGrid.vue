<script setup lang="ts">
import { topUnivers } from '~/mock/topUnivers';
import style from "./univergrid.module.scss";
import type { IUniversList, IUniverCard } from '~/types/univers';
import UniverCard from './UniverCard.vue';
const fetchData = async (): Promise<IUniversList> => {
    return topUnivers as IUniversList;
}
const univers = ref<IUniverCard[]>([])
onMounted(async () => {
	const data = await fetchData()
	if (!data) {
		return
	}
	const { list } = data
	univers.value = list
});
</script>

<template>
    <div :class="style.topUnivers">
    <h1 :class="style.topUnivers__title">Топ вузов</h1>
      <div v-if="univers" :class="style.topUnivers__grid">
          <TransitionGroup name="list" tag="div" :class="style.topUnivers__list">
              <template v-for="univer in univers" :key="univer.id">
                 <UniverCard :card="univer" />
              </template>
          </TransitionGroup>
      </div>
    </div>
  </template>