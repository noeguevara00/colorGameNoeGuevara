let numberOfSquares = 12;
let colors;
let square = document.querySelectorAll('.square')
let body = document.querySelector('body')
let h1 = document.querySelector('h1')
let message = document.querySelector('#message')
let pickedColor;
let colorDisplay = document.querySelector('#colorDisplay')
let botonReset = document.querySelector('#reset')
let stripe = document.querySelector('#stripe')
let clickedColor;

stripe.insertAdjacentHTML('beforeend', '<button class="mode" id="Easy">EASY</button>')
stripe.insertAdjacentHTML('beforeend', '<button class="mode selected" id="Hard">HARD</button>')    

let buttonMode= document.querySelectorAll('.mode')

init();

function init(){
    reset();    
    squareEvent();
    mode();
}

//Pone el color del ganador en todos los squares
function changeColors(color){
    for(let i=0; square.length; i++){
        square[i].style.backgroundColor = color;
    }}

//Elige aleatoriamente la posicion del array para designar el color a adivinar
function pickColor(){
    let cantColors = colors.length
    let numRandom = Math.floor(Math.random() * cantColors)
    let randomColor = colors[numRandom]
   
    return randomColor
}

//Crea cada color
function randomColor(){
    // "rgb(139, 0, 100)"
    let max = 256;
    let min = 0;
    str=`rgb(${Math.floor(Math.random() * (max - min)) + min}, ${Math.floor(Math.random() * (max - min)) + min}, ${Math.floor(Math.random() * (max - min)) + min})`
    return str;
}   

//Forma  el array aleatorio de colores utilizando el randomColor()
function generateRandomColors(numberOfSquares){
let arrColores = [];
for (let i = 0; i<numberOfSquares; i++) {
    arrColores.push(randomColor())
}
return arrColores;
}

function reset(){
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    message.textContent = 'Guess the color!';
    h1.style.backgroundColor = body.style.backgroundColor;

    for(let i = 0; i < square.length; i++){    
        if(colors[i]){
            square[i].style.display = "block";
            // square[i].style.visibility= "visible";
            
            square[i].style.backgroundColor = colors[i];
            console.log(square[i])
        } else {
            // square[i].style.visibility= "hidden"; 
            square[i].style.display = "none";
        }
    }   
}

//Evento del boton New Colors
botonReset.addEventListener('click', function(){
    reset(); 
})


function squareEvent(){
    for(let i = 0; i < square.length; i++){    
        square[i].style.backgroundColor = colors[i]
     
        square[i].addEventListener('click', function(){
     
         clickedColor = square[i].style.backgroundColor;
     
         if(clickedColor === pickedColor){        
             message.textContent = "¡Correct!";
             h1.style.backgroundColor = clickedColor;
             changeColors(clickedColor);
             botonReset.textContent = "Play Again?";
         } else {
             this.style.backgroundColor = body.style.backgroundColor;
             message.textContent = "Try Again";
             
         }
        })
     }
}


function mode(){
    for(let i = 0; i < buttonMode.length; i++){
        buttonMode[i].addEventListener('click', function(){
            buttonMode[i].classList.add('selected')
           
            if(buttonMode[i].textContent === "HARD" || buttonMode[i].textContent === "DURO" || buttonMode[i].textContent === "DIFÍCIL"){
                numberOfSquares = 12;
                buttonMode[i].classList.add('selected')
                document.querySelector('#Easy').classList.remove('selected')
            } else {
                numberOfSquares = 4;
                buttonMode[i].classList.add('selected')
                document.querySelector('#Hard').classList.remove('selected')
            }
            // buttonMode[i].textContent === "Hard" ? numberOfSquares = 6 : numberOfSquares = 3;
            reset();
        })
    }

}
