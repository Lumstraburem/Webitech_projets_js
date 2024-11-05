import './style.css';

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

console.log(form);

form.addEventListener('submit', function (event) {
	handleSubmit(event);
});

function handleSubmit(event) {
	event.preventDefault();

	const listFilms = input.value;

	const arrayFilms = listFilms.split(';');

	const longueur = arrayFilms.length;

	const indexMax = longueur - 1;

	const randomIndex = Math.round(Math.random() * indexMax);

	const randomMovie = arrayFilms[randomIndex];
	console.log(randomMovie);

	results.innerText = randomMovie;
}
