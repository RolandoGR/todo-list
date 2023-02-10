const list = [];

export function createTask() {
  const title = prompt("Please enter your title");
  const description = prompt("Please enter your description");

  console.log(title, description);

  list.push(newTask(title, description));

  const showList = console.log("Here's the list: ", list);

  return {
    showList,
    list,
  };
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
