import projects from "./projects.js";
import projectView from "./projectView.js";
import editTask from "./editTask.js";

const editTaskOnDOM = (taskIndex, projectIndex) => {
  const selectedTask = projects.projects[projectIndex].tasks[taskIndex];
  const selectedTaskDOM = document.querySelector(`[data-task-index="${taskIndex}"]`)
  const name = selectedTask.name;
  const date = selectedTask.dueDate;
  const priority = selectedTask.priority;
  const description = selectedTask.description;
  
  selectedTaskDOM.remove();
  
  // Find add task button and the following task
  const lastTask = document.querySelector(".last-task");
  const followingTask = document.querySelector(`[data-task-index="${Number(taskIndex)+1}"]`);

  const project = document.querySelector(".project");
  const newTask = document.createElement("div");
  newTask.classList.add("task");

  // If there is a following task, insert before that, else before add-button
  if(followingTask){
    project.insertBefore(newTask, followingTask);
  }else {
    project.insertBefore(newTask, lastTask);
  }
  const form = document.createElement("form");
  form.setAttribute("method", "get");
  form.setAttribute("action", "");
  form.setAttribute("name", "add-task");

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "name";
  nameInput.id = "name";
  nameInput.value = name;

  const dateLabel = document.createElement("span");
  dateLabel.textContent = "Due date: ";
  dateLabel.classList.add("date-label");

  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.name = "dueDate";
  dateInput.id = "dueDate";
  dateInput.valueAsDate = new Date(date);
  
  const radioContainer = document.createElement("div");
  radioContainer.classList.add("priority");
  radioContainer.textContent = "Priority:"
  const br = document.createElement("br");
  radioContainer.appendChild(br);

  const lowPriorityInput = document.createElement("input");
  lowPriorityInput.type = "radio";
  if(priority == "Low"){lowPriorityInput.checked = "checked";}
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
  if(priority == "Medium"){medPriorityInput.checked = "checked"}

  const medPriorityLabel = document.createElement("label");
  medPriorityLabel.setAttribute("for", "priority");
  medPriorityLabel.textContent = "Med";

  const highPriorityInput = document.createElement("input");
  highPriorityInput.type = "radio";
  highPriorityInput.name = "priority";
  highPriorityInput.id = "high";
  highPriorityInput.value = "High";
  if(priority == "High"){highPriorityInput.checked = "checked"}

  const highPriorityLabel = document.createElement("label");
  highPriorityLabel.setAttribute("for", "priority");
  highPriorityLabel.textContent = "High";

  const descInput = document.createElement("textarea");
  descInput.rows="4";
  descInput.cols="30";
  descInput.name = "description";
  descInput.id = "description";
  descInput.value = description;

  const submit = document.createElement("button");
  submit.classList.add("submit");
  submit.type = "button";
  submit.textContent = "submit";

  newTask.appendChild(form);
  form.appendChild(nameInput);
  form.appendChild(dateLabel);
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
    //date = format(Date.parse(date), "PPPP");
    // Sets priority to level selected
    let priority = document.querySelectorAll("input[name='priority']");
    for (const level of priority){
      if (level.checked) {
        priority = level.value;
      };
    };
    const description = document.getElementById("description").value;
    // Do not allow blank name, date, or description

    /// THIS IS EDITING THE OBJECT!!!!!!!!!!!!
    if(name && date && description){
      editTask.editTask(name, date, priority, description, projectIndex, taskIndex);
      const currentTab = document.querySelector(".selected");
      let index = currentTab.getAttribute("data-index");
      projectView.projectView(index);
    }else {
      alert("Must fill out all fields!");
    };
  });

};

export default {editTaskOnDOM}