import projects from "./projects.js";
import taskFactory from "./taskFactory.js";
import storeLocally from "./localStorage.js";

const createTask = (name, dueDate, priority, description) => {

    const currentTab = document.querySelector(".selected");
    let index = currentTab.getAttribute("data-index");
    projects.projects[index].tasks.push(taskFactory.taskFactory(name, dueDate, priority, description));

    storeLocally.store();
};

export default {createTask}