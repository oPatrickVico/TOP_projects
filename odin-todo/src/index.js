import library from './library.js';
import index from './stylesheets/index.css';
import projectViewer from './projectViewer.js';
import libraryManager from './libraryManager.js';

const root = document.querySelector("#app");
root.appendChild(projectViewer(library.getProj("Default")));
root.appendChild(libraryManager(library));

const something=1+1;