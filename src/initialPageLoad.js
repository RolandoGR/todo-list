import { createTaskForm } from "./form";
import { loadTasks } from "./loadTasks";
import { sideBarLoad } from "./sidebar";
import { addTask, myListController } from "./tasks";
import { newTaskBtn } from "./newTaskBtn";

export function initialPageLoad() {
  const content = document.getElementById("content");
  content.replaceChildren();

  const initHeader = document.createElement("h1");
  initHeader.textContent += "Project one";
  content.appendChild(initHeader);

  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  content.appendChild(sidebar);
  sideBarLoad();

  const innerGrid = document.createElement("div");
  innerGrid.classList.add("innerGrid");
  content.appendChild(innerGrid);

  createTaskForm();
  loadTasks();
}
