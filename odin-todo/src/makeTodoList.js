import todoComponent from "./todoComponent";

export default function makeTodoList(container, proj) {
  const existingBucket = document.querySelector(".pjview-bucket");
  if (existingBucket) {
    existingBucket.parentNode.removeChild(existingBucket);
  }
  const todoBucket = document.createElement("div");
  todoBucket.classList.add("pjview-bucket");
  container.appendChild(todoBucket);

  // Update Todo List
  for (const item of proj.getEveryEntry()) {
    todoBucket.appendChild(todoComponent(item[1]));
  }
}
