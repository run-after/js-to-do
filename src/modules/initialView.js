import projects from "./projects.js";
import projectView from "./projectView.js";
import removeProject from "./removeProject.js";
import projectFactory from "./projectFactory.js"

// Hopefull can get this sorted into a few functions
const initialView = (() => {
  if(projects.projects.length > 0){
    // create tabs and display tasks
    projects.projects.forEach((item, index) => {
      if(item){// If item wasn't deleted
      
        const lastTab = document.querySelector(".last-tab");
        const projectTabs = document.querySelector(".project-tabs");
        // Create new project tab
        const newTab = document.createElement("div");
        newTab.classList.add("tab");
        
        
        // And make the new tab .selected
        //if(index == 0){newTab.classList.add("selected")};
        
        newTab.setAttribute("data-index", index);
        newTab.textContent = item.title;
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete");
        deleteBtn.textContent = "X";
        newTab.appendChild(deleteBtn);
        // Insert tab into DOM
        projectTabs.insertBefore(newTab, lastTab);

        newTab.addEventListener("click", (e) => {
          // Sloppy - when clicking delete button, it would add selected to
          // the delete button without if statement
          // Maybe a click button on delete button will fix this
          if(e.target.classList.contains("tab")){
            
            // Remove all other .selected tabs
            const selectedElement = document.querySelector(".selected");
            selectedElement.classList.remove("selected");
            // And make the new tab .selected
            e.target.classList.add("selected");
            // View selected project in main screen
            const index = e.target.dataset.index;
            projectView.projectView(index);

          };
        });
        // Add listener to delete project when delete button is pressed
        deleteBtn.addEventListener("click", (e) => {
          let index = e.target.parentElement.getAttribute("data-index");
          removeProject.removeProject(index);
          
        });
      };
    });
                  
    // find first tab
    const parent = document.querySelector(".project-tabs");//
    const firstTab = parent.firstElementChild;//
    const firstTabIndex = firstTab.getAttribute("data-index");
    // add selected class to firstTab
    firstTab.classList.add("selected");

    projectView.projectView(firstTabIndex);
  }else {
  
    const createProject = (name) => {
      let project = projectFactory.projectFactory(name);
      projects.projects.push(project);
    };
      
    // Find last tab, project-tabs(parent)
    const lastTab = document.querySelector(".last-tab");
    const projectTabs = document.querySelector(".project-tabs");
    // Create new project tab
    const newTab = document.createElement("div");
    newTab.classList.add("tab");
    // And make the new tab .selected
    newTab.classList.add("selected");
    
    // set data-index to index
    const index = projects.projects.length;
    newTab.setAttribute("data-index", index);
    // Create new project tab
    const projectName = 'General';
    newTab.textContent = projectName;
    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.textContent = "X";
    newTab.appendChild(deleteBtn);
    // Insert tab into DOM
    projectTabs.insertBefore(newTab, lastTab);
    
    createProject(projectName);
    // View current project on main page
    projectView.projectView(index);
    
    // Set listener to make current tab selected
    newTab.addEventListener("click", (e) => {
      // Sloppy - when clicking delete button, it would add selected to
      // the delete button without if statement
      // Maybe a click button on delete button will fix this
      if(e.target.classList.contains("tab")){
        
        // Remove all other .selected tabs
        const selectedElement = document.querySelector(".selected");
        selectedElement.classList.remove("selected");
        // And make the new tab .selected
        e.target.classList.add("selected");
        // View selected project in main screen
        const index = e.target.dataset.index;
        projectView.projectView(index);
      };
    });
    // Add listener to delete project when delete button is pressed
    deleteBtn.addEventListener("click", (e) => {
      let index = e.target.parentElement.getAttribute("data-index");
      removeProject.removeProject(index);
    });
  };
        
})();
export default {initialView}