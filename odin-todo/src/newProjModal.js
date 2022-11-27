import style from "./stylesheets/newProjModal.css";

const root = document.querySelector("#app");

export default function newModalProj() {
  const container = document.createElement("div");
  container.classList.add("npm-container");

  const stopper = document.createElement("div");
  stopper.classList.add("npm-stopper");
  stopper.addEventListener("click", (e) => {
    e.stopPropagation();
  });
  root.appendChild(stopper);

  return container;
}
