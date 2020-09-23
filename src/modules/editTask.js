import projects from "./projects.js";
import storeLocally from "./localStorage.js";

const editTask = (name, date, priority, description, projectIndex, taskIndex) => {
  const todo = projects.projects[projectIndex].tasks[taskIndex];
        
  todo.name = name;
  todo.dueDate = date;
  todo.priority = priority;
  todo.description = description;

  storeLocally.store();
};

export default {editTask}