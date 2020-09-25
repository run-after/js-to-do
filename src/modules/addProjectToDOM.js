import createProject from "./createProject.js";
import projects from "./projects.js";
import projectView from "./projectView.js";
import removeProject from "./removeProject.js";

const addProjectToDOM = (() => {

  const createProjectTab = () => {

    const lastTab = document.querySelector(".last-tab");
    const projectTabs = document.querySelector(".project-tabs");
    const newTab = document.createElement("div");
    newTab.classList.add("tab");

    changeToSelectedTab(newTab);
    
    // set data-index
    const index = projects.projects.length;
    newTab.setAttribute("data-index", index);

    // Name project
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
    createProject.createProject(projectName);
    // View current project on main page
    projectView.projectView(index);
    
    // Add listener to select tab that is clicked and display
    newTab.addEventListener("click", (e) => {
      // Only select project tabs
      if(e.target.classList.contains("tab")){
        let index = e.target.dataset.index;
        changeToSelectedTab(e.target);
        // Display project in main screen
        projectView.projectView(index);
      };
    });
    
    // If cancel button was pressed when creating project... Remove project
    if(!projectName){removeProject.removeProject(index)}

    // Add listener to delete project when delete button is pressed
    deleteBtn.addEventListener("click", (e) => {
      const index = e.target.parentElement.getAttribute("data-index");
      removeProject.removeProject(index);
    });
  };
  
  //add listener to add-project-btn
  const addListener = (() => {
    const btn = document.querySelector(".add-project-btn");
    btn.addEventListener("click", createProjectTab);
  })();
  
  const changeToSelectedTab = (tab) => {
    // Find and remove .selected from currently selected tab
    const selectedElement = document.querySelector(".selected");
    selectedElement.classList.remove("selected");
    // Make selected
    tab.classList.add("selected");
  };

  return {addListener, createProjectTab}
  
})();

export default {addProjectToDOM}