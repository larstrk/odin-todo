import Todo from './todo.js';
import Project from './project.js';

// Function to create a new todo
function createTodo(title, description, dueDate, priority, notes = '', checklist = []) {
  return new Todo(title, description, dueDate, priority, notes, checklist);
}

// Function to create a new project
function createProject(title) {
  return new Project(title);
}

// Function to add a todo to a project
function addTodoToProject(todo, project) {
  project.addTodo(todo);
}

// Function to remove a todo from a project
function removeTodoFromProject(todo, project) {
  project.removeTodo(todo);
}

// Export the functions so they can be used in other files
export { createTodo, createProject, addTodoToProject, removeTodoFromProject };
