const griditems = document.querySelector(".griditems");
const controller = document.querySelectorAll(".gridbtn");

function rgbavalue(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let randomvalue = "rgb("+red+","+green+","+blue+")";
    return randomvalue;
}



//creating a function that will create a div element with .div-cell class
function createGridCell(){
    let cell =document.createElement('div') ;
    cell.classList.add('grid-cell');
    cell.addEventListener('click',function(){
        cell.style.backgroundColor = rgbavalue();
    });
    griditems.appendChild(cell);
}

function changeStyle(gridcells){
    if(gridcells == 16){
        griditems.style.gridTemplateColumns = 'repeat(16, 1fr)';
        griditems.style.gridTemplateRows = 'repeat(16, 1fr)';
    }else if( gridcells == 50){
        griditems.style.gridTemplateColumns = 'repeat(50, 1fr)';
        griditems.style.gridTemplateRows = 'repeat(50, 1fr)';
    }else if (gridcells == 100){
        griditems.style.gridTemplateColumns = 'repeat(100, 1fr)';
        griditems.style.gridTemplateRows = 'repeat(100, 1fr)';
    }else{
        alert("Happy Hacking!");
    } 
}

//Creating a function to add a grid cells to the container
function addGridCells(cellsnumber){
    document.querySelectorAll('.grid-cell').forEach(e => e.remove());
    changeStyle(cellsnumber);
    let totalcells = cellsnumber**2;
    for (let j = 0; j<totalcells; j++){
        createGridCell();
    }
}

// Adding Event Listener to every buttons
for ( let i = 0; i <controller.length; i ++){
    controller[i].addEventListener('click',function(){
        let gridcells = controller[i].getAttribute('data-grid');
        //we need to pass the gridcells to a function that appends the grid-cells to the gridcontainer
        addGridCells(gridcells);
    });
}






