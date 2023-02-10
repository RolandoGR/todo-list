export function initialPageLoad() {
  const content = document.getElementById("content");
  content.replaceChildren();

  const initHeader = document.createElement("h1");
  initHeader.textContent += "Project one";
  content.appendChild(initHeader);

  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  content.appendChild(sidebar);

  const btn = document.createElement("taskButton");
  btn.classList.add("taskButton");
  content.appendChild(btn);
}
