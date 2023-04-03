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
];

//EventListeners prev & next
const previous = document.querySelector("#previous");
previous.addEventListener("click", () => slideChange(-1));

const next = document.querySelector("#next");
next.addEventListener("click", () => slideChange(1));

//Bullet points 
const dots = document.querySelector("#dots");

for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("element");
	dot.classList.add("dot");
	dots.appendChild(dot);
}

let slideNumber = 0;

dots.children[slideNumber].classList.add("dot_selected");

function slideActive(slideNumber) {
	return dots.children[slideNumber];
}

let dotActive = slideActive(slideNumber);

// Function slide 
function slideChange(direction) {
	slideNumber = slideNumber + direction;
	if (slideNumber < 0) slideNumber = slides.length - 1;
	if (slideNumber > slides.length - 1) slideNumber = 0;
	document.getElementById("banner__img").src = "./assets/images/slideshow/" + slides[slideNumber].image;
	document.getElementById("banner__text").innerHTML = slides[slideNumber].tagLine;
	dotActive.classList.remove("dot_selected");
	dotActive = slideActive(slideNumber);
	dotActive.classList.add("dot_selected");
}