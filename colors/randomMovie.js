import { randomInArray } from './utils/randomElementInArray';

/*
 Jeu de test : Le parrain;Toy story3;Les bronzés;
                Etape 1 : identifier les éléments à manipuler
                Etape 2 : écouter les événements : change ou submit
                Etape 3 : récupérer les données de l'input avec le name/id tirage
                Etape 4 : découper les éléments de l'input a partir du ;
                Etape 5 : tirer au sort un élément
                Etape 6 : afficher le résultat

*/

const input = document.querySelector('#tirage');
const form = document.querySelector('form');
const results = document.querySelector('.results');

// const input = document.getElementById("tirage");

form.addEventListener('submit', function (event) {
	handleSubmit(event);
});

function handleSubmit(event) {
	event.preventDefault();

	const listFilms = input.value;

	if (input.value === '') {
		alert('oups');
	}

	const arrayFilms = listFilms.split(';');

	if (arrayFilms.length < 2) {
		alert("Il n'y a pas assez d'élements");
	}

	const randomMovie = randomInArray(arrayFilms);

	results.innerText = randomMovie;
}
