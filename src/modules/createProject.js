import projects from "./projects.js";
import projectFactory from "./projectFactory.js";

const createProject = (name) => {
  
  let project = projectFactory.projectFactory(name);
  projects.projects.push(project);

};

export default {createProject}