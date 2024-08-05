import { Dropdown } from "@/types/dropdown";

export const mockDropdowns = {
  dropdown: [
    {
      type: "select",
      selectedOption: "",
      placeholder: "Учебное заведение",
      options: ["Университет 1", "Университет 2", "Университет 3"],
      isOpen: false,
    },
    {
      type: "select",
      selectedOption: "",
      placeholder: "Специальность",
      options: ["Специальность 1", "Специальность 2", "Специальность 3"],
      isOpen: false,
    },
    {
      type: "input",
      selectedOption: "",
      placeholder: "Ввести баллы",
    },
    {
      type: "select",
      selectedOption: "",
      placeholder: "Основной предмет",
      options: ["Предмет 1", "Предмет 2", "Предмет 3"],
      isOpen: false,
    },
    {
      type: "button",
      selectedOption: "Подобрать",
    },
  ],
};
