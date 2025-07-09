function init(){
    const gridElem = document.querySelector('.grid')


    const cells = []
    const gridWidth =10
    const numberOfCells = gridWidth * gridWidth

    function createGrid(){
        // for every call that we require create a div
        // append this call to our grid

    //    running the loop 100 times, then create div 100 rimes and add them to the grid class
        for (let i=0 ; i<numberOfCells ; i++){
            // (1)thats will create 100 div
            const cell = document.createElement('div')

            // (7)by add this line we will notice that we are adding new class called duck into all divs
            cell.classList.add("duck")
            cell.textContent = i

            // textContent is the text content of the cell
            // it is the same as the innerText
            
            // we will push all the divs into an array
            cells.push(cell)

            // what we just did is "create and push" directly into the array

            gridElem.appendChild(cell)
        }
            console.log(cells)

    }
    createGrid()

}
document.addEventListener("DOMContentLoaded",init)