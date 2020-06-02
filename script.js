//grid board

let container= document.getElementById("container");
let root= document.querySelector(':root');
let allCells = document.getElementsByClassName("cells");  

//setting up a default color
changeColor("#92a8d1");
createGrid();

function createGrid() {
    //initiate div grid element
    container.textContent = "";

    let inputGrid = document.getElementById("input1").value;
    root.style.setProperty('--grid', inputGrid);

    console.log(inputGrid);
    //append div grid element
    for (i= 0; i < Math.pow(inputGrid, 2); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).classList.add("cells");
         }
    changeColor("#92a8d1");
}

function clearBoard() {
    for (i = 0; i < allCells.length; i++)
        allCells[i].style.backgroundColor = "white";
}

function chooseColor(event) {
    let eventDiv = event.target.classList.value.split(" ");
    if (eventDiv[1] == "one") {
        changeColor("#92a8d1")
    } else if (eventDiv[1] == "two") {
        changeColor("#034f84")
    } else if (eventDiv[1] == "three") {
        changeColor("#f7cac9")
    } else if (eventDiv[1] == "four") {
        changeColor("#f7786b")
    } else {  
        changeRandomColor();
    }
}

function changeColor(choice) {
    for (i = 0; i < allCells.length; i++)
        allCells[i].onmouseover = function(event) { event.target.style.backgroundColor = choice;}
}

let colorChoice = [ "#92a8d1", "#034f84", "#f7cac9", "#f7786b"]
function changeRandomColor() {
    for (i = 0; i < allCells.length; i++)
        allCells[i].onmouseover = function(event) { event.target.style.backgroundColor = colorChoice[Math.floor(Math.random(0, 3)* 4)];}
} 

//Question: let g = chooseColor(event) is does not work with return value?









