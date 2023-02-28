import { createTaskForm } from "./form";

export function newTaskBtn() {
  if (document.querySelector(".taskButton")) {
    return;
  }
  const newTaskBtn = document.createElement("button");
  newTaskBtn.classList.add("taskButton");
  newTaskBtn.textContent += "Create new task";
  newTaskBtn.addEventListener("click", createTaskForm);
  return newTaskBtn;
}
