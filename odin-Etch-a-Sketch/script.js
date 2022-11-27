function createGrid (parent, gridEdgeSize) {
    // This function returns a new grid-container reference
    const container = document.createElement('div');
    container.classList.add('grid-container')
    for (let i = 0; i < gridEdgeSize ** 2; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
    container.childNodes.forEach(
        div => div.addEventListener('mouseover', setHoveredState)
    );
    container.childNodes.forEach(
        div => div.addEventListener('touchmove', setHoveredState)
    );
    //Sets :root property on css
    document.documentElement.style.setProperty('--edgeSize', gridEdgeSize);
    //appendChild returns the reference to child
    return parent.appendChild(container); 
}

function setHoveredState (e) {
    const elem = e.target;
    if (partyUp) {
        elem.style.background = `hsl(${backgroundHue}, 100%, 50%)`;
    } else {
        elem.style.background = 'black';
    }
    backgroundHue += 5;
}

function createResetButton (parent, ownGrid) {
    const btn = document.createElement('button');
    btn.textContent = 'Reset';
    btn.addEventListener('click', (e) => resetGrid());
    return parent.appendChild(btn);
}

function resetGrid () {
    const gridEdgeSize = +prompt('What is the row size?', 100);
    if (isNaN(gridEdgeSize) || gridEdgeSize > 100 || gridEdgeSize < 1) {
        alert('Invalid number!');
        return;
    } else {
        const cParent = container.parentNode;
        cParent.removeChild(container);
        container = createGrid(body, gridEdgeSize);
        cParent.replaceChild(container, cParent.firstChild);
    }
}

function createPartyUpButton (parent) {
    const btn = document.createElement('button');
    btn.textContent = "Party UP!";
    btn.value = 'off';
    btn.addEventListener('click', toggleParty)
    parent.appendChild(btn);
}

function toggleParty (e) {
    let newBg = !partyUp ? '#111' : 'white';
    e.target.textContent = !partyUp ? 'party down...' : 'Party UP!';
    document.documentElement.style.background = newBg;
    return partyUp = !partyUp;
}

// Future functionality => Draw only when mouse down.
// Inspiration
//      let mouseDown = false
//      document.body.onmousedown = () => (mouseDown = true)
//      document.body.onmouseup = () => (mouseDown = false)

// Initial Parameters
const gridEdgeSize = 100;
var backgroundHue = 0;
var partyUp = false;

// 'Main' Function
const body = document.querySelector("body");
var container = createGrid(body, gridEdgeSize);
const btnDiv = body.appendChild(document.createElement('div'));
const resetBtn = createResetButton(btnDiv, container);
const partyUpButton = createPartyUpButton(btnDiv);