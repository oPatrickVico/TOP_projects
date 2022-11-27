import { makeTodoList } from "./makeTodoList";
import newTodoModal from "./newTodoModal";
import style from "./stylesheets/projectViewer.css";

export default function projectViewer(proj) {
  const container = document.createElement("div");
  container.classList.add("pjview-container");

  // Project Title
  const title = container.appendChild(document.createElement("h2"));
  title.classList.add("pjview-title");
  title.textContent = proj.getId();

  // Project Todo List
  makeTodoList(container, proj);

  // Project Add Todo
  const newTodoBtn = document.createElement("button");
  newTodoBtn.classList.add("pjview-addBtn");
  container.appendChild(newTodoBtn);
  newTodoBtn.textContent = "+";
  newTodoBtn.addEventListener("click", (e) => {
    container.appendChild(newTodoModal(proj));
  });

  return container;
}
