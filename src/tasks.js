const list = [];

export function addTask(e) {
  // Check if target element is the desired button
  if (e.target && e.target.matches("button")) {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    console.log(title, description);

    list.push(newTask(title, description));

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

export function newTask(title, description, dueDate, priority) {
  return {
    title,
    description,
    dueDate,
    priority,
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
