import projects from "./projects.js";
import addTaskToDOM from "./addTaskToDOM.js";

const projectView = (projectID) => {
  const tasks = projects.projects[projectID].tasks;

  // clears container and makes new project div (own function?)
  const container = document.querySelector(".container");
  container.innerHTML = '';
  const project = document.createElement("div");
  project.classList.add("project");

  container.appendChild(project);

  // Calls to create task box with existing tasks
  const listTasks = (item, index) => {
    
    addTaskToDOM.addTaskToDOM.listExistingTasks(item, index, projectID);
  }
  
  if(tasks.length > 0) {
    tasks.forEach(listTasks);
  }

  // This creates the add task btn
  const lastTask = document.createElement("div");
  lastTask.classList.add("task");
  lastTask.classList.add("last-task");
  project.appendChild(lastTask);
  const button = document.createElement("button");
  button.classList.add("add-task-btn");
  button.textContent = "+";
  lastTask.appendChild(button);
  
  addTaskToDOM.addTaskToDOM.addListener();
};

export default {projectView}