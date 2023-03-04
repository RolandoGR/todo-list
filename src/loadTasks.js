import { createTaskForm } from "./form";
import { newTaskBtn } from "./newTaskBtn";
import { projectController } from "./projectController";
import { myListController } from "./tasks";

export function loadAll() {
  const innerGrid = document.querySelector(".innerGrid");
  innerGrid.innerHTML = "";

  console.log(
    myListController.projectList.length,
    myListController.projectList,
    myListController.projectList[0]
  );
  for (let i = 0; i < myListController.projectList.length; i++) {
    loadTasks("all", i);

    console.log(i + ": " + myListController.projectList[i]);
  }

  //dashboard header
  const dashHeader = document.createElement("h2");
  dashHeader.textContent += "Dashboard";
  dashHeader.classList.add("dashHeader");
  innerGrid.insertBefore(dashHeader, innerGrid.firstChild);
  console.log(currentIndex);
}

export function loadTasks(index, i) {
  let projectIndex;

  if (index === "all") {
    projectIndex = i;
  } else {
    projectIndex = projectController(index);
  }

  if (document.querySelector(".displayProj") && index === "all") {
    // Do nothing
  } else {
    while (document.querySelector(".displayProj")) {
      document.querySelector(".displayProj").remove();
      console.log("Removed dispayProj");
    }
  }

  const displayProj = document.createElement("div");
  displayProj.classList.add("displayProj");
  displayProj.setAttribute("id", `dp${projectIndex}`);

  const projectTitleDiv = document.createElement("h3");
  projectTitleDiv.textContent = `${myListController.projectList[projectIndex].name}`;
  projectTitleDiv.classList.add("projTitleDisplay");
  displayProj.appendChild(projectTitleDiv);

  let taskIndex = 0;
  myListController.projectList[projectIndex].tasks.forEach((element) => {
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
    editBtnMain.setAttribute("id", `edit${taskIndex}`);
    editBtnMain.classList.add("editBtn");

    editBtnMain.addEventListener("click", (e) => {
      const selectedTask = e.target.getAttribute("id").substring(4);
      createTaskForm(projectIndex, "editMode", selectedTask);
      loadTasks(projectIndex);
    });
    // delBtn
    const delBtnMain = document.createElement("button");
    delBtnMain.setAttribute("id", `del${taskIndex}`);
    delBtnMain.classList.add("delBtn");

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
    displayProj.appendChild(taskDiv);
    taskIndex += 1;
  });
  const innerGrid = document.querySelector(".innerGrid");
  innerGrid.appendChild(displayProj);

  //remove dashboard Header in case there's one
  if (document.querySelector(".dashHeader")) {
    document.querySelector(".dashHeader").remove();
    console.log("deleted dashboard header");
  }
}
