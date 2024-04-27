const newArrrr = ['apple', 'mango', 'lichi'] 
let xa = 0;
while (xa<=newArrrr.length){
	console.log(newArrrr[xa])
	xa++;
}


function findTarget (array, target){
	for (let i = 0; i<=array.length; i++){
		if (array[i] === target){
			return i;
		}
	return -1;
}
}
const myArray = [1, 2, 3, 4, 5];
const myTarget = findTarget (myArray, 5)
console.log(myTarget)
