import addProject from "./addProject.js";
import projects from "./projects.js";
import projectView from "./projectView.js";

const removeProject = (index) => {
  
  const selectedProject = document.querySelector(`[data-index="${index}"]`);
  // Remove from DOM
  selectedProject.remove();
  // Remove from projects list
  projects.projects.splice(index, 1, null); // replace with null so index won't change on projects
  
  // find selected tab
  const selectedTab = document.querySelector(".selected");
  // remove selected class IF IT WASN"T DELETED
  if(selectedTab){
    selectedTab.classList.remove("selected");
  };
  // find first tab
  const parent = document.querySelector(".project-tabs");//
  const firstTab = parent.firstElementChild;//
  
  // add selected class to firstTab
  firstTab.classList.add("selected");
  const data = firstTab.getAttribute("data-index");

  if(data){
    projectView.projectView(data);
  }else {
    addProject.addProject.createProjectTab();
  }



};

export default {removeProject}
