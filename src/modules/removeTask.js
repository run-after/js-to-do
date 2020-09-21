import projects from "./projects.js";

const removeTask = (projectIndex, taskIndex) => {
  
  const selectedProject = projects.projects[projectIndex];
  const selectedTask = document.querySelector(`[data-task-index="${taskIndex}"]`);

  // Remove from DOM
  selectedTask.remove();
  // Remove from project.tasks array
  selectedProject.tasks.splice(taskIndex, 1, null); // replace with null so index won't change on tasks
  
  console.log(selectedProject)


};

export default {removeTask}