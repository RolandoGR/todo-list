import { createTask } from "./form";
import { addTask } from "./tasks";

export function initialPageLoad() {
  const content = document.getElementById("content");
  content.replaceChildren();

  const initHeader = document.createElement("h1");
  initHeader.textContent += "Project one";
  content.appendChild(initHeader);

  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  content.appendChild(sidebar);

  const newTaskBtn = document.createElement("taskButton");
  newTaskBtn.classList.add("taskButton");
  newTaskBtn.textContent += "Create new task";
  newTaskBtn.addEventListener("click", createTask);
  content.appendChild(newTaskBtn);
}
