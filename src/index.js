import addProject from "./modules/addProject.js"
import projects from "./modules/projects.js"
import projectView from "./modules/projectView.js"
import removeProject from "./modules/removeProject.js";
//import addTask from "./modules/addTask.js"
//import taskFactory from "./modules/taskFactory.js"


// Initial tab created - May want to add a default task
// Maybe make defaultView module(will only be called once)
const lastTab = document.querySelector(".last-tab");
const projectTabs = document.querySelector(".project-tabs");
const newTab = document.createElement("div");
newTab.classList.add("tab");

// And make the new tab .selected
newTab.classList.add("selected");

  // set data-index: x
const index = projects.projects.length;
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

newTab.addEventListener("click", (e) => {
  let index = e.target.dataset.index;

  // Remove all other .selected tabs
  const selectedElement = document.querySelector(".selected");
  selectedElement.classList.remove("selected");
  // And make the new tab .selected
  e.target.classList.add("selected");

  projectView.projectView(index);

});
// ^^ Initial tab created - May want to add a default task ^^
// ^^Maybe make defaultView module(will only be called once) ^^



/*

  First element ("General") not acting correctly. Need to update the initial
  tab creation, since it adds stuff for the delete button... not positive
  it will work

  Add local storage




*/