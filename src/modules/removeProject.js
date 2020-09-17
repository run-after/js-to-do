import projects from "./projects.js";
import projectView from "./projectView.js";

// pretty sure this works as expected
const removeProject = (index) => {
  console.log("before delete" +projects.projects)
  console.log(index)
  const selectedProject = document.querySelector(`[data-index="${index}"]`);
  selectedProject.remove();
  projects.projects.splice(index, 1, ''); // replace with empty string so it doesn't break.. maybe need to retool so
  console.log("after delete" +projects.projects)
  
  // find first tab
  const parent = document.querySelector(".project-tabs");
  const firstTab = parent.firstElementChild;
  // find selected tab
  const selectedTab = document.querySelector(".selected");
  // remove selected class IF IT WASN"T DELETED
  if(selectedTab){
    selectedTab.classList.remove("selected");
  };
  // add selected class to firstTab
  firstTab.classList.add("selected");
  // Updates main screen to show firstTab's tasks
  const data = firstTab.getAttribute("data-index");
  projectView.projectView(data);

};

export default {removeProject}

