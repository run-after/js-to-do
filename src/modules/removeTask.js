import projects from "./projects.js";
import storeLocally from "./localStorage.js";

const removeTask = (projectIndex, taskIndex) => {
  
  const selectedProject = projects.projects[projectIndex];
  const selectedTask = document.querySelector(`[data-task-index="${taskIndex}"]`);
  // Remove from DOM (Maybe move to seperate module)
  selectedTask.remove();
  // Remove from project.tasks array
  selectedProject.tasks.splice(taskIndex, 1, null); // replace with null so index won't change on tasks

  storeLocally.store();
};

export default {removeTask}

