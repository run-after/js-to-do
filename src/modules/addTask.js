import projects from "./projects.js";
import projectView from "./projectView.js";
import taskFactory from "./taskFactory.js";
import removeTask from "./removeTask.js";
import {format} from "date-fns";

const addTask = (() => {
  
  //add listener to add-task-btn
  const addListener = () => {
  
    const btn = document.querySelector(".add-task-btn");
    const lastTask = document.querySelector(".last-task");

    btn.addEventListener("click", () => {
      const project = document.querySelector(".project");
      const newTask = document.createElement("div");
      newTask.classList.add("task");
      project.insertBefore(newTask, lastTask);

      // Creates a form, adds to DOM, calls createNew for info entered
      // Might move this to a module and let it appear when clicked
      // Adding all this is kinda crazy
      const form = document.createElement("form");
      form.setAttribute("method", "get");
      form.setAttribute("action", "");
      form.setAttribute("name", "add-task");

      const nameInput = document.createElement("input");
      nameInput.type = "text";
      nameInput.name = "name";
      nameInput.id = "name";
      nameInput.placeholder = "Name";

      const dateInput = document.createElement("input");
      dateInput.type = "date";
      dateInput.name = "dueDate";
      dateInput.id = "dueDate";
      dateInput.placeholder = "Date due";

      const radioContainer = document.createElement("div");
      radioContainer.classList.add("priority");
      radioContainer.textContent = "Priority:"
      const br = document.createElement("br");
      radioContainer.appendChild(br);

      const lowPriorityInput = document.createElement("input");
      lowPriorityInput.type = "radio";
      lowPriorityInput.checked = "checked";
      lowPriorityInput.name = "priority";
      lowPriorityInput.id = "low";
      lowPriorityInput.value = "Low";

      const lowPriorityLabel = document.createElement("label");
      lowPriorityLabel.setAttribute("for", "priority");
      lowPriorityLabel.textContent = "Low";

      const medPriorityInput = document.createElement("input");
      medPriorityInput.type = "radio";
      medPriorityInput.name = "priority";
      medPriorityInput.id = "med";
      medPriorityInput.value = "Medium";

      const medPriorityLabel = document.createElement("label");
      medPriorityLabel.setAttribute("for", "priority");
      medPriorityLabel.textContent = "Med";

      const highPriorityInput = document.createElement("input");
      highPriorityInput.type = "radio";
      highPriorityInput.name = "priority";
      highPriorityInput.id = "high";
      highPriorityInput.value = "High";

      const highPriorityLabel = document.createElement("label");
      highPriorityLabel.setAttribute("for", "priority");
      highPriorityLabel.textContent = "High";

      const descInput = document.createElement("input");
      descInput.type = "text";
      descInput.name = "description";
      descInput.id = "description";
      descInput.placeholder = "description";

      const submit = document.createElement("button");
      submit.classList.add("submit");
      submit.type = "button";
      submit.textContent = "submit";

      newTask.appendChild(form);
      form.appendChild(nameInput);
      form.appendChild(dateInput);
      radioContainer.appendChild(lowPriorityLabel);
      radioContainer.appendChild(lowPriorityInput);
      radioContainer.appendChild(medPriorityLabel);
      radioContainer.appendChild(medPriorityInput);
      radioContainer.appendChild(highPriorityLabel);
      radioContainer.appendChild(highPriorityInput);
      form.appendChild(radioContainer);
      form.appendChild(descInput);
      form.appendChild(submit);

      // Listener for submit button
      submit.addEventListener("click", () => {
        const name = document.getElementById("name").value;
        let date = document.getElementById("dueDate").value;
        date = format(Date.parse(date), "PPPP");
        // Sets priority to level selected
        let priority = document.querySelectorAll("input[name='priority']");
        for (const level of priority){
          if (level.checked) {
            priority = level.value;
          }
        };
        let description = document.getElementById("description").value;
        // Do not allow blank name, date, or description
        if(name && date && description){
          createNew(name, date, priority, description)
          const currentTab = document.querySelector(".selected");
          let index = currentTab.getAttribute("data-index");
          projectView.projectView(index);
        };
      });
      // ^^ Creates a form, adds to DOM, calls createNew for info entered ^^

    });

  };

  // Create task box on DOM from existing tasks in project
  const listExistingTasks = (item, taskID, projectIndex) => {
    
    if(item){ // Checks if item is null or not(deleted)
      
      const project = document.querySelector(".project");
      const task = document.createElement("div");

      const deleteButton = document.createElement("div");//////////
      deleteButton.textContent = "X";///////////////////////////
      deleteButton.classList = "delete";////////////////////////////
      deleteButton.style.position = "absolute";//////////////////////

      task.classList.add("task");
      // Set task-index for delete button
      task.setAttribute("data-task-index", taskID);///////////
      // Set project-index to find parent
      task.setAttribute("data-project-index", projectIndex);/////////////
      const name = document.createElement("div");
      name.classList.add("name");
      name.textContent = item.name;

      task.appendChild(deleteButton);////////////////////////////
      task.appendChild(name);
      const dueDate = document.createElement("div");
      dueDate.classList.add("dueDate");
      dueDate.textContent = `Due on: ${item.dueDate}`;
      task.appendChild(dueDate);
      const priority = document.createElement("div");
      priority.classList.add("priority");
      priority.textContent = `Priority: ${item.priority}`;
      // Set background color depending on priority
      if(item.priority == 'Low'){
        task.style.background = "rgb(127, 191, 63)";
      }else if(item.priority == "Medium"){
        task.style.background = "rgb(255, 252, 117)";
      }else {
        task.style.background = "rgb(255, 112, 114)";
      };
      task.appendChild(priority);
      const description = document.createElement("div");
      description.classList.add("description");
      description.textContent = `Description: ${item.description}`;
      task.appendChild(description);
      
      project.appendChild(task);

      // Listener for delete button
      deleteButton.addEventListener("click", (e) => {
        
        const index = e.target.parentElement.getAttribute("data-task-index");
        removeTask.removeTask(projectIndex, index);
      });
    };
  };

  const createNew = (name, dueDate, priority, description) => {
    const currentTab = document.querySelector(".selected");
    let index = currentTab.getAttribute("data-index");
    // Adds a task to the project
    projects.projects[index].tasks.push(taskFactory.taskFactory(name, dueDate, priority, description));
  };


  return {addListener, listExistingTasks}

})();

export default {addTask}