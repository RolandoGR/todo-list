import { initialPageLoad } from "./initialPageLoad";
import { myListController } from "./tasks";

/* const projectList = loadProjectsFromStorage();

function loadProjectsFromStorage() {
  if (localStorage.getItem("projectList")) {
    return JSON.parse(localStorage.getItem("projectList"));
  }
  return [];
}

function saveProjectsToStorage(projectList) {
  localStorage.setItem("projectList", JSON.stringify(projectList));
}
loadProjectsFromStorage()

*/

//let projects = JSON.parse(localStorage.getItem("projects")) || [];

initialPageLoad();
