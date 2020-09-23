import projects from "./projects.js";

const store = () => {
  localStorage.clear();
  localStorage.setItem('projects', JSON.stringify(projects.projects));
};

export default {store};