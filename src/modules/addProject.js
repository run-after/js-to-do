import projects from "./projects.js";
import projectFactory from "./projectFactory.js";
import taskFactory from './taskFactory.js';
import projectView from "./projectView";
import addTask from "./addTask.js";

const addProject = (() => {

  //add listener to add-project-btn and call right away
  const addListener = (() => {
    const btn = document.querySelector(".add-project-btn");
    const lastTab = document.querySelector(".last-tab");

    btn.addEventListener("click", () => {
      // 
      const projectTabs = document.querySelector(".project-tabs");
      const newTab = document.createElement("div");
      newTab.classList.add("tab");

      // Remove all other .selected tabs when generated
      const selectedElement = document.querySelector(".selected");
      selectedElement.classList.remove("selected");
      // And make the new tab .selected
      newTab.classList.add("selected");
      
       // set data-index: x
      const index = projects.projects.length;
      newTab.setAttribute("data-index", index);
      const projectName = prompt("New project name?");
      newTab.textContent = projectName;
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete");
      deleteBtn.textContent = "X";
      newTab.appendChild(deleteBtn);
      // Insert tab into DOM
      projectTabs.insertBefore(newTab, lastTab);
      createProject(projectName);
      // View current project on main page
      projectView.projectView(index)

      // retrieve data-index and make current tab selected
      newTab.addEventListener("click", (e) => {
        let index = e.target.dataset.index;

        // Remove all other .selected tabs
        const selectedElement = document.querySelector(".selected");
        selectedElement.classList.remove("selected");
        // And make the new tab .selected
        e.target.classList.add("selected");

        projectView.projectView(index);

      })

    });

  })();

  const createProject = (name) => {
    let project = projectFactory.projectFactory(name);
    projects.projects.push(project);
  }

  return {addListener, createProject}
})();

export default {addProject}