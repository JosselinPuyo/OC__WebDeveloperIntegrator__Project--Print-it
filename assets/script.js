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
previous.addEventListener("click", () => alert());

const next = document.querySelector("#next");
next.addEventListener("click", () => alert());

//Bullet points 
const dots = document.querySelector("#dots");

for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("element");
	dot.classList.add("dot");
	dots.appendChild(dot);
}

let slideNumber = 0;

dots.children[slideNumber].classList.add("dot_selected");