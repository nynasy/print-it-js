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

// on crée les bullets point 
for(let i = 0; i < numberOfSlides; i = i + 1) {
	let spanDot = document.createElement("span");
	spanDot.classList.add("dot");
	divDots.appendChild(spanDot);
}

// on séléctionne le bullet point courant
selectDot(currentIndex);

buttonLeft.onclick = function () {
	console.log("clique sur le bouton gauche");
	let nextIndex;
	 //Si on est à la première image  
	if(currentIndex === 0){
		nextIndex = numberOfSlides - 1;
	} 
	// sinon on va sur l'element précédent 
	else {
		nextIndex = currentIndex - 1; 
	}	
	// on change de slide
	changeSlide(nextIndex);
  };

buttonRight.onclick = function () {
	console.log("clique sur le bouton droit");
	let nextIndex;
	//Si on est à la dernière image 
	if(currentIndex === numberOfSlides - 1){
		nextIndex = 0;
	} 
	//sinon on va sur l'element suivant 
	else {
		nextIndex = currentIndex + 1; 
	}	
	// on change de slide
	changeSlide(nextIndex);

  };


function changeSlide(nextIndex){
	console.log("index courant : " + currentIndex);
	console.log("index suivant : " + nextIndex);

	// on désélectionne l'élément courant
	divDots.children[currentIndex].classList.remove("dot_selected");	

	// on séléctionne l'élément suivant
	selectDot(nextIndex);
	
	//on change l’image 
	let slideImage = document.getElementById("banner-img");
	slideImage.setAttribute("src", "./assets/images/slideshow/" + slides[nextIndex]["image"]);

	//on change le texte correspondant à l’image
	let slideText = document.getElementById("banner-text");
	slideText.innerHTML = slides[nextIndex]["tagLine"];

	// on remplace l'index courant par l'index suivant
	currentIndex = nextIndex;
}

function selectDot(dotIndex){ 
	divDots.children[dotIndex].classList.add("dot_selected");
}
