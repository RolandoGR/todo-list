import { createTaskForm, loadForm } from "./form";
import { loadTasks } from "./loadTasks";
import { newTaskBtn } from "./newTaskBtn";
import { projectController } from "./projectController";
import { myListController } from "./tasks";

export function sideBarLoad(list) {
  function delTask(e) {
    // remove object from taskList
    if (e.target && e.target.matches("#delBtn")) {
      const taskDiv = e.target.parentNode;
      const projectIndex = parseInt(taskDiv.getAttribute("id").substring(5));
      myListController.projectList.splice(projectIndex, 1);
      sideBarLoad();
    }
  }

  function editTask(e) {
    if (e.target && e.target.matches("#editBtn")) {
      const taskDiv = e.target.parentNode;
      const projectIndex = parseInt(taskDiv.getAttribute("id").substring(5));
      const innerGrid = document.querySelector(".innerGrid");
      innerGrid.innerHTML = "";
      loadTasks(projectIndex);
      createTaskForm(projectIndex, "editMode");
    }
  }

  const sidebar = document.querySelector(".sidebar");

  sidebar.innerHTML = "";

  // create a div element that newProject input and addProjBtn
  const newProj = document.createElement("div");
  newProj.classList.add("newProj");

  // create a label for the nameProj input
  const nameProjLabel = document.createElement("label");
  nameProjLabel.setAttribute("for", "nameProjLabel");
  nameProjLabel.setAttribute("id", "nameProjLabel");

  // create the nameProj input
  const nameProjInput = document.createElement("input");
  nameProjInput.setAttribute("type", "text");
  nameProjInput.setAttribute("id", "nameProjInput");
  nameProjInput.setAttribute("name", "nameProjInput");
  nameProjInput.setAttribute("placeholder", "Create a new Project");

  // addProjBtn
  const addProjBtn = document.createElement("button");
  addProjBtn.classList.add("addProjBtn");
  addProjBtn.setAttribute("id", "addProjBtn");
  addProjBtn.textContent = "+";
  addProjBtn.addEventListener("click", () => {
    const lastIndex = myListController.projectList.length;
    myListController.createProject(nameProjInput.value);
    sideBarLoad();
    console.log("Loading", lastIndex);
    loadTasks(lastIndex);
    createTaskForm(lastIndex);
  });

  newProj.appendChild(nameProjLabel);
  newProj.appendChild(nameProjInput);
  newProj.appendChild(addProjBtn);
  sidebar.appendChild(newProj);

  const dashboard = document.createElement("button");
  dashboard.textContent = "Dashboard";
  dashboard.addEventListener("click", () => {
    loadAll();
  });

  sidebar.appendChild(dashboard);

  let i = 0;
  myListController.projectList.forEach((element) => {
    // delBtn
    const delBtn = document.createElement("button");
    delBtn.classList.add("sidebarBtn");
    delBtn.setAttribute("id", "delBtn");
    delBtn.textContent = "Del";
    delBtn.addEventListener("click", delTask);

    //editBtn
    const editBtn = document.createElement("button");
    editBtn.classList.add("sidebarBtn");
    editBtn.setAttribute("id", "editBtn");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", (e) => {
      const selectedIndex = parseInt(
        e.target.parentNode.getAttribute("id").substring(5)
      );
      console.log(selectedIndex);
      createTaskForm(selectedIndex);
      loadTasks(selectedIndex);
    });

    //taskDiv creation
    const taskDiv = document.createElement("div");
    taskDiv.setAttribute("id", `task-${i}`);
    taskDiv.classList.add("sidebarDiv");
    taskDiv.textContent = `${element.name}`;

    //append every div
    sidebar.appendChild(taskDiv);
    taskDiv.appendChild(editBtn);
    taskDiv.appendChild(delBtn);

    i += 1;
  });
}
