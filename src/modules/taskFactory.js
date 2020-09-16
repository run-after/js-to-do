function taskFactory(name, dueDate, priority, description) {
  return {
    name: name,
    dueDate: dueDate,
    priority: priority,
    description: description,
  }
};

export default {taskFactory}