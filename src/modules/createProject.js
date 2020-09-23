import projects from "./projects.js";
import projectFactory from "./projectFactory.js";
import storeLocally from "./localStorage.js";

const createProject = (name) => {
  
  let project = projectFactory.projectFactory(name);
  projects.projects.push(project);
  
  storeLocally.store();
};

export default {createProject}