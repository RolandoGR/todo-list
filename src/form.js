import { addTask } from "./tasks";

export function createTask() {
  // create a div element that contains the inputs
  const form = document.createElement("div");
  form.classList.add("form");

  // create a label for the name input
  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  titleLabel.textContent = "Enter a title:";

  // create the name input
  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("id", "title");
  titleInput.setAttribute("name", "title");

  // create a description label for the message textarea
  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("for", "description");
  descriptionLabel.textContent = "Description:";

  // create the description textarea
  const descriptionTextarea = document.createElement("textarea");
  descriptionTextarea.setAttribute("id", "description");
  descriptionTextarea.setAttribute("name", "description");

  // create the submit button
  const submitButton = document.createElement("button");
  submitButton.classList.add("addTask");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Add Task";
  submitButton.addEventListener("click", addTask);

  // create a label for the priority input
  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "priority");
  priorityLabel.textContent = "Check if important";

  // create priority checkbox
  const priorityInput = document.createElement("input");
  priorityInput.type = "checkbox";

  // calendar for date selection

  // add the form elements to the form
  form.appendChild(titleLabel);
  form.appendChild(titleInput);
  form.appendChild(descriptionLabel);
  form.appendChild(descriptionTextarea);
  form.appendChild(priorityLabel);
  form.appendChild(priorityInput);
  form.appendChild(submitButton);

  // add the form to the document body
  document.body.appendChild(form);
}
