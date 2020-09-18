import projects from "./projects.js";
import projectView from "./projectView.js";
import removeProject from "./removeProject.js";
import addProject from "./addProject.js";

const initialView = (() => {

  // Initial tab created - May want to add a default task
// Maybe make defaultView module(will only be called once)
const lastTab = document.querySelector(".last-tab");
const projectTabs = document.querySelector(".project-tabs");
const newTab = document.createElement("div");
newTab.classList.add("tab");

// And make the new tab .selected
newTab.classList.add("selected");

  // set data-index: x
const index = projects.projects.length;// Will not work when resuming from localStorage
newTab.setAttribute("data-index", index);
const projectName = 'General';
newTab.textContent = projectName;
const deleteBtn = document.createElement("button");
deleteBtn.classList.add("delete");
deleteBtn.textContent = "X";
newTab.appendChild(deleteBtn);
// Insert tab into DOM
projectTabs.insertBefore(newTab, lastTab);
addProject.addProject.createProject(projectName);
// View current project on main page
projectView.projectView(index);

// When tab clicked, change selected tab and show project view
newTab.addEventListener("click", (e) => {
  let index = e.target.dataset.index;

  // Remove all other .selected tabs
  const selectedElement = document.querySelector(".selected");
  selectedElement.classList.remove("selected");
  // And make the new tab .selected
  e.target.classList.add("selected");

  projectView.projectView(index);

});

// Add listener to delete project when delete button is pressed
deleteBtn.addEventListener("click", (e) => {
  
  let index = e.target.parentElement.getAttribute("data-index");
  removeProject.removeProject(index);
  
});
// ^^ Initial tab created - May want to add a default task ^^
// ^^Maybe make defaultView module(will only be called once) ^^








})();




