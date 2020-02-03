///////////////////// CONSTANTS /////////////////////////////////////

///////////////////// APP STATE (VARIABLES) /////////////////////////

let board;
let turn;

///////////////////// CACHED ELEMENT REFERENCES /////////////////////

const squares = Array.from(document.querySelectorAll("#board div"));

///////////////////// EVENT LISTENERS ///////////////////////////////

window.onload = init;

///////////////////// FUNCTIONS /////////////////////////////////////

function init() {
  board = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];

  render();   // we'll write this later
}

function render() {
  board.forEach(function(mark, index) {
    squares[index].textContent = mark;
  });
}
