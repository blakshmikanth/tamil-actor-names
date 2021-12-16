// import uniqueRandomArray from "unique-random-array";
// import names from "./names.json";
import uniqueRandomArray from "unique-random-array";
const names = [
  "Rajinikanth",
  "Kamal Haasan",
  "Vijay",
  "Ajith",
  "M G Ramachandran",
  "Sivaji Ganesan",
  "Lakshmikanth B",
];

export const all = names;
export const random = uniqueRandomArray(names);
