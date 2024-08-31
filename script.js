function createGrid(size){

    for (let i = 0; i < size; i++){
        const column = document.createElement("div");
        column.classList.add("column");
        for (let j = 1; j <= size; j++){
            let row = document.createElement("div");
            row.classList.add("row");
            row.classList.add("pixel");
            row.style.opacity = 1;
            row.addEventListener("mousedown",colorGrid);
            row.addEventListener("mouseover",colorGrid);
            column.appendChild(row);
        }
        containerDiv.append(column);
    }
    
}

function updateGrid(){
    const columnList = document.querySelectorAll(".column");
    columnList.forEach(column => {
        column.remove();
    });
    console.log(sizeSlider.value);
    createGrid(sizeSlider.value);
}

function setColorMode(e){
        e.target.classList.add("highlighted");
        rainbowMode.classList.remove("highlighted");
        eraserMode.classList.remove("highlighted");
        darkenMode.classList.remove("highlighted");
        currentMode = "color";
}

function setRainbowMode(e){
        e.target.classList.add("highlighted");
        colorMode.classList.remove("highlighted");
        eraserMode.classList.remove("highlighted");
        darkenMode.classList.remove("highlighted");
        currentMode = "rainbow";
}

function setEraserMode(e){
        e.target.classList.add("highlighted");
        colorMode.classList.remove("highlighted");
        darkenMode.classList.remove("highlighted");
        rainbowMode.classList.remove("highlighted");
        currentMode = "erase";
}

function setDarkenmode(e){
        e.target.classList.add("highlighted");
        colorMode.classList.remove("highlighted");
        rainbowMode.classList.remove("highlighted");
        eraserMode.classList.remove("highlighted");
        currentMode = "darken";
}

function clear(){
    colorMode.classList.remove("highlighted");
    rainbowMode.classList.remove("highlighted");
    eraserMode.classList.remove("highlighted");
    darkenMode.classList.remove("highlighted");

    document.querySelectorAll(".row").forEach(element => {
        element.style.backgroundColor = "#dee0e0";
    });

    currentMode = "color";
}


function colorGrid(e){
    if(isMouseDown){
        switch (currentMode){
            case "color":
                e.target.style.backgroundColor = colorInput.value;
            break;

            case "rainbow":
                let color = generateRandomColor();
                e.target.style.backgroundColor = color;
            break;

            case "erase":
                e.target.style.backgroundColor = "#dee0e0";
            break;

            case "darken":
                e.target.style.opacity = e.target.style.opacity - 0.1;
            break;
        }
    }    
}

function checkMouse(e){
    if (e.type == "mousedown"){
        isMouseDown = true;
    }
    else if (e.type = "mouseup"){
        isMouseDown = false;
    }
}


function generateRandomColor(){
    let redValue = Math.floor(Math.random() * 256);
    let blueValue = Math.floor(Math.random() * 256);
    let greenValue = Math.floor(Math.random() * 256);
    let combinedColor = "rgb("+redValue+","+greenValue+","+blueValue+")";
    return combinedColor;
}

function toggleBorders(){
        document.querySelectorAll(".pixel").forEach(element => {
            element.classList.toggle("row");           
        });
}

function updateSizeValues(){
    gridSize.textContent = "Change grid size to: " +sizeSlider.value + " x " + sizeSlider.value;
}

let isMouseDown = false;
let currentMode = "color";

document.addEventListener("mousedown",checkMouse);
document.addEventListener("mouseup",checkMouse);


const containerDiv = document.querySelector("#grid");

const colorInput = document.querySelector("#colorValue");
const colorMode = document.querySelector("#color");
const rainbowMode = document.querySelector("#rainbow");
const eraserMode = document.querySelector("#eraser");
const darkenMode = document.querySelector("#darken");

const toggleBorderBtn = document.querySelector("#toggleBorder");
const clearGrid = document.querySelector("#clear"); 

const sizeSlider = document.querySelector("#sizeValue");
const gridSize = document.querySelector("#gridSize");
const gridGenerator = document.querySelector("#createGrid");

gridSize.textContent = "Change grid size to: " +sizeSlider.value + " x " + sizeSlider.value;

colorMode.addEventListener("click",setColorMode);
rainbowMode.addEventListener("click",setRainbowMode);
eraserMode.addEventListener("click",setEraserMode);
darkenMode.addEventListener("click",setDarkenmode);
toggleBorderBtn.addEventListener("click",toggleBorders);
clearGrid.addEventListener("click",clear);
sizeSlider.addEventListener("change",updateSizeValues);
gridGenerator.addEventListener("click",updateGrid);


createGrid(16);


