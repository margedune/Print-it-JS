document.addEventListener("DOMContentLoaded", function() {
	let dataSlides = [
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

	let currentImage = document.querySelectorAll(".banner-img")
	let currentParagraph = document.querySelector("#banner p")
	let dots = document.querySelectorAll(".dots .dot")
	let currentSlide = 0
	let totalSlides = dataSlides.length

	// Afficher la première diapositive
	// showSlide(currentSlide)

	// Écouteur pour le bouton précédent
	document.getElementById("flecheLeft").addEventListener("click", function() {
	  	currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
	  	showSlide(currentSlide)
		selectDot(currentSlide)
	})
  
	// Écouteur pour le bouton suivant
	document.getElementById("flecheRight").addEventListener("click", function() {
	  	currentSlide = (currentSlide + 1 + totalSlides) % totalSlides
	  	showSlide(currentSlide)
		selectDot(currentSlide)
	})

	// Fonction pour afficher la diapositive actuelle
	function showSlide(index) {
		newSource = './assets/images/slideshow/' + dataSlides[index].image
		currentImage.forEach(function(image) {
			image.src = newSource;
		});
		currentParagraph.innerHTML = dataSlides[index].tagLine
	}

	// Fonction pour selectionner le dot actuel
	function selectDot(index) {
		dots.forEach(function(dot) {
			dot.classList.remove('dot_selected')
		})
		dots[index].classList.add('dot_selected')
	}
})
