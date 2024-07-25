let container = document.querySelector("#container");
let body = document.querySelector("body");
let numberSquare = 256;
let button =  document.createElement("button");

button.textContent="Paramétrer le nombre de case"

// Ajouter le bouton avant le conteneur
body.insertBefore(button,container);


for (let i = 0; i<numberSquare;i++){
   let square = document.createElement("div");
   square.classList.add("square")
   container.appendChild(square);

}

let squares = document.querySelectorAll(".square");

squares.forEach((square) =>{

square.addEventListener("mouseover", (e) => {
    e.target.style.background ="red";
})


})