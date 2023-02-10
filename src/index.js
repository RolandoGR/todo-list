import { initialPageLoad } from "./initialPageLoad";
import { createTask } from "./tasks";

const list = [];

initialPageLoad();

const btn = document.querySelector(".taskButton");
btn.addEventListener("click", createTask);
