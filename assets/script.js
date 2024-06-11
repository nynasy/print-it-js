const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let buttonLeft = document.getElementById("arrow_left");
let buttonRight = document.getElementById("arrow_right");
const numberOfSlides = slides.length;
let currentIndex = 0;

console.log("nombre de slides :  " + numberOfSlides);

let divDots = document.getElementById("dots");

for(let i = 0; i < numberOfSlides; i = i + 1) {
	let spanDot = document.createElement("span");
	spanDot.classList.add("dot");

	if(i === currentIndex){
		spanDot.classList.add("dot_selected");
	}

	divDots.appendChild(spanDot);
}


buttonLeft.onclick = function () {
	console.log("clique sur le bouton gauche");
	//alert("clique sur le bouton gauche");
	processElement(-1);
  };

buttonRight.onclick = function () {
	console.log("clique sur le bouton droit");
	//alert("clique sur le bouton droit");
	processElement(+1);

  };

function processElement(counter){
	console.log("index courant : " + currentIndex);

	//on change le bullet point actif au suivant 

	// on désélectionne l'élément courant
	divDots.children[currentIndex].classList.remove("dot_selected");

	// on passe à l'élément suivant du tableau

	//Si on est à la dernière image et que l’on clique à droite 
	if(counter === +1 && currentIndex === numberOfSlides - 1){
		currentIndex = 0;
	} 
	 //Si on est à la première image et qu’on clique à gauche 
	else if(counter === -1 && currentIndex === 0){
		currentIndex = numberOfSlides - 1;
	} 
	// on va sur l'element suivant ou précédent selon le counter
	else {
		currentIndex = currentIndex + counter; 
	}	

	// on séléctionne l'élément suivant
	divDots.children[currentIndex].classList.add("dot_selected");
	
	//on change l’image 
	let slideImage = document.getElementById("banner-img");
	slideImage.setAttribute("src", "./assets/images/slideshow/" + slides[currentIndex]["image"]);

	//on change le texte correspondant à l’image
	let slideText = document.getElementById("banner-text");
	slideText.innerHTML = slides[currentIndex]["tagLine"];
}
