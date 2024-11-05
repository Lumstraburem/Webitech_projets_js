const nature = [
	'Aigle',
	'Araignée',
	'Bison',
	'Cerf',
	'Coyote',
	'Faucon',
	'Loup',
	'Ours',
	'Renard',
	'Serpent',
	'Tortue',
	'Vautour',
];

const couleurs = [
	'Blanc',
	'Bleu',
	'Gris',
	'Jaune',
	'Marron',
	'Noir',
	'Orange',
	'Rouge',
	'Vert',
	'Violet',
];

const qualites = [
	'Agile',
	'Brave',
	'Calme',
	'Fier',
	'Fort',
	'Gentil',
	'Intelligent',
	'Loyal',
	'Sage',
	'Sauvage',
];

const button = document.querySelector("#Generate_name");
const resultArea = document.querySelector(".output");

button.addEventListener("onclick", () =>
{
    const randomNumber = [Math.random() * nature.length,
                           Math.random() * couleurs.length,
                           Math.random() * qualites.length];
    console.log(randomNumber);
    
    resultArea.innerHTML = `<h2>Nom indien</h2><p>${nature[randomNumber[0]]} ${couleurs[randomNumber[1]]} ${qualites[randomNumber[2]]}</p>`;
});