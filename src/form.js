import { addTask, addEditTask } from "./tasks";
import { compareAsc, endOfTomorrow, format } from "date-fns";
import { myListController } from "./tasks";
import lightFormat from "date-fns/lightFormat";
import parseISO from "date-fns/parseISO";

export function createTaskForm(mode, projectIndex) {
  let editMode = false;
  const currentProj = myListController.projectList[projectIndex];
  if (projectIndex === undefined) {
    projectIndex = 0;
  } else {
    projectIndex = n;
  }
  console.log(projectIndex);
  if (mode === "editMode") {
    editMode = true;
    console.log("EDITING", projectIndex);
  }
  if (document.querySelector(".form") && !editMode) {
    return;
  }

  // create a div element that contains the inputs
  const form = document.createElement("div");
  form.classList.add("form");
  form.setAttribute("dataIndex", projectIndex);

  // create a label for the title input
  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  titleLabel.setAttribute("id", "titleLabel");

  if (!editMode) {
    titleLabel.textContent = "Enter a title:";
  } else {
    titleLabel.textContent = "Title:";
  }

  // create the title input
  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("id", "title");
  titleInput.setAttribute("name", "title");
  if (editMode) {
    titleInput.setAttribute("value", currentProj.tasks.title);
  }

  // create a description label for the message textarea
  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("for", "description");
  descriptionLabel.textContent = "Description:";

  console.log("checkpoint");
  // create the description textarea
  const descriptionTextarea = document.createElement("textarea");
  descriptionTextarea.setAttribute("id", "description");
  descriptionTextarea.setAttribute("name", "description");
  if (editMode) {
    descriptionTextarea.textContent += currentProj.tasks.description;
  }

  // create a label for the priority input
  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "priority");
  priorityLabel.textContent = "Check if important";

  // create priority checkbox
  const priorityInput = document.createElement("input");
  priorityInput.setAttribute("id", "priority");
  priorityInput.type = "checkbox";
  if (editMode) {
    if (currentProj.tasks.priority === "High priority") {
      priorityInput.checked = true;
    }
  }

  console.log("checkpoint");
  // create a label for the date input
  const dateLabel = document.createElement("label");
  dateLabel.setAttribute("for", "date");
  dateLabel.textContent = "Due date:";

  // create date input
  const dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("id", "date");
  dateInput.setAttribute("name", "date");

  console.log(myListController.projectList[projectIndex]);

  console.log(currentProj.tasks.title);

  console.log(currentProj.tasks.dueDate);

  if (editMode) {
    dateInput.setAttribute(
      "value",
      lightFormat(parseISO(currentProj.tasks.dueDate), "yyyy-MM-dd")
    );
  } else {
    dateInput.setAttribute("value", lightFormat(endOfTomorrow(), "yyyy-MM-dd"));
  }
  console.log("checkpoint");
  // create submit button
  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");

  if (!editMode) {
    submitButton.classList.add("addTask");
    submitButton.textContent = "+ Add Task";
    submitButton.addEventListener("click", (e) => {
      addTask(e, projectIndex);
    });
  } else {
    submitButton.classList.add("editTask");
    submitButton.textContent = "Edit task";
    submitButton.addEventListener("click", (e) => {
      console.log("hello");
      addEditTask(e, projectIndex);
    });
  }

  // create the cancel button
  const cancelButton = document.createElement("button");
  cancelButton.classList.add("cancelTask");
  cancelButton.setAttribute("type", "button");
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", function () {
    form.remove();
  });

  // add the form elements to the form
  form.appendChild(titleLabel);
  form.appendChild(titleInput);
  form.appendChild(descriptionLabel);
  form.appendChild(descriptionTextarea);
  form.appendChild(priorityLabel);
  form.appendChild(priorityInput);
  form.appendChild(dateLabel);
  form.appendChild(dateInput);
  form.appendChild(submitButton);
  form.appendChild(cancelButton);

  // add the form to the document body
  document.querySelector(".innerGrid").appendChild(form);
}
