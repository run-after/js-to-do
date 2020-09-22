import projects from "./projects.js";

const editTask = (name, date, priority, description, projectIndex, taskIndex) => {
  const todo = projects.projects[projectIndex].tasks[taskIndex];
        
  todo.name = name;
  todo.dueDate = date;
  todo.priority = priority;
  todo.description = description;
};

export default {editTask}