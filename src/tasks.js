import { compareAsc, format } from "date-fns";
import { createTaskForm } from "./form";
import { loadTasks } from "./loadTasks";
import { sideBarLoad } from "./sidebar";

function listController() {
  const projectList = [
    {
      name: "Project One",
      tasks: [
        newTask(
          "Task 1",
          "Description of Task 1",
          "High priority",
          "2023-03-01"
        ),
        newTask(
          "Task 2",
          "Description of Task 2",
          "Standard priority",
          "2023-03-02"
        ),
      ],
    },
  ];

  function showList() {
    console.log("Here's the project list: ", projectList);
  }

  function createProject(name) {
    const tasks = [];
    projectList.push({ name, tasks });
  }

  function editProject() {}

  function addTask(projectIndex, title, description, priority, dueDate) {
    projectList[projectIndex].tasks.push(
      newTask(title, description, priority, dueDate)
    );
  }

  function editTask(
    projectIndex,
    taskIndex,
    title,
    description,
    priority,
    dueDate
  ) {
    projectList[projectIndex].tasks[taskIndex].title = title;
    projectList[projectIndex].tasks[taskIndex].description = description;
    projectList[projectIndex].tasks[taskIndex].priority = priority;
    projectList[projectIndex].tasks[taskIndex].dueDate = dueDate;
  }

  return {
    showList,
    createProject,
    addTask,
    editTask,
    projectList,
  };
}

export const myListController = listController();

export function addTask(e, projectIndex) {
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

    myListController.addTask(
      projectIndex,
      title,
      description,
      priority(),
      dueDate
    );
    myListController.showList();
    sideBarLoad();
    loadTasks(projectIndex);
    createTaskForm(projectIndex);
    return;
  }
}

export function addEditTask(e, projectIndex) {
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

    myListController.editTask(
      projectIndex,
      taskIndex,
      title,
      description,
      priority(),
      dueDate
    );
    myListController.showList();
    sideBarLoad();
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
