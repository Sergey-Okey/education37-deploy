<template>
  <div :class="style.filter">
    <div :class="style.filter_content">
      <div
        v-for="(dropdown, index) in dropdowns"
        :key="index"
        :class="style.dropdown"
      >
        <!-- Кастомный выпадающий список -->
        <div
          v-if="dropdown.type === 'select'"
          :class="style.dropdown_select_container"
        >
          <div
            :class="[
              style.dropdown_select,
              { [style.active]: dropdown.isOpen },
            ]"
            @click="toggleSelect(index)"
          >
            {{ dropdown.selectedOption || dropdown.placeholder }}
            <NuxtImg
              :class="style.dropdown_icon"
              src="icons/closed.svg"
              alt="pluse icon"
            />
          </div>
          <ul v-if="dropdown.isOpen" :class="style.dropdown_options">
            <li
              v-for="option in dropdown.options"
              :key="option"
              @click="selectOption(index, option)"
              :class="style.dropdown_option"
            >
              {{ option }}
            </li>
          </ul>
        </div>

        <!-- Поле ввода с иконкой -->
        <div
          v-else-if="dropdown.type === 'input'"
          :class="style.dropdown_input_container"
        >
          <input
            type="text"
            :placeholder="dropdown.placeholder"
            v-model="dropdown.selectedOption"
            :class="style.dropdown_input"
          />
          <NuxtImg
            src="icons/pluse.svg"
            width="24px"
            height="24px"
            alt="pluse icon"
          />
        </div>

        <!-- Кнопка -->
        <button
          v-else-if="dropdown.type === 'button'"
          @click="handleButtonClick(index)"
          :class="style.dropdown_button"
        >
          {{ dropdown.selectedOption }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import style from "./filterTop.module.scss";

import { mockDropdowns } from "@/mock/DropdownTop";
const dropdowns = ref(mockDropdowns.dropdown);

const toggleSelect = (index: number): void => {
  dropdowns.value.forEach((dropdown, i) => {
    dropdown.isOpen = i === index ? !dropdown.isOpen : false;
  });
};

const selectOption = (index: number, option: string): void => {
  dropdowns.value[index].selectedOption = option;
  dropdowns.value[index].isOpen = false;
};

const handleButtonClick = (index: number): void => {
  console.log(`Button ${index} clicked`);
};

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (!target.closest(`.${style.filter}`)) {
    dropdowns.value.forEach((dropdown) => {
      dropdown.isOpen = false;
    });
  }
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    dropdowns.value.forEach((dropdown) => {
      dropdown.isOpen = false;
    });
  }
};

onMounted(() => {
  document.addEventListener("mousedown", handleClickOutside);
  document.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener("mousedown", handleClickOutside);
  document.removeEventListener("keydown", handleKeydown);
});
</script>
