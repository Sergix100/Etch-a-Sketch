function createGrid(){

    let size = prompt("What size do you want the grid to be?");

    for (let i = 0; i < size; i++){
        const column = document.createElement("div");
        column.classList.add("column");
        for (let j = 1; j <= size; j++){
            let row = document.createElement("div");
            row.classList.add("row");
            row.onmouseover = e => { if (isMouseDown) colorGrid(e); };
            row.onmousedown = e => colorGrid(e);
            column.appendChild(row);
        }
        containerDiv.append(column);
    }
}


function colorGrid(e){
        e.target.style.backgroundColor = "black";
    
}

let isMouseDown = false;
document.onmousedown = () => isMouseDown = true;
document.onmouseup = () => isMouseDown = false;
const containerDiv = document.querySelector("#grid");

createGrid();


