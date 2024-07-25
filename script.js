let container = document.querySelector("#container");
let body = document.querySelector("body");
let button = document.createElement("button");

button.textContent = "Paramétrer le nombre de cases";

// Ajouter le bouton avant le conteneur
body.insertBefore(button, container);

// Ajouter un écouteur d'événements au bouton, en passant `resetGrid` comme callback
button.addEventListener("click", resetGrid);

// Fonction pour réinitialiser la grille
function resetGrid() {
    let numberSquare = parseInt(prompt("Nombre de cases entre 16 et 100"), 10);
    
    // Validation de l'entrée utilisateur
    while (isNaN(numberSquare) || numberSquare < 16 || numberSquare > 100) {
        numberSquare = parseInt(prompt("Nombre de cases entre 16 et 100, s'il vous plaît"), 10);
    }
    
    // Supprimer les anciennes cases
    container.innerHTML = "";

    // Créer la nouvelle grille
    for (let i = 0; i < numberSquare*numberSquare; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
     // Calculer la taille des carrés en pourcentage
     let squareSize = numberSquare/100;
     
     // Mettre à jour les styles des carrés
     document.querySelectorAll(".square").forEach((square) => {
         square.style.flexBasis = squareSize; // Utiliser le pourcentage
         
     });


    // Réappliquer les événements aux nouvelles cases
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", (e) => {
            e.target.style.background = "red";
        });
    });
    container.style.width = `${numberSquare * 25 + numberSquare*2}px`;
    container.style.height = `${numberSquare * 25 + numberSquare*2}px`;
     // Mettre à jour les styles des carrés
   
}

// Initialisation de la grille
resetGrid();