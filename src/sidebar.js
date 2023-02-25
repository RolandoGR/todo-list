import { createTask } from "./form";
import { myListController } from "./tasks";

export function sideBarLoad(list) {
  function delTask(e) {
    // remove object from taskList
    if (e.target && e.target.matches("#delBtn")) {
      const taskDiv = e.target.parentNode;
      const taskIndex = parseInt(taskDiv.getAttribute("id").substring(5));
      myListController.list.splice(taskIndex, 1);
      sideBarLoad(myListController.list);
    }
  }

  function editTask(e) {
    if (e.target && e.target.matches("#editBtn")) {
      const taskDiv = e.target.parentNode;
      const taskIndex = parseInt(taskDiv.getAttribute("id").substring(5));
      const innerGrid = document.querySelector(".innerGrid");
      innerGrid.innerHTML = "";
      createTask("editMode", taskIndex);
    }
  }

  const sidebar = document.querySelector(".sidebar");

  let i = 0;
  sidebar.innerHTML = "";
  myListController.list.forEach((element) => {
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
    editBtn.addEventListener("click", editTask);

    //taskDiv creation
    const taskDiv = document.createElement("div");
    taskDiv.setAttribute("id", `task-${i}`);
    taskDiv.classList.add("sidebarDiv");
    taskDiv.textContent = `${element.title}`;

    //append every div
    sidebar.appendChild(taskDiv);
    taskDiv.appendChild(editBtn);
    taskDiv.appendChild(delBtn);

    i += 1;
  });
}
