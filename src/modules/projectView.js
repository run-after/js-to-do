import projects from "./projects.js";
import addTask from "./addTask.js";

const projectView = (index) => {
  const tasks = projects.projects[index].tasks;

  // clears container and makes new project div (own function?)
  const container = document.querySelector(".container");
  container.innerHTML = '';
  const project = document.createElement("div");
  project.classList.add("project");

  container.appendChild(project);
  

  // Calls to create task box with existing tasks
  const listTasks = (item) => {
    addTask.addTask.listExistingTasks(item);
  }
  
  if(tasks.length > 0) {
    tasks.forEach(listTasks);
  }

  // This creates the add task btn. (own function?)
  const lastTask = document.createElement("div");
  lastTask.classList.add("task");
  lastTask.classList.add("last-task");
  project.appendChild(lastTask);
  const button = document.createElement("button");
  button.classList.add("add-task-btn");
  button.textContent = "+";
  lastTask.appendChild(button);
  addTask.addTask.addListener();
};

export default {projectView}