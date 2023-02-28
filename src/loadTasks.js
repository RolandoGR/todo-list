import { newTaskBtn } from "./newTaskBtn";
import { projectController } from "./projectController";
import { myListController } from "./tasks";

export function loadTasks(index) {
  const projectIndex = index === undefined ? projectController() : index;
  if (document.querySelector(".displayTasks")) {
    document.querySelector(".displayTasks").remove();
    console.log("I removed a div");
  }

  const displayTasks = document.createElement("div");
  displayTasks.classList.add("displayTasks");

  const projectTitleDiv = document.createElement("div");
  projectTitleDiv.textContent = `${myListController.projectList[projectIndex].name}`;

  displayTasks.appendChild(projectTitleDiv);

  myListController.projectList[projectIndex].tasks.forEach((element) => {
    const taskDivMain = document.createElement("div");
    taskDivMain.textContent = `${element.title}`;
    displayTasks.appendChild(taskDivMain);
  });
  const innerGrid = document.querySelector(".innerGrid");
  innerGrid.appendChild(displayTasks);
  projectController(index);
}
