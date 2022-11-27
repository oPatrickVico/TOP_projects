import newModalProj from "./newProjModal";
import projectViewer from "./projectViewer";
import style from "./stylesheets/libraryManager.css";

const root = document.querySelector("#app");

export default function libraryManager(library) {
  const container = document.createElement("div");
  container.classList.add("libmgr-container");

  // New Project Button
  const newProj = document.createElement("button");
  container.appendChild(newProj);
  newProj.classList.add("libmgr-newProjBtn");
  newProj.textContent = "New Project";
  newProj.addEventListener("click", (e) => {
    container.remove();
    root.appendChild(newModalProj());
  });

  // Project List
  const projList = document.createElement("div");
  projList.classList.add("libmgr-projList");
  for (const proj of library.getEveryEntry()) {
    const projTitle = document.createElement("h4");
    projTitle.textContent = proj[0];
    projTitle.addEventListener("click", (e) => {
      document.querySelector(".pjview-container").remove();
      const newViewer = projectViewer(library.getProj(proj[0]));
      root.appendChild(newViewer);
      container.remove();
    });
    projList.appendChild(projTitle);
  }
  container.appendChild(projList);

  return container;
}
