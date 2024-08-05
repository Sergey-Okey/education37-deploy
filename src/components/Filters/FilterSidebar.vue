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
              width="25px"
              height="25px"
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
      </div>
      <div :class="style.checkbox">
        <span :class="style.title">Форма обучения</span>
        <div>
          <input type="checkbox" />
          <span>Очно</span>
        </div>
        <div>
          <input type="checkbox" />
          <span>Заочно</span>
        </div>
        <div>
          <input type="checkbox" />
          <span>Очно/заочно</span>
        </div>
      </div>
      <div :class="style.checkbox">
        <span :class="style.title">Форма обучения</span>
        <div>
          <input type="checkbox" />
          <span>Бакалавриат</span>
        </div>
        <div>
          <input type="checkbox" />
          <span>Очно/заочно</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import style from "./filterSidebar.module.scss";
import { mockDropdowns } from "@/mock/DropdownSidebar";

const dropdowns = ref<Dropdown[]>(mockDropdowns.dropdown);

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
