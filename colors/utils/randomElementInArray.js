const randomInArray = (array) => {
	const longueur = array.length;

	const indexMax = longueur - 1;

	const randomIndex = Math.round(Math.random() * indexMax);

	const randomElement = array[randomIndex];

	return randomElement;
};

export { randomInArray };
