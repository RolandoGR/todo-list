import { compareAsc, format } from "date-fns";

function listController() {
  const list = [];

  function showList() {
    console.log("Here's the list: ", list);
  }

  function add(item) {
    list.push(item);
  }

  function sideBarLoad() {
    const sidebar = document.querySelector(".sidebar");
    let i = 0;
    sidebar.innerHTML = "";
    list.forEach((element) => {
      const taskDiv = document.createElement("div");
      taskDiv.setAttribute("id", `task-${i}`);
      taskDiv.classList.add("sidebarDiv");
      taskDiv.textContent = `${element.title}`;
      sidebar.appendChild(taskDiv);
      i += 1;
    });
  }

  return {
    showList,
    add,
    sideBarLoad,
  };
}

const myListController = listController();

export function addTask(e) {
  // Check if target element is the desired button
  if (e.target && e.target.matches(".addTask")) {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const priority = function () {
      let prioStatus = "";
      if (document.getElementById("priority").checked) {
        prioStatus = "High priority";
      } else {
        prioStatus = "Standard priority";
      }
      return prioStatus;
    };
    const dueDate = document.getElementById("date").value;

    myListController.add(newTask(title, description, priority(), dueDate));
    myListController.showList();
    myListController.sideBarLoad();
    return;
  }
}

export function newTask(title, description, priority, dueDate) {
  return {
    title,
    description,
    priority,
    dueDate,
  };
}

/* export function tasks() {
  let list = [];

  function newTask(title, description, dueDate, priority) {
    return {
      title,
      description,
      dueDate,
      priority,
    };

    return {
      newTask,
    };
  }
}
export function createTask() {
  const title = prompt("Please enter your title");
  const description = prompt("Please enter your description");

  list.push(newTask(title, description));
}

return {
  newTask,
  createTask,
};
*/
