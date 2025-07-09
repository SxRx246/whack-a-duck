function init(){
    const gridElem = document.querySelector('.grid')
    const scoreElem = document.querySelector('#score-display')
    const audioElem = document.querySelector('#quack')

    const cells = []
    const gridWidth =10
    const numberOfCells = gridWidth * gridWidth

    // put any number between 0 and 29
    // try to change the number, you will notice, the duck will apeare in a different location
    let duckPosition = 70
    let score = 0
    let totalDucks = 0


    function addDuck(){
        totalDucks++
        cells[duckPosition].classList.add('duck')
        // console.log("a duck has been added")
    }

    function removeDuck(){
        cells[duckPosition].classList.remove('duck')
        // console.log("a duck has been removed")
    }


    function endGame(){
        alert("The game is ended, your score is "+score) 
        score = 0
        scoreElem.textContent = "Your score is 0"
        totalDucks = 0
    }
    function play(){
        setInterval(() => {
            if (totalDucks < 10){
            removeDuck()
            duckPosition = Math.floor(Math.random()*numberOfCells)
            addDuck()
            }
            else {
                endGame()
                // alert("The game is ended, your score is "+score) 
            }
        }, 3000)}

    

    // this is another way to add an event listener
        // cells.array.forEach(cell => {
        //     cell.addEventListener()
        // });

    // if we keep it empty, even if we clicked on plain area that clicked will Worker, so we have to set a target "event"
    // function handleClick(){
        
    // }

     function handleClick(event){
        // check if it has a duck class "div that has duck"
        if(event.target.classList.contains('duck')){
            // with this pause and currentTime we are able to run the audio couple of times, even if it is running, it will stop and run again
            audioElem.pause()
            audioElem.currentTime = 0

            score +=10
            scoreElem.innerText = `Your score is ${score}`
            // we can use textContent as well, it will do the same
                // scoreElem.textContent = `Your score is ${score}`
            audioElem.play()
            console.log("score: "+score)
        }
    }
    function createGrid(){
        // for every call that we require create a div
        // append this call to our grid

    //    running the loop 100 times, then create div 100 rimes and add them to the grid class
        for (let i=0 ; i<numberOfCells ; i++){
            // (1)thats will create 100 div
            const cell = document.createElement('div')

            // (7)by add this line we will notice that we are adding new class called duck into all divs
            // cell.classList.add("duck")
            cell.textContent = i

            // to keep it listen to clicks
            cell.addEventListener('click', handleClick)


            // textContent is the text content of the cell
            // it is the same as the innerText
            
            // we will push all the divs into an array
            cells.push(cell)

            // what we just did is "create and push" directly into the array

            gridElem.appendChild(cell)        }
            console.log(cells)

    }
    createGrid()
    play()
    // addDuck()
    // removeDuck()



}
document.addEventListener("DOMContentLoaded",init)