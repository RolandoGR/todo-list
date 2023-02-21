import { addTask, cancelTask } from "./tasks";
import { compareAsc, endOfTomorrow, format } from "date-fns";

export function createTask() {
  if (document.querySelector(".form")) {
    return;
  }

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

  // create a label for the priority input
  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "priority");
  priorityLabel.textContent = "Check if important";

  // create priority checkbox
  const priorityInput = document.createElement("input");
  priorityInput.setAttribute("id", "priority");
  priorityInput.type = "checkbox";

  // create a label for the date input
  const dateLabel = document.createElement("label");
  dateLabel.setAttribute("for", "date");
  dateLabel.textContent = "Due date:";

  // create date input
  const dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("id", "date");
  dateInput.setAttribute("name", "date");
  dateInput.setAttribute("value", endOfTomorrow());

  // create the submit button
  const submitButton = document.createElement("button");
  submitButton.classList.add("addTask");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "+ Add Task";
  submitButton.addEventListener("click", addTask);

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
