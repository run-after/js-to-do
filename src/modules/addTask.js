import projects from "./projects.js";
import projectView from "./projectView.js";
import taskFactory from "./taskFactory.js"

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
      dateInput.type = "text";
      dateInput.name = "dueDate";
      dateInput.id = "dueDate";
      dateInput.placeholder = "dueDate";

      const priorityInput = document.createElement("input");
      priorityInput.type = "text";
      priorityInput.name = "priority";
      priorityInput.id = "priority";
      priorityInput.placeholder = "priority";

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
      form.appendChild(priorityInput);
      form.appendChild(descInput);
      form.appendChild(submit);

      submit.addEventListener("click", () => {
        let name = document.getElementById("name").value;
        let date = document.getElementById("dueDate").value;
        let priority = document.getElementById("priority").value;
        let description = document.getElementById("description").value;
        createNew(name, date, priority, description)
        const currentTab = document.querySelector(".selected");
        let index = currentTab.getAttribute("data-index");
        projectView.projectView(index);
      });
      // ^^ Creates a form, adds to DOM, calls createNew for info entered ^^

    });

  };

  // Create task box on DOM from existing tasks in project
  const listExistingTasks = (item) => {
    
    const project = document.querySelector(".project");
    const task = document.createElement("div");
    task.classList.add("task");
    const name = document.createElement("div");
    name.classList.add("name");
    name.textContent = item.name;
    task.appendChild(name);
    const dueDate = document.createElement("div");
    dueDate.classList.add("dueDate");
    dueDate.textContent = item.dueDate;
    task.appendChild(dueDate);
    const priority = document.createElement("div");
    priority.classList.add("priority");
    priority.textContent = item.priority;
    task.appendChild(priority);
    const description = document.createElement("div");
    description.classList.add("description");
    description.textContent = item.description;
    task.appendChild(description);
    
    project.appendChild(task);
  }

  const createNew = (name, dueDate, priority, description) => {

    const currentTab = document.querySelector(".selected");
    let index = currentTab.getAttribute("data-index");
        // need to create form first

    // This adds a task to the project
    projects.projects[index].tasks.push(taskFactory.taskFactory(name, dueDate, priority, description));
  }



  return {addListener, listExistingTasks}
})();

export default {addTask}


/* FORM HTML

    <div id="modal">
      <div class="modal-content">
        <form name="addBook" action="" method="get">
          <label for="title">Title:</label>
          <input type="text" id="title" name="title">
          <br>
          <label for="author">Author:</label>
          <input type="text" id="author" name="author">
          <br>
          <label for="pages">pages:</label>
          <input type="text" id="pages" name="pages">
          <br>
          <label for="read">Read?</label>
          <div class="radios">
            <input type="radio" name="read" value="true">Yes
            <input type="radio" name="read" value="false" checked="checked">No
          </div>
          <br>
          <button id="add-book-btn" type="button">Add Book</button>

        </form>


        *** JS ***

        // Pops up form
newBtn.onclick = function () {
  modal.style.display = "block";
}
*/