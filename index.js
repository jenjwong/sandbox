// draw a board on the DOM
// create matrix used for logic
// toggling the pieces on the DOM updates the UI and js matrix
// tests are run on the js matrix to determin winner because calculting from the DOM is ineficient


const rootEl = document.querySelector('.root');
let count = 0;

function makeColumns(numColumns) {
  return Array(numColumns).fill('').map((column, index) => {
    return `<div class="column ${index} square"></div>`
  }).join('');
};


function makeBoard() {
  const rows = Array(4).fill('').map((row, index) => {
    makeColumns(4)
    return `<div class="row ${index}">${makeColumns(4)}</div>`
  }).join('');
  return `<div class='board'>${rows}</div>`
};

function togglePiece(e) {
  let coords = getCoordinates(e);
  console.log(coords)
  count % 2 === 0 ? e.target.classList.toggle('active-red') : e.target.classList.toggle('active-white')
  count++;
};

function getCoordinates(e) {
    let row = e.target.parentElement.classList.value.match(/\d+/)[0];
    let column = e.target.classList.value.match(/\d+/)[0];
    return [parseInt(row), parseInt(column)];
}

rootEl.innerHTML = makeBoard();
const boardEl = document.querySelector('.board');
boardEl.addEventListener('click', togglePiece);
