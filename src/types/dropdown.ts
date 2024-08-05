export interface Dropdown {
  type: "select" | "input" | "button";
  selectedOption: string;
  placeholder?: string;
  options?: string[];
  isOpen?: boolean;
}