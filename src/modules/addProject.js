import projects from "./projects.js";
import projectFactory from "./projectFactory.js";
import projectView from "./projectView";
import removeProject from "./removeProject.js";

const addProject = (() => {

  const createProjectTab = () => {
    // Create project tab to DOM
    const lastTab = document.querySelector(".last-tab");
    const projectTabs = document.querySelector(".project-tabs");
    const newTab = document.createElement("div");
    newTab.classList.add("tab");

    // Remove all other .selected tabs when generated
    const selectedElement = document.querySelector(".selected");
    selectedElement.classList.remove("selected");
    // And make the new tab .selected
    newTab.classList.add("selected");
    
    // set data-index
    const index = projects.projects.length;
    newTab.setAttribute("data-index", index);
    const projectName = prompt("New project name?");
    newTab.textContent = projectName;
    
    // Create delete button on DOM
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.textContent = "X";
    newTab.appendChild(deleteBtn);
    // Insert tab into DOM
    projectTabs.insertBefore(newTab, lastTab);
    // Create project
    createProject(projectName);
    // View current project on main page
    projectView.projectView(index);

    // Add listener to select tab that is clicked and display
    newTab.addEventListener("click", (e) => {
      // Sloppy - when clicking delete button, it would add selected to
      // the delete button without if statement
      // Maybe a click button on delete button will fix this
      if(e.target.classList.contains("tab")){
      
        let index = e.target.dataset.index;
        
        // Remove .selected tab
        const selectedElement = document.querySelector(".selected");
        selectedElement.classList.remove("selected");
        // And make the new tab .selected
        e.target.classList.add("selected");

        // Display project in main screen
        projectView.projectView(index);
      
      };
    });
    // Add listener to delete project when delete button is pressed
    deleteBtn.addEventListener("click", (e) => {
      let index = e.target.parentElement.getAttribute("data-index");
      removeProject.removeProject(index);
    });
  };

  //add listener to add-project-btn and call right away
  const addListener = (() => {
    const btn = document.querySelector(".add-project-btn");
    // Add a project listener
    btn.addEventListener("click", createProjectTab);
  })();

  // Create project
  const createProject = (name) => {
    let project = projectFactory.projectFactory(name);
    projects.projects.push(project);
  };

  return {addListener, createProject, createProjectTab}
})();

export default {addProject}