import { createTaskForm } from "./form";
import { newTaskBtn } from "./newTaskBtn";
import { projectController } from "./projectController";
import { myListController } from "./tasks";

export function loadTasks(index) {
  console.log(myListController.projectList);
  const projectIndex = projectController(index);
  if (document.querySelector(".displayTasks")) {
    document.querySelector(".displayTasks").remove();
  }

  const displayTasks = document.createElement("div");
  displayTasks.classList.add("displayTasks");

  const projectTitleDiv = document.createElement("h2");
  projectTitleDiv.textContent = `${myListController.projectList[projectIndex].name}`;
  projectTitleDiv.classList.add("projTitleDisplay");
  displayTasks.appendChild(projectTitleDiv);

  let taskIndex = 0;
  myListController.projectList[projectIndex].tasks.forEach((element) => {
    console.log("Stamping", taskIndex);
    const taskDiv = document.createElement("div");
    const taskDivTitle = document.createElement("div");
    const taskDivDesc = document.createElement("div");
    const taskDivPrio = document.createElement("div");
    const taskDivDate = document.createElement("div");
    const taskDivBtns = document.createElement("div");

    taskDivTitle.textContent += `${element.title}`;
    taskDivDesc.textContent += `${element.description}`;
    taskDivPrio.textContent += `${element.priority}`;
    taskDivDate.textContent += `${element.dueDate}`;

    // editBtn
    const editBtnMain = document.createElement("button");
    editBtnMain.textContent = "EDIT";
    editBtnMain.setAttribute("id", `edit${taskIndex}`);

    editBtnMain.addEventListener("click", (e) => {
      const selectedTask = e.target.getAttribute("id").substring(4);
      createTaskForm(projectIndex, "editMode", selectedTask);
      loadTasks(projectIndex);
    });
    // delBtn
    const delBtnMain = document.createElement("button");
    delBtnMain.setAttribute("id", `del${taskIndex}`);
    delBtnMain.textContent = "DEL";
    delBtnMain.addEventListener("click", (e) => {
      const selectedTask = e.target.getAttribute("id").substring(3);
      console.log(myListController.projectList[projectIndex]);
      myListController.projectList[projectIndex].tasks.splice(selectedTask, 1);
      loadTasks(projectIndex);
    });
    taskDivBtns.appendChild(editBtnMain);
    taskDivBtns.appendChild(delBtnMain);

    taskDiv.appendChild(taskDivTitle);
    taskDiv.appendChild(taskDivDesc);
    taskDiv.appendChild(taskDivPrio);
    taskDiv.appendChild(taskDivDate);
    taskDiv.appendChild(taskDivBtns);

    taskDiv.classList.add(`taskDiv`);
    taskDiv.classList.add(`${taskIndex}`);
    displayTasks.appendChild(taskDiv);
    taskIndex += 1;
  });
  const innerGrid = document.querySelector(".innerGrid");
  innerGrid.appendChild(displayTasks);
}
