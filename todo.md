# Liste de projets JS

## Compteur de mots, caractères

En tant qu'utilisateur, je dois pouvoir copier un texte dans une zone de texte et cliquer sur un bouton "Compter" pour obtenir le nombre de mots et de caractères du texte.

En tant qu'utilisateur, je dois pouvoir voir le nombre de phrases.

Tips : Pour les phrases, on peut considérer qu'une phrase se termine par un point, un point d'interrogation ou un point d'exclamation.

## Tirage au sort a partir d'une liste a separateur

En tant qu'utilisateur, je dois pouvoir copier une liste de noms séparés par des points-virgules dans une zone de texte et cliquer sur un bouton "Tirer au sort" pour obtenir un nom aléatoire de la liste.

## Générateur de noms indiens

Data :

```js
const elementsNature = [
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

const elementsCouleur = [
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

const elementsQualite = [
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
```

En tant qu'utilisateur, je dois pouvoir cliquer sur un bouton "Générer" pour obtenir un nom indien aléatoire en suivant le schéma suivant : `elementQualite elementNature elementCouleur`.

Tips : - Pour obtenir un élément aléatoire d'un tableau, vous pouvez utiliser la fonction `Math.random()`.

-   Vous devrez probablement utiliser une fonction pour arrondir le résultat de `Math.random()`.

## Testeur de mot de passe

On peut tester une string grace a des regex :

```js
const isNumber = /\d/;
const isLetter = /[a-zA-Z]/;
const endsWithNumber = /\d$/;
const endsWithLetter = /[a-zA-Z]$/;
const contientAuMoinsCinqCaracteres = /.{5,}/;
const contientAuMoinsUnChiffre = /\d+/;
const contientAuMoinsUneLettre = /[a-zA-Z]+/;
const contientAuMoinsUnCaractereSpecial = /[^a-zA-Z0-9]+/;
const contientAuMoinsCinqChiffres = /\d{5,}/;
```

Exemple de code REGEX :

```js
const isNumber = /\d/;
const isLetter = /[a-zA-Z]/;

const testIsNumber = isNumber.test('123');
console.log(testIsNumber); // true

const testIsLetter = isLetter.test('abc');
console.log(testIsLetter); // true

const falsyTestIsNumber = isNumber.test('abc');
console.log(falsyTestIsNumber); // false

const falsyTestIsLetter = isLetter.test('123');
console.log(falsyTestIsLetter); // false
```

En combinant ces regex, on peut tester un mot de passe. Nous voulons que le mot de passe contienne au moins 8 caractères, au moins une lettre, au moins un chiffre et au moins un caractère spécial.

En tant qu'utilisateur, je dois pouvoir copier un mot de passe dans une zone de texte et cliquer sur un bouton "Tester" pour voir si le mot de passe est valide ou non. Je dois recevoir un message d'erreur si le mot de passe n'est pas valide.

## Quizz de personnalité

Vous allez tester la personnalité d'un développeur pour savoir s'il est plutôt front-end ou back-end ou fullstack.

Voici le questionnaire humoristique et absurde :

1. Quel est votre animal préféré ?

    - A. Chat
    - B. Chien
    - C. Licorne
    - D. Dragon

2. Quel est votre morning routine préférée ?

    - A. Prendre un café
    - B. Faire du sport
    - C. Méditer
    - D. Dormir

3. Si vous etiez une chaise, vous seriez de quelle couleur ?

    - A. Blanc
    - B. Noir
    - C. Vert
    - D. Rose

4. Quel est votre super pouvoir préféré ?

    - A. Voler
    - B. Invisibilité
    - C. Téléportation
    - D. Lire dans les pensées

5. Quel est votre plat préféré ?

    - A. Pizza
    - B. Sushi
    - C. Salade
    - D. Hamburger

6. Quel est votre film préféré ?
    - A. Star Wars
    - B. Harry Potter
    - C. Le Seigneur des Anneaux
    - D. Avengers

Un développeur back devrait avoir les réponses suivantes : D, A, B, C, D, A.
Un développeur front devrait avoir les réponses suivantes : A, B, C, D, A, B.
Un développeur fullstack devrait avoir les réponses suivantes : C, D, A, B, C, D.
Un distributeur de boissons devrait avoir les réponses suivantes : B, C, D, A, B, C.

Tips : - Vous pouvez stocker les réponses dans un tableau et les comparer avec les réponses de l'utilisateur.

-   Vous pouvez afficher le résultat sous forme de pourcentage ou bien faire un score par catégorie et afficher la catégorie avec le score le plus élevé.

## Todo list

En tant qu'utilisateur, je dois pouvoir ajouter une tâche à une liste de tâches, marquer une tâche comme terminée et supprimer une tâche.

En tant qu'utilisateur, je dois pouvoir voir le nombre de tâches restantes.

En tant qu'utilisateur, je dois pouvoir filtrer les tâches par catégorie (toutes, terminées, non terminées).

En tant qu'utilisateur, je dois pouvoir supprimer toutes les tâches terminées.

En tant qu'utilisateur, je dois pouvoir sauvegarder mes tâches dans le localStorage pour les retrouver après avoir fermé et réouvert la page.

En tant qu'utilisateur, je dois pouvoir cliquer sur un bouton pour supprimer toutes les tâches.

En tant qu'utilisateur, je dois pouvoir cliquer sur un bouton pour marquer toutes les tâches comme terminées.

En tant qu'utilisateur, je dois pouvoir cliquer sur un bouton pour supprimer toutes les tâches terminées.

## Jeu du clic : un cube apparait a un endroit aleatoire de la page et le joueur doit cliquer dessus pour gagner des points.

En tant qu'utilisateur, je dois pouvoir cliquer sur un bouton "Démarrer" pour lancer le jeu.

En tant qu'utilisateur, je dois voir un cube apparaitre à un endroit aléatoire de la page.

En tant qu'utilisateur, je dois pouvoir cliquer sur le cube pour gagner des points.

En tant qu'utilisateur, je dois voir le cube disparaitre et réapparaitre à un nouvel endroit aléatoire de la page.

En tant qu'utilisateur, je dois voir mon score augmenter à chaque fois que je clique sur le cube.

En tant qu'utilisateur, je dois voir un compte à rebours diminuer à chaque seconde.

En tant qu'utilisateur, je dois voir le jeu se terminer lorsque le compte à rebours atteint 0.

En tant qu'utilisateur, je dois voir un message de fin de jeu avec mon score.

En tant qu'utilisateur, le cube peut disparaitre si je ne clique pas dessus assez rapidement.

En tant qu'utilisateur, je ne dois pas cliquer sur le triangle qui peut apparaitre à la place du cube.

```

```
