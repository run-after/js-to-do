import projects from "./projects.js";
import taskFactory from "./taskFactory.js";

const addTask = (() => {

  // Adds a task to the project
  const createNew = (name, dueDate, priority, description) => {
    const currentTab = document.querySelector(".selected");
    let index = currentTab.getAttribute("data-index");
    projects.projects[index].tasks.push(taskFactory.taskFactory(name, dueDate, priority, description));
  };

  return {createNew}

})();

export default {addTask}