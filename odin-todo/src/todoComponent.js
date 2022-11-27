import style from "./stylesheets/todoComponent.css";

export default function todoComponent(todo) {
  const container = document.createElement("div");
  container.classList.add("todo-container");

  // Todo checked
  const checkbox = document.createElement("button");
  checkbox.classList.add("todo-checkbox");
  container.appendChild(checkbox);

  // Todo data
  const todoData = document.createElement("div");
  todoData.classList.add("todo-data");
  container.appendChild(todoData);

  // Title
  const todoTitle = document.createElement("h3");
  todoTitle.classList.add("todo-title");
  todoData.appendChild(todoTitle);
  todoTitle.textContent = todo.title;

  // Due Date
  const todoDue = document.createElement("p");
  todoDue.classList.add("todo-dueTo");
  todoData.appendChild(todoDue);
  todoDue.textContent = `Due to: ${todo.dueTo}`;

  // Todo Description
  const todoDesc = document.createElement("p");
  todoDesc.classList.add("todo-description");
  todoData.appendChild(todoDesc);
  todoDesc.textContent = todo.description;

  return container;
}
