import { createTaskForm } from "./form";
import { loadTasks } from "./loadTasks";
import { sideBarLoad } from "./sidebar";
import { addTask, myListController } from "./tasks";
import { newTaskBtn } from "./newTaskBtn";

export function initialPageLoad() {
  console.log(
    myListController.showList(),
    myListController.projectList[0].name
  );
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

  innerGrid.appendChild(newTaskBtn());
  loadTasks();
}
