var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur ='triceratops';
dinosaur = dinosaur.toUpperCase();
text = text.replace('Velociraptor',dinosaur);
console.log(text.substr(0,text.length/2));

function printStr(text, x) {
	var array = text.split(" ");
	var out = array.filter(function(word) {
    	return array.indexOf(word) < x;
	});
	return out.join(" ");
}
console.log(printStr(text,4));

function reverseStr (text) {
	return text.split("").reverse().join("");
}
console.log(reverseStr(text));

function removeSpaces(text) {
	return text.split(" ").join("");
}
console.log(removeSpaces(text));

function changeLetters (text) {
	return text.split("").map(
		function(value){
			return ( text.indexOf(value)%2 ) ? value.toLowerCase():value.toUpperCase();
		}).join("");
}
console.log(changeLetters(text));

function indexOfLetter(text, letter) {
	return text.split(" ").map(
		function(value){
			return value.indexOf(letter);
	});
}

console.log(indexOfLetter(text,"M"));