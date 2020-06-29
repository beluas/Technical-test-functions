// arr.flat() function could be useful but not sure about the compatibility with browsers at the time i'm writing.

const flatMultiArray = (arr) => {
	let arrToMutate = [...arr];

	const flatArray = [];

	arrToMutate.forEach((el) => {
		if (Array.isArray(el)) {
			flatArray.push(...el);
			flatArray.forEach((el2) => {
				if (Array.isArray(el2)) {
					flatArray.pop();
					flatArray.push(...el2);
				}
			});
		} else {
			flatArray.push(el);
		}
	});

	return flatArray;
};

console.log(flatMultiArray([[1, 2, [3]], 4]));
//console.log(flatMultiArray2([[1, 2, [3]], 4]));

// Es: [[1, 2, [3]], 4] -&gt; [1, 2, 3, 4]

const longestWord = (string) => {
	const stringArr = string.split(" ");
	let longestLength = 0;
	let longestWord = "";
	for (let word of stringArr) {
		const newWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
		//console.log(newWord.length)
		if (newWord.length > longestLength) {
			longestLength = newWord.length;
			longestWord = newWord;
		}
	}

	return longestWord;
};

console.log(longestWord("Buongiorno, mi chiamo Paolo"));

const commonValuesInArrays = (arr1, arr2) => {
	const values = new Set();

	for (let el of arr1) {
		if (arr2.indexOf(el) !== -1) {
			values.add(el);
		}
	}

	return [...values];
};

console.log(commonValuesInArrays([1, 5, 8, 5, 4, 9], [2, 5, 9, 0]));
