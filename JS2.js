// lesson 2 - variables

'use strict';

var firstName = 'Name';
console.log(firstName);


firstName = 'This Name';
console.log(firstName);


// variable rules

var value = 10
console.log(value ** 0.5)


// 3. using let - you cant declare the same variable twice with let keyword. 

let name_lol = 'lol';
name_lol = 'lol2';
console.log(name_lol)




// 4. declaring constants - something that cant change/you cant change its value like pi 

const pi = 3.14;
console.log(pi * 2/0.2)




// 5. string indexing
// a b c
// 0 1 2
let nameThis = 'abc';
console.log(nameThis);

// 6. finding length of string - it will also include spaces if there are any
console.log(nameThis.length)




// 7. methods to work with strings - trim() - it will give a new string or we can strore the value in a new string
let nameThis2 = '  this is new  ';
nameThis2 = nameThis2.trim(); 
console.log(nameThis2.length)

// 8. using toUpperCase() - to capitalize
nameThis2 = nameThis2.toUpperCase();
console.log(nameThis2)


// using toLowerCase() - to small case conversion
nameThis2 = nameThis2.toLowerCase();
console.log(nameThis2)

//9. slicing the strings - slice() - start index and end index
let newVarr = ('this is some new shit');
let newStrr = newVarr.slice(0, 5)
console.log(newStrr)  




// 10. type of operator 
// primitive data types - string, nums, bools, undefined, null, bigint, symbol

let a = 22;
let nn = 'abc';
console.log(typeof nn)
console.log(typeof a)

//11. changing num to string
console.log(a + '');
console.log(typeof (a + '')); // '' this will convert num to string - a = a + '';


// 12. converting str to num
nn = +'abc' // adding + before str converts it into num or use num(nn)
console.log(typeof nn)
let ab = 18
ab = String(ab)
console.log(ab)



// 13.string concataination - adding two strings together
let str1 = 'abc';
let str2 = 'xyz';
let strFull = str1 + ' '+ str2;
console.log(strFull)



// 14.template string
let abc = 100;
let fName = 'xyxyx';
let absol = 'this number is ' + abc + ' and the string is ' + fName; // this can also be done using template srging using backtick ``
console.log(absol);
let absol2 = `this number is ${abc} and the string is ${fName}`;  // $ is used with placeholder {} and backtics ``
console.log(absol2);



//15.undefined
let aab; // can be done with let and var but not with const. if you make a variable but dont deifine it, its undefined. 
console.log(aab);
console.log(typeof aab, fName);


// null - it means nothing, not even zero. 
let myvar = null;
console.log(myvar)


//bigInt - for numbers bigger than the MAX SAFE INTEGER - 9007199254740991. we use bigInt along with the number itself. either use BigInt or use n after the number.
let myNom = 1414n; // n is bigint converter. 
console.log(myNom);
console.log(Number.MAX_SAFE_INTEGER);

let myNomm = BigInt(55555555555555555555555544444444444444444444444444444545454555);
console.log(myNomm);

let xoso = myNom + myNomm; //have to convert both nums to either nums or big ints. else it willl throw error. 
console.log (xoso) 




//16.boolean - true or false
let xxxx = (myNomm <= myNom);
console.log (xxxx);

// == & ===
console.log (myNomm == myNom); //== checks the values not the data type - to do that we use ===.
console.log (myNomm === myNom); //this will check the value along with the data type 

// != and !==
console.log(myNomm != myNom); // != will only check the value adn !== will check the value and data type. 




//17. if else statements - 
let ageUser = 20;

if(ageUser >= 22){
	console.log('user can play.')
}
else{
	console.log('user cant play')
}

let numm = 220;
if (numm % 2 === 0){
	console.log('the number is even')
}
else{
	console.log('number is odd')
}



//18. truty and falsy values
let fNamee = ''; // undefined or empty variables will give false result. Even null is false. even 0. and false itself. So, false, empty '' , null, 0, undefined is falsy and rest are truthy whether negatiev or positive, num or str.  


if (fNamee == 0) {
	console.log('its empty')
}
else{
	console.log(fNamee + 'is the name')
}




// 19. terniary operator
let ageN = 19;
let drinkig;

if (ageN >= 10){
	drinkig = 'chai'
}
else{
	drinkig = 'milk'
}
console.log(drinkig)

// or we can use terniary operator or conditional operator instead of using the entire code
let ageNN = 19;
let drinking = ageNN >=10 ? 'milk' : 'chai'; // if condition is true, milk will be stored as value and result, else chai. 
console.log(drinking);




// 20. AND(&&) adn OR(||) operator
let newn = 'lola';
let newa = 20;

//checking two conditions together using &&
if (newn[1] === 'o' && newa > 18){
	console.log ('both conditions are true!')
} else{
	console.log('condition not true')
}

//checking only one condition true using ||
if (newn[0] === 'l' || newa > 25){
	console.log ('one condition is true!');// both can be true or one can be true to print this
} else{
	console.log('no condition is true'); // both has to be false to print this
}



// 21. nested if else - confition inside a condition
let winningNum = 101;
let userGuess = +/*prompt*/ ('Guess a number: '); //prompt takes input in string not num. to convert it to num - use + before prompt

if (userGuess === winningNum){
	console.log('your guess is right!')
} else{ //here we are using nested if else inside an else statement.
	if(userGuess < winningNum){
		console.log('your guess num is too low!')
	}
	else{
		console.log('your guess num is too high!')
	}
}




//22. if else, elst if, and else
let tempNorm = 100;

if (tempNorm < 0) {
	console.log('extremely cold!')
}else if(tempNorm < 10) {
	console.log('cold!')
}else if(tempNorm < 20) {
	console.log('pleasant!')
}else if(tempNorm < 30) {
	console.log('hot!')
}else if(tempNorm < 40) {
	console.log('extremely hot!')
}else {
	console.log('DED')
}




// 23. switch statement -
let weekDay = 8;
if (weekDay <= 5){
	console.log('Weekday')
} else if (weekDay > 5 && weekDay <= 7 ){
	console.log('WeekEnd')
} else{
	console.log('Invalid Day!')
}

// same code as above but using - switch 
let weekNewDay = 4;
switch(weekNewDay){
	case 0:
		console.log('sunday');
		break;
	case 1:
		console.log('monday');
		break;
	case 2:
		console.log('tueday');
		break;
	case 3:
		console.log('wednesday');
		break;
	case 4:
		console.log('thursday');
		break;
	case 5:
		console.log('friday');
		break;
	case 6:
		console.log('saturday');
		break;
	default:
		console.log('Invalid Day')
}



// 24. while loop - used for looping - repeating through a program. 
let x = 0;
while (x<=3){ // without repeating our code, while loop will print from 1 to 10.
	console.log(x);
	x++; // the value of x will keep on repeating until x <=3. when x = 4, the condition becomes false and code will exit.
}
console.log(`current value ${x}`) // this is the current value of x - 4, because its exited the loop. 


//sum total of first 10 natural numbers
let total = 0;
let xo = 0;

while (xo<=10){
	total = total + xo;
	xo++;
}
// xo = xo + 1
// xo = xo + 2
// xo = xo + 3
// xo = xo + 4
// xo = xo + 5
// xo = xo + 6
// xo = xo + 7
// xo = xo + 8
// xo = xo + 9
console.log(total);

//without the while loop - this is faster in processing. 
let numss = 10;
let nuTotal = (numss * (numss + 1))/2;
console.log(nuTotal)



// 25. for loop - 
//printing 0 to 9 repeatedly using for loop
for (let np =0; np<=9; np++){ // can declare np here with var and it will be available globaly, but if we use let inside a for loop then it will not be available outside. 
	console.log(np)
}

// for loop example - sum of all natural numbers till 10
let totalNew = 0;
let newNum = 100;

for (let xxa = 1; xxa <=newNum; xxa++){
	totalNew = totalNew + xxa;
}
console.log(totalNew);




//26. break keyword - 
for(let i =1; i<= 10; i++){
	if (i===6){
	break; // breaks the loop when hits the break code after conditions are met. once hit, the code jumps out of the loop
	}
	console.log(i)
}

// continue keyword - continues the loop/code
for(let i =1; i<= 10; i++){
	if (i===6){
	continue;// will skip the condition when meets the condition, and will continue with the code till loop is completed.
	}
	console.log(i)
}




// 27. do while loop - in this, the do loop will run even when the condition is false, then when the incrent will happen, only then will the code realize what to do and then exit.

// let ii = 0;
// while (ii<=8){
// 	console.log(ii);
// 	ii++;
// }

let ii = 100;
do{
	console.log(ii);
	ii++;
} while (ii<=9);
console.log(`value of ${ii}`);




// 28. arrays - are reference type are also objects, so arrays are objects in JS - arrays are collection of elements where you can store multiple values/elements in a single variable - ordered collection of items- means it is indexed and cannot be changed and any type of data can be stored in them. 
let fruit = [1, 2, 3, 4, 5, 'apple', 'banana', 'strawberrry', null, undefined];
console.log(fruit);

//changing items in a defined arrays - 
fruit[6] = 'lichi';
console.log(fruit);
console.log(Array.isArray(fruit)); // will tell you whether the created array is arry or not

let obj = {}; - //Object literal



// 29. array push and pop
//pushh adds item to the last of array
//pop - deletes  item from last of array and will return the deleted item as variable
fruit.push('kiwi');
console.log(fruit);

// fruit.pop()
// console.log(fruit);

let poppedItem = fruit.pop()
console.log(`popped item is ${poppedItem}`);


//adding/deleting elemtns from array's beginning using shift and unshift
fruit.unshift('bananana');
console.log(fruit);

fruit.shift();
console.log(fruit);

let remmoved = fruit.shift('bananana');
console.log(fruit);

//push and pop are faster than shift and unshift




//30. primitive vs reference types in JS
//primitive type - measn the original values/data assigned to the value 
let aa = 100;
let bb = aa;
console.log(aa);
console.log(bb);
aa++;
console.log('after incrementing');
console.log(aa); //coz its value we increased
console.log(bb);//its value wont change because its still looking at the originally defined value of aa

//reference type - like arrays - changes will take place in both theh arrays here - 
let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1;
console.log('arr1', arr1);
console.log('arr2', arr2);
console.log('after changing')
arr1.push(5, 6, 7, 8, 9)
console.log('arr1', arr1);
console.log('arr2', arr2);
//both the arrays will return the same value because the main array is stored in a heap and arr1 and arr2 has the memory of the stored array. now, if changes are made to array through arr1, the changes will be made on theh addressed array, so if we call arr2, the new values will also be displayed, because arrays are reference types. 




//31. cloning an array - meaning making two diff copies of one array
let arrr1 = [1, 2, 3, 4, 5];
let arrr2 = arrr1.slice(0); //this is one method to clone
let arrrr3 = [].concat(arrr1);// another method to clone the array by concating arrr1 in a new array and assigning it to arrr3
let arrr4 =[...arrr1]//this is spread operator which adds arrr1 contents to arrr4
console.log(arrr1===arrr2===arrrr3===arrr4);

//adding more than one element/array to a new array after cloningg
let arrr5 = arrr1.slice(0).concat(5,6,7,8,9, 10,11,12,13,14,15); //slice clones arrr1 to arrr5, and concat adds neww items to arrr5
let arrr6 = [...arrr1, 5,6,7,8,9, 10,11,12,13,14,15, 16];// using spread operator (...) to cline arrr1 and adding new elements to arrr6
let arrr7 = [...arrr1, ...arrr2, ...arrrr3, ...arrr4, ...arrr5, ...arrr6] // using spread operator to add different arrays to create a single array.
console.log(arrr5)
console.log(arrr6)
console.log(arrr7)




//32. using for loop in an array - 
let newArr = ['apple', 'mango', 'lichi'];
let newArr2 = [];
for (let x = 0; x<=newArr.length-1; x++){
	newArr2.push(newArr[x].toUpperCase());
}
console.log(newArr);
console.log(newArr2);


//usisng const for creating array - 
const pii = 3.14;// cannot change the values of const
console.log(pii);

const newArrr = ['apple', 'mango', 'lichi']// it holds an address, but even when we are pushing something in it the address wont change, but when making new array using its conteents, only then the address will change
newArrr.push ('banana') //even though the array is const, we are changing the value using push()
console.log( newArrr) 
//but if there was a let assignemnt keyword, then we could have done it. 


// 33. while loop in array - 
const newArrrr = ['apple', 'mango', 'lichi'] 
let xa = 0;
while (xa<newArrrr.length){
	console.log(newArrrr[xa].toUpperCase());
	xa++;//remember to add this increment sign in a loop else it will get stuck till infinity in just the first element of the array and browser will crash. 
}





// 34. for of loop in array - most;y used in iteration. we mostly use the for of and normal for loop in development. 
const lolArr = ['apple', 'mango', 'lichi'] 
let newArrLol = []; //its a new array
for (let lolNew of lolArr){ //here, let lolNew is a new variable where we are assigning the items of lolArr after each iteration of for loop, and thus it prints. 
	newArrLol.push(lolNew.toUpperCase())
};
console.log(newArrLol);








// 35. for in loop - 
const a1 = ['apple', 'mango', 'lichi'];

for (let index in a1){  //unlike the for of loop, the for in loop uses the index numbers of the elements to print here according to their index numbers
	console.log(a1[index])
};





//36. array destructuring - as its name suggests, we will destructure the array here
const newArray = ['value1', 'value2', 'value3', 'value4', 'value5'];
let var1 = newArray[0];//this is how we normally assign an array's value to a variable
let var2 = newArray[1];
console.log(var1, var2)
let [newVar1, newVar2, ...myNewArray1] = newArray; // this is an easy way to assign the value inside the array to these variables. and once they are assigned to the new variable ouside the array, they will now behave as normal value adn variable and can change the variables and such. But only when using let keyword and not const keyword. And to skip a value from array, just use , , and it will skip one value. (the ...myNweArray1 is the new array and not a variable, and the remaining values will go in this array). 
console.log(newVar1, newVar2)

// making a new array from existing array - 
let myNewArray = newArray.slice(2) // the index number mentioned here, from there the new array will start till end
console.log(myNewArray)
console.log(myNewArray1)







//37. objects - arrays are not sufficient for real world data. objects store key value pair adn they dont have any index. objects are also reference types adn they are stored the same as arrays - liek reference types data. they are denoted in {}, and key:value pair. 
const person = {
	a11: '123', 
	b11: 'abc', 
	c11: 'cased',
	d11: [1, 2, 3, 4, 5] // this is an array inside an object.
};
console.log(person);

//accessing object's data - 
console.log(person.a11);
console.log(person.d11); // this array can be treated as a normal array as well. properties/keys can be accessed with a . 

// addind a key:value pair to an object - 
person.e11 = 'abc';
console.log(person.e11); // new key:value pair added. 
console.log(person['a11']);//other than ., we can also use [] and put the key inside the square bracket as a string. becuse in JS, the key is string by default, if you do otherwise, it will give an error.

// adding a key:value pair using bracket notation [] - 
person['f11'] = 'xyz';
console.log(person['f11']);





//38. difference btw dot and bracket notation - 
//first is that you cant access any spaced string with . notation, but you can do it with bracket notation. 
person.g11 = 'new item';
person['h 11'] = 'new spaced key';
console.log(person.g11);
console.log(person['h 11']);// this key can only be accessed with bracet notation and not dot notation. 

const key = 'i11';
person[key] = 'this is a new key - i11'; // if you put the key here inside '', as strings, then it will show as string literal - literally. So, to show it as theh name of the key which you defined earlier - i11, we use key as is, no quotaton mark, adn it will compute key, find its value - i11, and use it as such. Be careful. 
console.log(person)




// 39. Iterating objects - using the same person object from above - there are two ways to do it - for in and object:key loop
//for in loop - 
for (let key in person){
	console.log(person[key]) //similar to above, we use key inside a square bracket to call the key value pair rather than using a dot notation. 
} ;

// getting key value pair using backtick templates - 
for (let key in person){
	console.log(`${key}: ${person[key]}`) //using the template string. key is the key in person, person is the object and [key] are the values. 
	console.log(key, ':', person[key]) //if not using template string, we can do this. 
} ;

 // using object:case method to loop through the object - 
 console.log(Object.keys(person)); //using this to find the keys of the object
 console.log(typeof(Object.keys(person)));
 const val = Array.isArray((Object.keys(person))); //using Array.isarray to find whether Object's inside items are array or not. 
 console.log(val) // if true, then they are array, if not, then they are not. 

 // using Object:keys in loop - 
 for (let key of Object.keys(person)){ //using for of loop
	console.log(person[key]); //getting the keys of object
 }







 //40. Computed Properties - 
 const key1 = 'objkey1';
 const key2 = 'objkey2';

 const val1 = 'myvalue1';
 const val2 = 'myvalue2';

 //add key
const obje = {
	[key1] : val1, //this is called computed properties where you use square brackets to get the value of theh variable defined.
	[key2] : val2
};

console.log(obje);

//if we dont use square brackets, then we can do this - 
const objecc= {}; //empty object which will include the object key and pair below.

objecc[key1] = val1;
objecc[key2] = val2;
console.log(objecc);





// 41. Spread Operator - (...)
const rar1 = [1, 2, 3];
const rar2 = [4, 5, 6];

const newArra = [...rar1, ...rar2, 100, 111]; // using the three dots(spread operator) to put all values of both the arrays to create a nwen arrray. If we dont put these three dots, then the entire array will be copied instead of just their values. However, if we want to put new elements here, then we can do so as well, but without putting the dots (spread) and just using the commas.

const newnew = [...'new variable'] //but, we can also put spread op in front of a variable to make each item of the variable into a single element to form an array, they will beb spread like seperate elements/variables. like so. 
console.log(newArra);
console.log(newnew);



// Spread Operator in Objects - 
const objetcss1 = {
	keyy1: 'vall1', 
	keyy2: 'vall500',
	keyy2: 'vall2', //two keys cant have the samae name. if they do, then the one defined later will be used and the first will be discarded. like vall500 here.
};
const objetcss2 = {
	keyy3: 'vall3', 
	keyy4: 'vall4',
	keyy1: 'unique key 0',
};
const newObje = {...objetcss1, ...objetcss2, keyx: 'valuex'} //same as the array, if a key is repeated, then the one defined later will be used and the first will be discarded in order of the objects called here. If objectss 2 was called first, then the repeated value of obkect 1 would have remained. we can also add new keys while caling the old ones. 
console.log(newObje);
console.log(objetcss1);

//sprading other iterables - 
const new_Obj = {...'abcde'};
const new_Arr = {...['item1', 'item2']};
console.log(new_Obj);
console.log(new_Arr);





//Objects Destructuring -  
const band = {
	bandName: 'Queen',
	song: 'Mama',
	year: 1950,
};

const {bandName, song, ...rest} = band;//here, we are destructuring the upper key:value pair to serpeate variables that we can use as normal variables, or we could have done the long step - like so -
//const bandName = band.bandName;
//const song = band.song;
const {bandName:varia1, song:varia2} = band; //here, we can also assign the bandName varable value to avaira1, adn varia2 creating two new variables with the same old value. by defaault the variables will be as assigned in the object.

console.log(bandName, song, rest);//here, in rest, we are assiging the remaining varialbes of the object that are left using spread operator. 
console.log(varia1, varia2);





// 43. objects inside arrays - useful in real world apps - putting user info in arrays -  
const users = [
	{userid: 1, fName1: 'abc', gender: 'm'},
	{userid: 2, fName1: 'pqr', gender:'m'},
	{userid: 3, fName1: 'xyz', gender:'f'},
];

// running loops through the users - for of loop - 
for (let user of users){
	console.log(user) //loop will iterate through each user and print their details. 
	console.log(user.fName1) //this will access only the fName1 element of the users object/array. 
};

// nested destructturring - 
const [user1, user2, user3] = users; //assigning the earier defined object/array into seperate variables by nested destructuring
console.log(user1)

//here, we are taking fName from user 1, and gender from user 3, this way, we are putting {} inside [] so that it targets the objects defined above.
// the comma in between is for user 2, since we are not taking anything from them, so its empty.
const [{fName1}, , {gender}] = users;
console.log(fName1);
console.log(gender);

// as before, we can also assign new names for the object's variables we targatted and make it into a new variable. to do that, we use : and then the name we want to use. -  
//we can also target other objects of user 1(array) butt we have to put them insdie the same curly bracket, because it means the items of user 1 - [{fName1:nameNew, userID}]...  
const [{fName1:nameNew}, , {gender:newGender}] = users;
console.log(nameNew);
console.log(newGender);







// 45. functions in js - can be terated as slave - you ask them to do something and they will do it but you have to make your funtion as such. one program can have multiple functions to do multiple tasks and functions can also help other functions. using a function, you dont have to repeat yourself again adn again to do the same thing, instead, you just call the function you made to do that thing and your function will take care of the rest. 
function happyBday(){ //creating a function
	console.log('happy birthday!!!'); //assigning the task i wantn the function to perform
}
happyBday(); //calling the function. 

//making more than one function - 
//when you return something inside a function, it will return whatever the value has is to be returned, but it will only do so when the function is called, or when you used that function to do something, you can do so adn the returned value will be used - for eg - console.log(addingStuff()). And whts more is that we can also assign theh returned value to a new variable using let or const and the returned value will be used there which you can use as a normal variable - for eg - const returnedValue = addingStuff();
// parameters are the values you pass inside the function when defining them so that you can use them later insdie that function - note that they wont be of use outside the function - for eg - function addingStuff(x, y) - here, x and y are parameters (or values that the function has that it can use inside the function), and later, their values will be arguments - 
function addingStuff(num1, num2){ // when making parameters, you can also assign a default value to them using num2 = 10 (value), and this value will only be used when no other value is given when calling this function. else, the result will be NaN, because there are no values by default.  
	return num1 + num2;
}
const returnedStuff = addingStuff(10, 100); //here, we are assigning the arguments 10 and 100 (values) to the variables/parameters of the function we defined earlier so that now, the num1 parameter is 10, and num2 parameter is 100. as stated earlier, the values we are passing here are called arguments, but the ones we defined earlier are called parameters. 
console.log(returnedStuff);

//function can return anything - list, bools, arrays, etc. - here we are creating a function to find whether the number is odd or even - 
function isOddEven(num11){
	if (num11 % 2 === 0) {
		return true;
	}
	else{// since here we just have two conditions, so we can just return False here instead of writinng the else statement. 
		return false;
	}
}
const isOdd = isOddEven(5);
console.log(isOdd);
// or we can  just do this instead of writing the if else statement - return num11 % 2 ===0; if condition is correct, output will be true, else false. 

// another function - getting the first character of any input string - 
function firstChar(stringAbc){
	return stringAbc[0];
}
console.log(firstChar('this is string'));// t will be returned, because its on the 0th index place.

// creating a function that takes array and target(number) as input and you have to find the number from the given index - 
//input - array, target (number)
//output - index of the target (along with the number) if the target is present in the array. return -1 if the number is not present.
function findTarget(array, target){
	for (let i = 0; i<=array.length; i++){
		if (array[i]===target){
			return i;
		}
	}
	return -1;
};
const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9];
const newThing = findTarget(myArr, 7)
console.log(newThing);


// changing functions into function expression - assigning the entire function to a variable. 
function happyBdayNew(){ //creating a function
	console.log('happy birthday!!!'); //assigning the task i wantn the function to perform
}
happyBdayNew(); //calling the function. 
//now, we are assigning the above function to a new variable const and using it as same as the function we created earlier, then, we can evne call it at the end just like a function, but we can also use it as a variable. 
const happyBdayNew1 = function(){
	console.log('happy birthday!!!'); //assigning the task i wantn the function to perform
}
happyBdayNew1();

//another example 
const  addingStuff1 = function(num1, num2){ // will work same as function.  This is function expression because we are expression/assigning the functionn to a variable. 
	return num1 + num2;
}
const returnedStuff1 = addingStuff1(10, 100);  
console.log(returnedStuff1); 

//another example of function expression - the above with function declaring is function declaration. 
const isOddEven1 = function (num11){
	if (num11 % 2 === 0) {
		return true;
	}
	else{// since here we just have two conditions, so we can just return False here instead of writinng the else statement. 
		return false;
	}
}
const isOdd1 = isOddEven1(5);
console.log(isOdd1);


// 46. arrow functions - imp in JS, used in REACT. To make an arrow function, we dont do much, we just dont use the function keyword, or even function expression, we just use () =>, for example - const arrowfunction = () =>{insert function action here } -
const isOddEven2 = (num11) => { //this is how we use arrow functions 
	if (num11 % 2 === 0) {
		return true;
	}
	else{// since here we just have two conditions, so we can just return False here instead of writinng the else statement. 
		return false;
	}
}
const isOdd2 = isOddEven2(5);
console.log(isOdd2);

//another example - note that, if there is only one parameter in the function declaration, then we dont have to put it in paranthesis. we can use it without brackets. But only if there is only 1 parameter, else, we use brackets. and also when there are zero parameters, we use ().
const isOdd11 = numb => { //arror function created here. 
	return numb % 2 !== 0;
}
console.log(isOdd11(11))

// we can shorten the arrow function even further. if there is only one line being returned in the function, then we can put them as following - 
const isOdd111 = numb1 => numb1 % 2 === 0; //entire function shortened into a single line. 
console.log(isOdd111(10));




//48. Hoisting - calling the function before declaring it. But it will only happen in case of function declaration, and not in the case of function expression or arrow func.  
hel(); // - like we are doing right here. calling here
function hel(){ // creating function here. 
	console.log('hello world!')
}

// note that, if you use let to create a variable, and call it even before creating - the answer will be undefined (returned). But if you do that with const or var, then you will get an error. THis is a point to note and remember because you'll be using it later. 


// 49. Functions insnide function - 
function application () { // main function
	const myFunc = () =>{ // inside function 1
		console.log('printing from inside Func!')
	}

	const addTwo = (num33, num22) => num33 + num22; // inside function 2

	const newFunc = (numm1, numm2) => numm1 * numm2; // inside function 3

	console.log('inside app!')
	myFunc(); // the functions made inside a function can only be called from inside the function only. like these 3 functions.   
	console.log(addTwo(10, 100));
	console.log(newFunc(10,100));
}
application(); //this function call will only give one return value - the result will be the thing we returned inside the function and not all the other functions we created there and are returning. 



// 50. lexical scope - its the environment where you define a function. if you then create a function inside the function, and define a value there, and then call theh function, then it will first look in its own environment (inside its own function) and see whether there is anything defined or not, if there is, then it will only take that value, and if not, it will move one step up and take the definied value from the main function. If even the main function doesnt have the thing degined, then it will take the vlaue from the global scope of the program. In other words, when called, the functions decide to look for values from inside out - it will move from the inside and then go outside to look for the value, but it will only happen if theere is no value defined inside. like here - 
const myVara = 'Level 0'; // if there is no defined myVara inside the function, then all of them will take this declaration because it is a Global declaration.
function myApp(){
	const myVara = 'Level 1' // it will work inside this function only
	function myNewFun(){
		const myVara = 'Level 2'; // it will work only inside myNewFun
		const myNewFun = () => {
			const myVara = 'Level 3' // it will work inside this function only
			console.log('inside myNewFunc', myVara);
		console.log(myNewFun());
		}
		console.log(myNewFun());
	}
	console.log(myVara);
}
myApp();



// 51. Block Scope and Function Scope - let and const are block scope. and var is function scope. 
//block 1 - know that you can only use let and const to define any variable inside a block scope, else there will be an error if you use const. If any values are defined isnide a block, then you can only use those variables inside that specific block only, nou outside of it, else there will be an error. 
{
	let newName = 'abc';
	console.log(newName)//it will not give error because we are accessing it inside the block.
}
//console.log(newName) - this will give an error, because we are accessing the block scope element outside the block, thus, it will not recognize that the variable you are trying to use is even defined. 

//block 2
{
	const newName = 'xyz';// inside two different blocks, you can use the same variable nanem to define values, because outside it will have no effect as they are iniside the block scope.,  
	console.log(newName);
}

//block 3
{
	var newName = 'opq'; //see here carefully, since we have used var when defining a varialbe, so even when we use it outside the block, it will not give an error. because, var is a function scope, and can be used outside too, and inside too. 
}
console.log(newName);

var newName = 'new Stuff'; //global scope and it can be used throughout the function, note that, it is possible because we have used var here to define the variable and not const or let. If we would haev used cosnt, then there would have been an error becuase we already defined a newName variable earlier. So, var is a function scope.
console.log(newName)

//example using an if else statementn - 
if (true){
	var firstName = 'abc'; //since we are using var here inside the block scope, so it can be accessed by outside function as well. 
	console.log(firstName);
}
console.log(firstName); // like here, this is an outside scope/global - and we are able to access the block element here only because its using var. if there was let or const, then there would have been an error. THat is why, it is preferrable to use let or const to define variables because they can only be used in the block and not outside of it. 

// another example using a function - 
function myApp(){
	if(true){
		var firstName = 'xyz';
		console.log(firstName);
	}
	console.log(firstName);
}
myApp();



// 52. default parameters - as we discussed earlier, if you dont use all the parameters given, then there acn be an errror. To stop that, we use a default parameter where we define the parameter at the beggining itself. 
function addTwoNums(a, b = 100){
	return a + b;
}
console.log(addTwoNums(10));


function add_Three_Nums(a, b, c =10000){
	return a+b+c
}
console.log(add_Three_Nums(1, 3423));



// 53. Rest parameters - 
function myFuncs(a, b, ...c){
	console.log(`a is ${a}`)//a will go to a
	console.log(`b is ${b}`)//b will go to b
	console.log('c is', c)//since there is rest parameter assinged with C, then the rest of the unassigned numbers will go to c in a form of an array.
}
myFuncs(4, 5, 2, 4, 5)

//another function to print the sum of all the numbers passed in an array. 
function addAll(...numberss){ //here, ...numbers mean there are no defined limit of numbers to be have, so using rest parameter, we can assign however much we want. 
	let total = 0; //starting from 0.
	for (let number of numberss){ //looping the array
		total = total + number; //summing it up
	}
	return total; //returning the total sum
}
const ans = addAll(1, 2, 3, 4, 5, 6, 7, 8, 9) //the passed array
console.log(ans) //printing the sum of array.


// 54. parameter destructuring - is used in objects and React. it is similar to the destructuring we read earlier, here we define the object's parameters inside a function so that we dont have call to object anytime we want to usue the paramater. 
const perso = { //making an object here as perso
	firstNamee: 'myName',
	genderr: 'Not defined'
}

function printDetails(obj) { //here, we are passing the object in function's parameter, but the function doesnt know which object to use
	console.log(obj.firstNamee); //calling obj before we access its parameters
	console.log(obj.genderr);
}

printDetails(perso); //here, we are assigning the perso object to the function. so now, it will know what to work with. 

//but, we can also do the above code the following way using parameter destructuring - 
const perso1 = { //making an object here as perso
	firstNamee: 'myName',
	genderr: 'Not defined'
}
function printDetails1({firstNamee, genderr, agee}) { //here, we are passing the object in function's parameter, but the function doesnt know which object to use
	console.log(firstNamee); //since we already defined the parameter of the object inside the function using {}, we dont have to call obj here. 
	console.log(genderr); // or here.
	console.log(agee) //if we try to pass something that is not defined in the object, then we will get undefined as a result.  
}
printDetails1(perso1);




// 55. callback functions - calliing a function inside a function, so that we can call it as a parameter, and when its called, the thing that the called function is supposed to do or return will be returned or will happen. So, in other words, we are calling a function within a function, the called function will be the new input called inside the main function and this is called callback function. 

function myfun2(){ //this function will be the new value of a/callback, so this will be called when we use a callback function. adn the entire function will be the new value of callback(parameter of function 1). 
	console.log('inside the myfun2 - the callback function')
}
function myfun(callback){ //here, callback is the parameter, adn we can put its value anything, even a function. 
	console.log('this is being called from inside the main function') //so this will be called/used/returned first, and then the callback function will run becuase we are callling it inside this function even though the callback function is written first. 
	callback();//callback function - we are calling the a (parameter). When we accept a function, there is a convention that we must write 'callback' in the main function for the function we will call.
}
myfun(myfun2)//anything can be passed here adn it will be the value of a defined as a parameter in the function earlier, so it can be an array, string, object, or even a function. 

// we can also do more things in this callback function - 
function myfun2(abc_1){ //this function will be the new value of callback, so this will be called when we use a callback function. adn the entire function will be the new value of callback/parameter. 
	console.log('inside the myfun2 - the callback function')
	console.log(`this is being called ${abc_1}`)
}
function myfun(callback){ //here, a is the parameter, adn we can put its value anything, even a function. 
	console.log('this is being called from inside the main function') //so this will be called/used/returned first, and then the callback function will run becuase we are callling it inside this function even though the callback function is written first. 
	callback('the_callback_parameter');//callback function - we are calling the a (parameter). When we accept a function, there is a convention that we must write 'callback' in the main function for the function we will call.
}
myfun(myfun2)//anything can be passed here adn it will be the value of a defined as a parameter in the function earlier, so it can be an array, string, object, or even a function. 



// 56. function returning functions - you make a normal function, then inside that function, you create another function, adn then call that inner function outside after assigning it to any variable. When you do that, that new variable's value is now the function, and you have to call that variable as a function like - ans() - and it will return/do what the assigned function's job was to do. 
function myfunc1(){ //function 1
	//return function(){} //we could also have made the inner function like this. 
	function hello(){//inner function
		return 'hello world';
	}
	return hello; //callng the inner function, so it will only work when we are calling the main function. Else, it will not run. 
}
const answ = myfunc1(); //assigning the main function to a variable answ.
console.log(answ()); //calling and printing the main function. and when we do that, the innre function will also run.  
//high order function - is callback function and functions returning functions. 


function my_newFun(){
	function my_oldFun(){
		return 'Hello from the other side!';
	}
	return my_oldFun;
}
const myyyn = my_newFun();
console.log(myyyn());



// 57. Important Array Methods - forEach, map, filter, reduce - 
//forEach - it takes an input as a callback (when a function takes argument as a function, and then we call it, its callback). So, here, forEach takes input as a callback, so it will take a function as an argument. 
const numms = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function multiplyby2(numbers, index){
	console.log('index is...' , index)
	console.log(`${numbers} * 2 = ${numbers*2}`);
} // here, we are creating a function that would take the first element of the array along with the index numbers and print after multiplying the numbers with 2.

multiplyby2 (numbers[0], 0);
for (let i = 0; i < numbers.length; i++){
	multiplyby2(numbers[i], i);
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

function multiplyby100(numbers, index){
	console.log('the index is...' , index)
	console.log(`${numbers} * 100 = ${numbers*100}`);
}

multiplyby100 (numbers[0], index);
for (let x = 0; x < numbers.length; x++){
	multiplyby100 (numbers[x],x);
};




