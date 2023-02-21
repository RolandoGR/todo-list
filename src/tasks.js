import { compareAsc, format } from "date-fns";

const list = [];

export function cancelTask() {
  form.replaceChildren();
}

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

    list.push(newTask(title, description, priority(), dueDate));
    function showList() {
      console.log("Here's the list: ", list);
    }
    showList();
    return {
      showList,
      list,
    };
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
