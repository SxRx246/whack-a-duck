function init(){

    const gridElem = document.querySelector('.grid')
    function createGrid(){
        // for every call that we require create a div
        // append this call to our grid

    //    running the loop 100 times, then create div 100 rimes and add them to the grid class
        for (let i=0 ; i<100 ; i++){
            // thats will create 100 div
            const cell = document.createElement('div')
            cell.textContent = i

            // textContent is the text content of the cell
            // it is the same as the innerText

            gridElem.appendChild(cell)
        }
    }
    createGrid()

}
document.addEventListener("DOMContentLoaded",init)