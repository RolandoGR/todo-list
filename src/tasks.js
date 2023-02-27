import { compareAsc, format } from "date-fns";
import { sideBarLoad } from "./sidebar";

function listController() {
  const list = [];

  function showList() {
    console.log("Here's the list: ", list);
  }

  function add(item) {
    list.push(item);
  }

  function edit(index, title, description, priority, dueDate) {
    list[index].title = title;
    list[index].description = description;
    list[index].priority = priority;
    list[index].dueDate = dueDate;
  }

  return {
    showList,
    add,
    edit,
    list,
  };
}

export const myListController = listController();

export function addTask(e) {
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
    sideBarLoad(myListController.list);
    return;
  }
}

export function addEditTask(e) {
  if (e.target && e.target.matches(".editTask")) {
    const taskIndex = e.target.parentNode.getAttribute("dataIndex");
    console.log(taskIndex);
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

    myListController.edit(taskIndex, title, description, priority(), dueDate);
    myListController.showList();
    sideBarLoad(myListController.list);
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
