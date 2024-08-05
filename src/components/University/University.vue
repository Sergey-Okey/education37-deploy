<template>
  <section :class="style.university">
    <div :class="style.title">
      <Title>
        <template #bold>{{ programData.title }}</template>
      </Title>
    </div>
    <div :class="style.university_more">
      <div :class="style.criteria">
        <div :class="style.images_title">
          <div :class="style.circle">
            <NuxtImg
              src="images/top_universitets/energy.png"
              alt="Energy images"
            />
          </div>
          <span>{{ programData.university }}</span>
        </div>

        <div :class="style.forms">
          <span v-for="form in programData.studyForms" :key="form">{{ form }}</span>
        </div>

        <div :class="style.discipline">
          <span>
            {{ programData.language }}
            <li v-for="discipline in programData.disciplines" :key="discipline">{{ discipline }}</li>
          </span>
        </div>

        <div :class="style.direction">
          <span>{{ programData.degree }}</span>
          <div>
            <span>
              от
              <Title>
                <template #bold>{{ programData.budgetPlaces }}</template>
              </Title>
              мест бюджет &nbsp;
            </span>
            <span>
              от
              <Title>
                <template #bold>{{ programData.paidPlaces }}</template>
              </Title>
              мест платное
            </span>
          </div>
        </div>
      </div>

      <div :class="style.description">
        <Title>
          <template #bold>О программе*</template>
        </Title>
        <p v-for="desc in programData.description" :key="desc">{{ desc }}</p>
        <Title>
          <template #bold>Дисциплины, изучаемые в рамках программы:</template>
        </Title>
        <p>
          <li v-for="detail in programData.detailedDisciplines" :key="detail">{{ detail }}</li>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import style from "./university.module.scss";
import Title from "@/components/ui/Title/title.vue";
import { universityData } from '@/mock/University.js';

const programData = universityData;
</script>
