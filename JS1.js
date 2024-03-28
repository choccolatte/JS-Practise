// 1. console.log
// single adn double quotes works fine in JS. Backticks are also acceptable - but they are only used in string templates - 
console.log("hello world");
console.log(`hello world 2!`)
// comments are used with forward slash - / - or ctrl + / - for shortcut





// 2. variables (var) keyword
// variables can store information
// we can use that stored info later in the program
// we can also change/vary that stored info later, because of that they are called variables. To change, you dont have to write var agagin. you can just write the variable name. 
// keywords - are the already defined items in a programming languages like var, const, etc. 
// we assign strings in variables like usernames. 
// strings are collection of characters. 
// always define the variable using a variable name because they are case sensitive and always use var keyword to define it. 

var firstName = 'abc';
firstName = 'xyz';
console.log(firstName);






// 3. naming a variable
// you cant start with a number. But you can put it in the end of middle. 
// you can use only underscore _ or dollar sybmbol $ - _first or $first (both are valid names). and cant use any other special symbol
// you cant use spaces like = first name - this will give an error

// the best practise is to start with a small letter and use camelCase for naming a variable. For classes, we start with big/large letters, but thats it. 

var num1 = 20;
console.log(num1 * 52); //multiply
console.log(num1 ** 2); //power
console.log(num1 ** 0.5); //square root





// 4. let keyword 
// always declare variables or strings or numbers with let keyword. Why? Its better than var in many ways. Define your variables with let keyword unless specified otherwise. Because it helps you not declare the same variable name again and again. 
// let is mostly used for block scopes. 

let nn = 'abc New';
console.log(nn)





// 5. Declaring constants (const) - things that cant change like pi or any thing you dont want to change the value of 
// so const is constant. declaring anything with const means its value wont change, but other than that, you can do anything with it. 

const pi = 3.14;
console.log(pi);





// 6. String Indexing
// string or any variable's position starts with 0, then 1, then 2 and so on. 

let a = 'This Name';
console.log(a[1])
console.log(a[a.length-1]) //this will give you the entire length of the string including spaces.  

// finding the length of the string - 
// last index of the string = length - 1 
console.log(a.length);




// 7. Methods of strings - 
// trim()
// will trim the spaces before and after a string. 
// if you are writing the string with a let, and since let keywords are immutable (unchangable), then the changes will not happen in that original string. TO make the changes happen, you will have to define the string in a new variable.  

let trimm = '        abCDef       ';
console.log(trimm.length); //original length - including spaces
console.log(trimm.trim()) // trim() method will trim the spaces before and after the sstring. 
let newtrimm = trimm.trim(); // defining the old string with trim() method to make new string.
console.log(newtrimm.length); // new length. 


// toUpperCase()
// will make the entire string to uppercase characters. 
// this method will also give a new string and will not change the original string. To make the change permanent, either define a new variable or use another keyword. 

console.log(trimm.toUpperCase());


// toLowerCase() 
// will change the entire string to lowercase characters. 

console.log(trimm.toLowerCase());


// slice()
// with it, you can slice the strings using their indexes. It takes two parameters/indexes. But can do with one to last, or last to one as well. 

let myString = trimm.slice(11, 15);
console.log(myString);





// 8. Operators -

// Data types (Primitive Data Types given below) -    
// strings - 'abc'
// numbers - 12345
// booleans - Yes, No
// Undefined - not defined characters
// Null
// BigInt
// Symbol

// typeof() - checks the type of data used/present.
let age = 22;
let firstNa = 'Name';
console.log(typeof(age)); // can be written like this
console.log(typeof firstNa); // or this
console.log(typeof true); // or this

// converting number to strings - 
age = age + ''; //to change number to string - we just add quotation marks ('') (empty string) with the number like number + '';
console.log(typeof(age)); // age becomes string
//or
age = String(age); // or we can change number to string using String() method. 
console.log(typeof(age));

// changing string to number - 
let newNu = +'202'; // using + before a string, converts it into a number like given. 
console.log(typeof(newNu)); // string becomes number.
//or
newNu = Number(newNu); // we can also change string to number like this
console.log(typeof(newNu));





// 9. String Concatenation 
// means to add two strings together.

let string1 = 'abc'; 
let string2 = 'xyz';
let fullString = string1 + ' ' + string2; // adding two strings together, the ' ' (empty string) is just a space given to add space between the two strings. 
console.log(fullString) // both strings added. 

// adding string numbers after converting them
let ao = '10';
let bo = '100';
let fullAoBo = +ao + +bo; // adding + before both the defined strings, will change the strings into numbers. 
console.log(fullAoBo); // the numbers will be added. 





// 10. String Template
// we use strig template when we dont want to hardcode stuff into the code, and want the value from the variable. then we use String Template.  
// we use template strings using backticks (``), dollar sigh ($) and curly brackets or placeholder ({}) - exclusively in that order. 

let ax = 'DarkSeid';
let bx = 20;

let intro = 'name of the student is ' + ax + ' ' + 'and his age is ' + bx + ' ' +  'years!'; // this is the conventional method of printing string - without template. 
console.log(intro);
let introNew = `name of the student is ${ax} and his age is ${bx} years!` // string template
console.log(introNew); // will give same result without hardcoding stuff.





// 11. Undefined data type
// when you create a variable using let or var, and that variable doesnt have a value, then its undefined - variable which is not defined or not assigned value to it. 
// but not using const, when you use const, you will have to assign a value to it. 

let firtN; // no value given to variable. 
console.log(firtN);
// but you can definately assign value to a variable after declaring it. 
firtN = 'abcccc'; // like so
console.log(typeof firtN, firtN); // you can also print multiple items using console.log

// Null
// means NOTHING. It doesnt even mean 0, because 0 is 0. Null is NOTHING. 

let asi = null; //this is null. but if you check its typeof, then it will say Object. which is an error in JS.  
console.log(asi)
asi = 'not null'; // a string, assigning variable to Null.
console.log(asi)

// BigInt
// any number bigger than the MAX_SAFE_INTEGER number will come under BigInt.
// to assign it, we use BigInt(__number__); or we just use an 'n' after the number. 

let myno = 222n; // like so. The n makes it a bigint. 
let myno1 = BigInt(22254545454545454545454545454545454); //this is bigInt constructor, but you can also store small numbers in BigInt data type as well.  
console.log(myno);
console.log(myno1); //the number will have an n at the end - big int. 
console.log(myno + myno1); // bigint can be used as numbers too. But cant add bigint with other data types. 





// 12. Boolean and Comparison Operator
// Comparison operator 
// are the operators (>, <, =) that is used to compare two strings or numbers.

// Booleans
// are true or false
let n1 = 200;
let n2 = 202;
console.log(n1 > n2); // if false, then the argument is wrong, if true then the argument is correct. 

// == vs ===
// == equal - will check only the value and not data type. 
// === equal - will check the value adn the data type as well. 

console.log(n1 === n2);

// != vs !== 
// == not equal to - will check only the value and not data type. 
// === not equal to - will check the value adn the data type as well and if found not equal, print true. 
console.log(n1 !== n2);





// 13. truthy and falsy values 
// falsy values - false, empty strings (''), null values, undefined, 0
// useful in conditional statements and codes

let ao1; // undefined/empty stirng means a falsy value. Other than undefined, if this variable is false, 0, null, then it will be false. 

if (ao1){ // empty string means the boolean will take false as a value.
	console.log(ao1) //there is no defined value in the variable, so it will be false. 
}else{
	console.log('this prints!')
}

// truthy values - any value defined in a variable other than a falsy value is a truthy value - ANY VALUE 

let ao2 = 'abc101'; // this is truthy value, since there is a value. 

if (ao2){ // this will be true. 
	console.log(ao2)  //so this condition will print. 
}else{
	console.log('this prints!')
}




// 14. if else condition 
// conditional statement, if true then this, else this

let UserAg = 19;

if (UserAg > 18){
	console.log ('user can play the 18+ game');
}else{
	console.log ('you cant play the 18+ game');
}

// another example
let NumN = 195;

if (NumN % 2 === 0 ){
	console.log ('Even.');
}else{
	console.log ('Odd!');
}





// 15. Ternary operator 
// also called conditional operator 

let milk = 10;
let milkAge = milk >= 7 ? 'bad' : 'good'; // here, we are checking the value of milk using conditions and storing them in a new variable - milkAge. If milk is greater than or equal to 7 then it will store bad, else it will store good. (works similar to classic if-else statement)
// question mark(?) will be placed after the condition. And depending on the condition, the resultantt value will be stored in the new variable.  
console.log(milkAge) // the resultant value will be stored in the milkAge variable and printed. 





// 16. And or operator - 
// these are used to check more than one conditions. 
// is basically used to see whether two or more conditions are true or not in the same conditional operators/ code - 
// && - and operator - will work when both the conditions are true. 


let mmName = 'alphabet';
let mmAge = 24;

if (mmName[0] === 'a' && mmAge > 20){ // both these conditions needs to be true for the overall condition to be true, else it will be false. 
	console.log('both conditions true!')
}else{
	console.log('only one condition is true!')
}

// || - or operator (pipe) - will work if only one condition or both conditions are true. If no condition is true, then it will give false. 
if (mmName[0] === 'A' || mmAge > 20){ // only one of these conditions needs to be true for the overall condition to be true, else it will be false. 
	console.log('One conditions true!')
}else{
	console.log('No condition is true!')
}





// 17. nested if-else statements 
// an if-else statement inside an if-else statement 

// let winnNum = 101;
// let userGussedNum = +prompt('Guess a Number: '); // prompt will open a prompt window in the browser asking the user about the thing given inside and the user guessed number will then be stored inside the userGuessedNum variable. 
// // but note that, the prompt will take the result in a String data type, so you will have to change into a data type of your requirement. If we use + before prompt(), then the user entered value will be converted into number. 
// if (userGussedNum === winnNum){
// 	console.log('You guessed the right number!');
// }else {
// 	if(userGussedNum < winnNum){ //this is the nested if statement inside the else statement. So, if this else statement runs, the nested if-else statement will run and then the result will be whichever condition meets the requirements.
// 		console.log('Your guessed number is too low!!')
// 	}else{
// 		console.log('Your guessed number is wrong!!!')
// 	}
// }





// 18. if, else if, else statements
// this is used when there are multiple conditions in the if else statements. The conditions/code will run till it finds the condition that returns true. and after that, it will exit the loop. if no condition is correct, then it will return the else condition. 

let tempInt = 11;

if (tempInt < 0){
	console.log('very cold outside!!!');
}else if(tempInt < 10){
	console.log('cold outside!');
}else if(tempInt < 20){
	console.log('warm outside');
}else if (tempInt < 30){
	console.log('warm');
}else{
	console.log('very HOT!!!!!');
}
console.log('Extremely HOT!!!');





// 19. Switch - Break statement -
// is used when you have more than one options and you have to use all of them in a conditional-like statement. So, when the condition is met, that statement will only print, else it will print the default statement/condition. 
// Break is used to break the loop when the set condition is met, else, it will keep on going and will print the entire code conditions.  So by ussnig break, we make the code jump out when its conditions are met.   


let todayDay = 3;
switch(todayDay){
	case 0:
		console.log('Sunday!');

	case 1:
		console.log('Monday!');

	case 2:
		console.log('Tuesday!');
		break
	case 3:
		console.log('Wednesday!');
		break
	case 4:
		console.log('Thursday!');
		break
	case 5:
		console.log('Friday!');
		break
	case 6:
		console.log('Saturday!');
		break
	default:
		console.log('Not a Valid Day!!!');
}





// 20. While loop - 
// DRY - dont repeat yourself (a principle in coding)
// while loop is used to run a loop till a certain point/count of numbers. 
// So, we use the while loop, then we give the condition, then we print whatever we want to do inside the curly brackets{} and then increment the value by 1 or by whatever number increment we want. The loop will then continue to run till it meets the condition, adn then once done it will exit the loop.  
// With ax1++, we also increse the number by each loop so, with each loop, the original value of the code below will increase by one, and then once it ends, the end is printed the current value - 10. 

let ax1 = 0;
while(ax1<=9){
	console.log(ax1);
	ax1++;
}
console.log(ax1);

// using while loop to print out the sum of the first 99 natural numbers.
let sumTotal = 0; // the total number
let ax2 = 0; // i
while (ax2 <= 100){ // condition if i <= 100, then run the loop, else exit
	sumTotal = sumTotal + ax2; // sumtotal's value fromm before will be added to value of i with each loop so its like - 0 +0, 0+1, 1+2, 3+3, 6+4 and so on. 
	ax2++; // increasing the value of i by 1 with each iteration
}     
console.log(sumTotal); // once loop exits, it prints the value of sumtotal. 

// or, we can use the following maths equation for it - (n*(n+1))/2
// let n;
// let summmmm = (n*(n+1))/2;
// n = 100;
// console.log(n)





// 21. For loop
// unlike a while loop, where we used to declare the conditions outside the loop, in for loop,  we declare the conditions and terms inside the loop itself - like a parameter. 
// here, we are printing 0 to 5 in a loop

for (let xa = 0; xa < 6; xa++){ // defining the xa variable inside the for loop only, and this way, it becomes a local variable and will not work outside the loop. To do that, we have to define xa outside the for loop to make it a global variable - like so - let xa; for(){}.....then (or to do that, we can use the var keyword - but that has its own challenges), inside the (), we are defining our conditions, xa's initial value = 0, xa is less than 6 (so it will loop till 6 and print till 5), then xa ++ (increasing the value of xa after each iteartion)
	console.log(xa)// printing the xa variable. 
}


// using for loop we are printing the sum of first 100 natural numbers. 
let tot = 0; // the starting total number
let num2 = 100; // the range
for (totl = 0; totl<=num2; totl++){ // condition using a neww variable that will  loop through the ccode
	tot = tot + totl // the addition, here, we are not printing the numbers, just adding them adn then  storing them in the variable totl - so that its value increases from 0 and keep going till num2 (100), when the loop completes, it will exit the loop 
}
console.log(tot = tot + totl);// on exiting the loop, the amount will  print here. 





// 22. Break keyword - 
// will break the loop whenever the code/loop meets the condition set on break. 

for (let xb = 0; xb <=10; xb++){
	if (xb ===5){ // this is the coondition inside a condition so that when this conodition meets, the break keyword will execute and loop will break.  
		break;
	}
	console.log(xb); // once the loop breaks (jumps outside the loop) this will print
}


// Continue keyword - 
// 

for (let xc = 0; xc <=10; xc++){
	if (xc ===5){ // this is the coondition inside a condition so that when this conodition meets, the continue keyword will execute and will jump over the condition that meets the criteria. So, here, the loop will skip number 5 and jump from 4 to 6.  
		continue;
	}
	console.log(xc); // the loop will print from 1 to 10 excluding 5. 
}





// 23. Do while loop - 
// so in this loop, we write the thing that needs to be done(code) in the do keyword, and then we write the condition in the while loop. So, even if the condition is false, the do () code will run once, just once (if the condition is false). But if its true, then  the condition will run normally like the while loop does. 

let xd = 10; // this is the actual value of xd(variabe)
do{ 
	console.log(xd); // meaning, even if the condition is false, this will print once. 
	xd++ // increasing value of xd, so here, it becomes 11, because xd = 10.
}while(xd <= 9 ); // the while condition. 
console.log('value of xd now is: ', xd) // here, we see that the do{} increment worked and increased the value of xd, but since its not meeting the criteria, the loop exits.





// 24. Arrays - 
// array is a reference type data
// reference data types in JS are called OBJECTS - so arrays are objects in JS. 
// if you want to store multiple values (ordered collection of elements/items) in the same variable then we use arrays.  
// we make arrays using sqaure brackets. And we can also make empty arrays using empty square brakets []., like so, so that we can use it later to add something to it. 
// arrays are ordered collection of items - meaning, each element inside the array will have an index and they will not change - not interchangable. 
// you can store any type of data inside an array.
// and you can change the values inside an array using their index numbers like given below.   

let frt = ['apple', 'banana', 'lichi', 'berry', 'orange']; // arrays with 5 elements
console.log(frt);
console.log(frt[3]);// to get one specific item from inside an array, we can call them using their index numbers. 

//arrays are mutable
frt[3] = 'blackberry'; //change the value of index 3 from berry to blackberry. 
console.log(frt); //new array results printed
console.log(typeof frt) // it will give you the result - objects.


// to check if an object is an array, we use Array.isArray() function - its an inbuilt function in JS to check whether the given object is an array or not - like so - 
console.log(Array.isArray(frt)); // if true, then  the object inside is an array, if false, then its not an array. 





// 25. Array methods - 
// push () - 
// to add a new value, item, element to an array at the end of the array index, we use push method. 
// array methods are mutable, it makes the changes to the original array only, but it doesnt happen in the case of strings or primitive objects. 

console.log(frt); // original array
frt.push('pineapple'); //this will add a new variable 'pineapple' to the end of array.
console.log(frt); // like so


// pop () - 
// pop() method deletes(removes) the last element from the array.
// pop method removes the element from the array, but it will also return that element, and you can then use that element for something else - it removes and returns. 

console.log(frt); // new original array
let poppedfrt = frt.pop(); //this will remove the last variable/item of the array.
console.log(frt); // new array
console.log('the returned item is:', poppedfrt); // this is the returned item. 


// unshift() - 
// it will add an item at the beginning of the array - to index 0. 
// and you can do more than one unshift at the beginning too, but it will only be done with each instance of unshift().

frt.unshift('pineapple'); // adding 'pineapple' to the beginning of the array.
console.log(frt); // new array. 


// shift() - 
// shift will remove the first element of theh array. 
// and it will also  return the deleted item to you as well to do as you please. 

console.log(frt); // new original array
let remvdfrt = frt.shift(); //this will remove the first variable/item of the array.
console.log(frt); // new array
console.log('the first returned item is:', remvdfrt); // this is the first returned item. 

// note that, in terms of performance, push() and pop() methods are faster than shift() adn unshift() methods in an arry. why? because in shift and unshift, they act on the first indexed item, so after removing or adding, it will then have to rename each one of the array items. Not so in case of push and pop. 





// 26. Primitive and Reference data type - 
// pimitive data type - 
// primitive data types are stored in stack directly and have a fixed sized memory. They are - numbers, strings, booleans, null, and undefined vlaues. Out of which, numbers occupy the largest value - 8 bytes, bools take only one bit. so if each JS variable reserves 8 bytes (nums) memory, then the variable can directly hold any primitive value.  

let ne1 = 10; // first defined variable
let ne2 = ne1; //s second defined variable, but it is similar to first one. 
console.log('value of ne1 is: ', ne1) // printing first
console.log('value of ne2 is: ', ne2) // printing second. 
ne1++; // increasing value of ne1. 
console.log('value of ne1 is: ', ne1) // printing first after change. its value will be changed after the increment, but the secon'd value will remain the same as we degined earlier. Why? Because when we dfined ne2 = ne1, they got stored in two different places as two different instances/variables seperately, so changes made in one wont affect the other. If it was reference type, then both would have been affected. 
console.log('value of ne2 is: ', ne2) // printing second after change.


// reference data types - 
// these are objects, arrays, functions, objects holding other objects, etc,
// objects can be of any size, and they are stored in heaps, but their addresses (defined variable's address) are stored in stacks.  
// so if the defined variable changes in value (arrays), then  if you call it somewhere else, that new array will also hold all the changes - because they are being called from the same memory. 
// reference type data dont have a fixed size, their values cant be stored directly in the eight bytes memory associated with the variable, so the variable stores a reference to the value (their address). and this reference is some form of pointer or memory address. It is not the data value itself, but it tells the variable where to look (because of the address/pointer) to find the value. 
// array's (ref type data) pointer or address is stored in the stack only, but its values in heaps. 

let ar1 = [1, 2, 3, 4, 5]; // first created array
let ar2 = ar1; // we made a new array similar to array 1
console.log('array 1: ', ar1) // printing 1
console.log('array 2: ', ar2) // printing 2
ar1.push(10); // adding a new item to array 1. But it will be affected in both arrays, why? Because array 2 is taking a reference of array 1 (its address), array 2 is not a new or original array, so if the changes are made to array 1, the changes will reflect in both the arrays. this is reference type data. and same thing will happen if we make change to array 2, because both hold the same address, so changes made in either of the array, will appear in both the arrays, because the oringinal array is just 1. 
console.log('array 1 after change: ', ar1)
console.log('array 2 after change: ', ar2)





// 27. Cloning an array - 
// to copy an array, we can do it as array1 = array2, and it will be cloned, but to copy, you can just copy one data of array to the next (new), but thats bad pracatise nad would take a lot of time if you have lots of data.
// to clone an array, we use slice() method with 0 as its parameter, that way, we copy entire content from one array to the new array. And if you do arrayOld === arrayNew, if its false, then its new arrays and not cloned with same address, if its yes, then it has same address. This is one way to clone the array.  

let ar3 = [1, 2, 3, 4, 5];
let ar4 = ar3.slice(0)
console.log(ar3===ar4);
console.log(ar3);
console.log(ar4);


// cloning an array using concat() metnod - 
// using concat(), a new array will be created with all the elements of the old array. 
let ar5 =[].concat(ar3); //using conocat() method, we are storing all the values/elemtns of arr, to ar5, and empty square brackets [] mean empty array.   
console.log(ar5);
console.log(ar5===ar3);


// cloning an array using spread operator - ... - 
// using spread operator we can copy all the elements of the old array to a neww array with ease. Spread operator is denoted by three dots - ... - and then we place the name of the old array after that. All the elements then will be copied to the new array.

let ar6 =[...ar3]; // like so
console.log(ar6);


// adding more elements to an already copied array using slice() adn concat() methods- 

let ar7 = [1, 2, 3, 4, 5]; // original array
let ar8 = ar7.slice(0).concat([6, 7, 8, 9]) // we copy/clone array 7 to array 8 using slice() method. But if we want to add more elements to the already copied array, we use concat() method after slice method in the same line. This way, the new elements will be added to the end of the cloned array.  
console.log(ar8); // like so


// adding more elements to an already copied array using the concat() method- 

let ar9 = [].concat(ar7, [10, 11, 12]); // we copy/clone array 7 to array 9 using an empty array using square brackets [], then we use concat() method adn write the array to be copied (old array), adn in the same line, since its concat, we add the additional elements that needs to be added to the end of the cloned array.  
console.log(ar9); // like so


// adding more elements to an already copied array using the spread operator - 

let ar10 = [...ar9, 13, 14, 15]; // we copy/clone array 9 to array 10 using the spread operator (...) adn in the same line, after writing the old array's name, we add a comma and write the new elements that needs to be added to the end of the cloned array. This way, the new elements will be added to the end of the already cloned array.   
// we can also add more arrays to clone in the spread operator using ... - like so - let ar10 = [...ar9, ...ar7, ...ar6] - and they all will be added in the way they are written here.   
console.log(ar10); // like so





// 28. Using For loop in an array - 
// one of the most important propeties in an array is the length property - which tells us the length of the entire length. we can use the length property to loop through the entire loop.
// to get the last index of an array - we do - length - 1.
  
let frt1 = ['apple', 'mango', 'lichi']; // defining an array
console.log(frt1.length) //printing its length
for (let xa1 = 0; xa1 < frt1.length; xa1++){ // here, we will start with i = 0 (because of index number), then we go i is less than length of array - i<frt1.length, because we want to go till the last of the array's values, and then i++ = increasing the values.
	console.log(frt1[xa1]) // pringing the array one after other
}


// creating a new array by modifying the old array without changing the old array's values - 

let frt2 =[]; // creating a new empty array to fill values with the old ones'
for (let xa1 = 0; xa1 < frt1.length; xa1++){ // making the for loop
	frt2.push(frt1[xa1].toUpperCase()); // changing the old array's elements to Uppercase by using the push() method to push(add) the new elements to the new empty array
}
console.log(frt2) // printing the new array





// 29. using const to create array - 
// when using const, we cant change the value of a variable once assigned by const. If you try to do that, you will get an error - TypError
// but if you use push() method to add an element to an array defined with const, you will not get an error but and the value will be pushed/added to the array.  
// How? because when we  use push() method, we are not changing the address of the array (which is stored in the heap memory, but the address will be stored in the stack memory) - thats why we dont get an error, because the address remains the same but the value is added still to the array in the heap memory.
// if we do it otherwise like using array = [''] - to add a new variable to the array defined with const, then we will get an error because when we use array = [''], we are defining it once again, and thus changing its memory - thus, error. So, you cant use the square brackets to change the array's variables/elements when defined using const. But you can use the other array methods like - push, pop, slice, concat, etc. 
// However, if it was a let keyword, then wee can assign a new variable's element to the array, not in the case of const. 
// So, what do we use when defining an array - 90% of the time, we use const keyword, because you wont have to worry about changing its address and data being rewritten. If its const, then its constant and can only be changed using that array's properties. 
// Also, whenever you use a reference type data to define a variable, you always use const (90% of the time), it is safer and data rewriting chances are impossible. 

const frt3 = ['APPLE', 'MANGO', 'LICHI']
frt3.push('PINEAPPLE');
console.log(frt3);





// 30. using While loop in array - 
// it is similar to the normal while loop or for loop we use -

const frt4 = ['APPLE', 'MANGO', 'LICHI', 'PINEAPPLE'] // normal array
let xa3 = 0; // ths starting point of the loop, from which index we start the looping. 
while(xa3< frt4.length){ // while i is less than lengthh of array, begin loop 
	console.log(frt4[xa3]) // print the array and then the value of i (each iteration of array value)
	xa3++; // value increment 
}


// using the old array to put values in a new array using while loop - 

const frt5 = []; // new empty array
let xa4 = 0; // starting index value
while (xa4 < frt4.length){ // defining the loop conditions
	frt5.push(frt4[xa4].toLowerCase()) //here, we are pushinng the old array's data into the new empty array after converting the values to lower case 
	xa4++ // increasing values
}
console.log(frt5); //printing the new loop





// 31. for of loop in array -
// this works similar to for loop, but here, we use for - of loop to iterate(loop) through an array or any other object.
// Also,unlike for loop, you dont have to give the length of the array to run this loop, the for of loop will automatically run through the entire length of the array adn then terminate itself(exit)- 
// here, in for of loop, we usually write the loop as 'for singular of plural' for better understanding that we are taking one element from the array consisting many elements, seperately for each iteration, thats why its 'for all of alls' - its for better understanding, with singular, we are denoting one element of array, and with plural, we are denoting the entirey of array (using its name) 

const frts = ['APPLE', 'MANGO', 'LICHI', 'PINEAPPLE', 'BANANA'];
for (let frt of frts){
	console.log(frt)
}


// using the old array (upper) to populate a new empty array by changing its values - 

const frts2 = []; //empty array
for (let frt of frts){ // for of loop
	frts2.push(frt.toLowerCase()) // changing the values to lower case and populating it in new array
}
console.log(frts2) // printing new array





// 32. for in loop - 
// this works similar to for of loop, but here, we use for - in loop to iterate(loop) through an array or any other object using their index and not elements themselves.
// Also, unlike for loop, you dont have to give the length of the array to run this loop, the for in loop will automatically run through the entire length of the array using the elemtns' index and then terminate itself(exit)- 
// here, in for in loop, we usually write the loop as 'for index of array' for better understanding that we are taking first index of the element from the array consisting of many elements, seperately for each iteration, thats why its 'for index in array' - its for better understanding, with index, we are denoting the element's index in the array.

const frts1 = ['APPLE', 'MANGO', 'LICHI', 'PINEAPPLE', 'BANANA'];
for (let ind in frts1){ //here, ind = index, in array 
	console.log(frts1[ind]) // here, we are printing the entire array first, then iterating them using their index, so if you just write - frts1 (array name), the loop will run till as many number of index/elements are there and will print the entire array that many times, so, we do - array[index] - to seperately target elements using their indexes.   
}


// using the old array (upper) to populate a new empty array by changing its values using the same for in loop - 

const frts3 = []; //empty array
for (let ind1 in frts1){ // for in loop
	frts3.push(frts1[ind1].toLowerCase()) // changing the values to lower case and populating it in new array. Here, we are first writing the array name, then its index values, so the for loop will go according to the array's index number adn then  we are using the lower case method so it looks something like this - arrayname[index].method(). 
}
console.log(frts3) // printing new array


// now, we use the traditional 'for' loop or the 'for of' loop the most with arrays.  
// the 'for in' and 'while' methods are not usually used with arrays. 






// 33. array destructuring - 
// it means as it says what it means - with array destructuring, we destructure an array to store its values in different variables - if we want. 
// it means breaking down the array to store the values/elements of the array in seperate variables, or creating a new array to store only few of those variables - 
// once the new variables are created using array destructuring, you can then use those variables as normal variables - they have now become a new adn normal variables to be used as see fit - 
// to make the new variables using array desttucturing, use let (changable), or const (not changable after defining)
// if there are more elements in the array than you need, than you can just use the elements that you need and the rest will stay like that in the array only - unchanged - 

const frtDestr = ['APPLE', 'MANGO', 'LICHI', 'PINEAPPLE', 'BANANA'];
let [destrVar, destrVar1] = frtDestr; // similarly, you can create as many new variables as there are elements in the array. If the newly created variables are more than the array elements, then that would become undefined. 
let [destrVar2, ,destrVar5] = frtDestr; // if you want to skip one variable from the array then you can just use empty variable definition using commas (, ,) and more if you want to skip more than one, just add more commas (empty variables)
let frtArray = frtDestr.slice(3) // we can also use the contents of one array to populate a new array using array destructuring - using slice() method, and then putting the index numbers from where you want the new array elements to be. We cna also do this using the spread operator (...) - like so - let [destrVar, ,destrVar1, ...frtArray] = frtDestr
console.log(destrVar, destrVar1, destrVar2, destrVar5);
console.log(frtArray);





// 34. Objects in JS -
// arrays are good to work with, but not sufficient to work with real world data
// objects store key and value pair, and they dont have an index number. 
// it is a reference type data like array, and it gets stored in the memory just like arrays - in a heap, and their address is stored in the stack memory.
// for objects, we use curly brackets - {}
// when you use objects with {} - it is also called as object literal, and you can use it to make an empty object and store items later on. 
// object's keys are also called as their properties and you can store as many key-value pair as you want. you can also store an entire array in objects in the value pair of key. 
// to access a object's properties, we use dot(.) - like so- object.key, or you can add a square bracket after the object's key's name - object["keyName"] - and it will give you the saame result. Why double commas for key when we didnt use it to define it? becuase by default, JS takes the keys as string values, thats why.  
// when you create an object using the curly braces {} - they are also called as object literals. 

const perso = { // perso is theh object
	name: 'aabc', // key is name and age
	age: 20, 		// value is aabc and 20
	year: [2012, 2022, 2023, 2024] // array inside an object
}
console.log(perso) 
console.log(perso.year) // accessing perso object's year property 
console.log(typeof perso) // type of object


// adding a key value pair to an already existing object - 

perso.gender = 'Male'; // using dot notation(object.keyName) to add a key-value pair, we target the object using its name and then add a dot (.) to access its inner things, then we write the new key and new value. 
perso['occupation'] = 'Engineer'; // using bracket notation (object[keyname]) to do the same thing and both will work.  
console.log(perso)// new key-value pair added


// difference between dot notation and bracket notation
// normally, you cant use spaces as a variable names as a string in JS, it will give you an error, and so is the case when defininf a key in JS or when calling it using dot notation. However, you can do using bracket notation - so, you can call a squared string key (this key) in a square notation and not get an error, if you do so using a dot notation, it will give you an error, like so - 

const persoNew = { 
	name: 'aabc', 
	age: 20, 		
	year: [2012, 2022, 2023, 2024],
	occupation: 'Engineer',
	'gender Perso': 'Male'
};
//console.log(perso.gender of Perso) - this will give an error
console.log(persoNew['gender Perso']) // no error


// adding a new key to already defined object from another array/object/variable - 

const keyPerso = 'email'; // this is the key that you need to add in the object below
const persoNew1 = { 
	name: 'aabc', 
	age: 20, 		
	year: [2012, 2022, 2023, 2024],
	occupation: 'Engineer',
	'gender Perso': 'Male'
};
persoNew1[keyPerso] = 'abc@gmail.com' // if we do this, if we use dot notation to define the key - persoNew1.keyPerso = 'abc@gmail.com'  then it will make the variable name - keyPerso - as the key, and not the email, even when you use square brackets you will get the same result - ['keyPerso'] - but you need to use the square brackets without the string notation - [] - this will give you the defined value as the key of the object. 
console.log(persoNew1) // key will be printed as email and not keyPerso





// 35. Iterating an object - (using for in loop)
// here, we use the for in loop to loop through each item/element of the object - so iif we want to get only the key of the object we use - for (let key in objectName) - and it will iterate through the object getting us all the keys.  To get all the values, we use - for (let key in objectName) but when calling we use square bracket - objectName[key] - andn it will give us all the values of the keys of the object. 

const persoNew2 = { 
	name: 'aabc', 
	age: 20, 		
	year: [2012, 2022, 2023, 2024],
	occupation: 'Engineer',
	'gender Perso': 'Male',
	email: 'abc@gmail.com'
};
for (let key in persoNew2){
	console.log(key) // to get only the keys of the object
	console.log(persoNew2[key]) // to get only values of the keys of the object
	console.log(`${key}: ${persoNew2[key]}`) // to get the key:value pair of the object using string template
	console.log(key, persoNew2[key]) // to get the key:value pair of the object using normal method
}
console.log(Object.keys(persoNew2)); // this will give all the keys of the object in an array format - notice we are using the Object keyword here, which is an JS defined keyword
console.log(Array.isArray(Object.keys(persoNew2)))// this will show whether the Object keyword gives us the key as an array or not - if true, then yes, if false, then  not. 


// using for of loop to iterate the object - 
const persoNew3 = { 
	name: 'aabc', 
	age: 20, 		
	year: [2012, 2022, 2023, 2024],
	occupation: 'Engineer',
	'gender Perso': 'Male',
	email: 'abc@gmail.com'
};
for (let key of Object.keys(persoNew3)){ // using Object keyword to target the object itself and then their keys and then the object name - meaning, Object's keys of this Object - Object.keys(objectName) 
	console.log(key) // this will give us only the keys of the object defined. 
	console.log(persoNew3[key]) // this will give us the values only of the object. 
}





// 36. Computed Properties - 
// are denoted using square brackets - [] - so if you have an already defined variable that you want to make into a key and value pait to put inside an object - you use computed properties - [variableName] - so now, the one inside the square brackets will become the key, and their defined value will become the vvalue. - like so -  and the ressult will be in an object format - {key : value}

const key1 = 'objKey1';
const key2 = 'objKey2';
const key3 = 'objKey3';
const val1 = 'objValue1';
const val2 = 'objValue2';
const val3 = 'objValue3';
const obje1 = {
	[key1] : val1, // computed value 1
	[key2] : val2, // computed value 2
	[key3] : val3 // computed value 3
} ;
console.log(obje1);






// 37. Spread operator - 
// are denoted by three dots - ...
// in an array, even the strings themselves can be spread into seperate alphabtes using spread - like so - [...'abc'], but not numbers. only the iterable items can be spread. 
// if you repeat a key in an object, then the second defined value of the key will be assigned to that specific key, not the first one - keep in mind. 
//

const persoNew4 = { // first object
	name: 'aabc', 
	age: 20, 		
	email: 'abc@gmail.com'
};
const persoNew5 = {  // second object
	name: 'xxyz', // this key is repeated in both the objects, but we are spreading it later, that mean, that the value of this object will be assigned and not the first object because there can be no repetations in an object's keys.
	age1: 22, 		
	email1: 'xyz@gmail.com'
};
const newObj = {...persoNew4, ...persoNew5, key69 : 'Niceee!'}; //spreading both objects in a single object. And you can also add new key: value pair to the end of the spread operator as well like given so. 
console.log(newObj); // printing it. 

const alphaBet = {...'abcdefghijklmnopqrstuvwxyz'} // if we are using just strings but putting spread operator before them then, those specific alphabets will become the values and their indexes will become the keys - like so - 0:x, 1:y, 2:z. 
console.log(alphaBet)

const itemSpread = {...['Item1', 'Item2', 'Item3']} // if we have an array, then we can use them with  spread operator too, by putting spread operator before that array. those specific array elements will become the values and their indexes will become the keys. 
console.log(itemSpread)





// 38. Object Destructuring - 
// works simialr to array destructuring. we destructure the object so that their values can be treated as normal variables using object literals. 
// before you destructure the object, you need to decide what you need it in - const, var, let - accordnig to future prospects and usage and then destructure them. 

const bandItems = { //this is an object with key:value pairs
	musicItems: 'Guitar',
	band : 'Anokha',
	songName : 'Heartway',
	year : 2012,
};
const {musicItems, band} = bandItems; // here, we are destructuring the items of the object in different variables in an object format (which we can also define using let if we want to change it later, since its const here, we cant change it later), and then, we are writing the objectName at the end. So now, the elements defined inside the const object literal {} - will be the variables, and object's values will be the values of those variables.
const {musicItems: NewItem, band: newBand} = bandItems; //we can also change the ways our variables look - if we dont want to have the same names as the variables from the object, we can change them using this - const {oldName: newName} -and this will change the variables names to those newNames. By default, the variable names are the key names. 
console.log(newBand); // if we print the variables here, we will get the values

const {songName, ...restItems} = bandItems; // also, if you want to get the rest of the items of the object in a single variable, then you can do so as well using spread operator - but they will come as an object not an array.  
console.log(restItems); // if we print the variables here, we will get the values





// 39. Objects inside Array - 
// its very useful in real world applications becuase we store - inside an array - information of users or somemthing inside an object, so that it becomes an object inside an array.
// we can loop through the object using for, for in, for of or while loop, basically any loop/iteration method that we use for a normal array. 
 
const arrUser = [ // normal array creation using []
	{userId:1, 	firstName: 'abc', gender: 'M'}, // user 1 info
	{userId:2, 	firstName: 'opq', gender: 'F'}, // user 2 info
	{userId:3, 	firstName: 'xyz', gender: 'M'}, // user 3 info
]; 
console.log(arrUser); // printing the details of all users
for (let user of arrUser){ // this loop will go through each user and print them seperately in an object sequence, iterating through the entire array's objects. 
	console.log(user) // this will give the entire user data
	console.log(user.firstName) // this will give only the firstname (values) of the keys we used after the user - user.objectKey.
}





// 40. Nested Destructuring - 
// nested destructuring works similar to array or object destructuring, we know that nested arrays contain (or have) objects, so we can destructure them by creating a new empty array and then filling it with variables we want to use, and then, we define it as the nested array itself so its like - const [v1, v2] = array; - and whatever values/oblects are inside that array, they will get assigned to the new variables and once that is done, we can use them as normal objects. 
// also, to skip an object or element in nested arrays , we just use an empty space with commas and variables seperates by two commas - const [v1, , v2] = array - so it will jump the second as there is only one space skipped and then it will go to third object/element.    
// to change the name of the new variables, we just use as object destructuring - like - const [v1: newName1, v2: newName2] = array - and it will change the name to new name. 
// to destructure from an array, we use square brackets - [], and to destructure from an object, we use curly brackets - {}

const arrUser1 = [ // normal array creation using []
	{userId:1, 	firstName: 'abc', gender: 'M'}, // user 1 info
	{userId:2, 	firstName: 'opq', gender: 'F'}, // user 2 info
	{userId:3, 	firstName: 'xyz', gender: 'M'}, // user 3 info
]; 
const [{userId}, user2, {gender:user3Gender}] = arrUser1; // is we are working to destrucutr an object inside an array (nested), then we can specifically target those object's items inside the array using - [{elementName}], this will give you only that specific element of that specific object like the example above. Once the object is destructured, you write the specificn names of the variables used inside the objects' key properties, else there will be an error. 
console.log(userId, user3Gender); // here we print the user id of user 1, and gender of user 3 after changing ther variable name. Note that, the default variable name when destructuring objects will be the ones used as objects' keys. 





// 41. Functions - 
// funcitons are used to perform certain actions/tasks - and they are used/meant just for performing that action given that you have to make that function to perfom that specic action. you can have more than one function in a single function or one function take help from other functions as well. 
// using a function, you dont have to repeat the same thing to perfom a task over and over again. 
// the function in itself wont do anything unless its called upon using its name following by parantheses - funcion(). When called, the function will perfom the action it is meant to perform. You can call the same function many times, and as many times it has been called, it will perform the same action - so you dont have to repeat yourself.  
// DRY - dont repeat yourself
// sometimes, you dont want to print something using a function but return something, and you can do so as well using the function. Returning means, that the function is doing what its supposed to do, and the resultant value/item it is giving to you(returning it), and its up to you what you want to do with it. 
// function declaration - are the functions that are declared. They are different from func expression.  

function hbd (){ // creating the function
	console.log ('printing happy bday using a function') // purpose of the function
}
hbd(); // calling the function


// retuning something using a function - 

function addingTwoNums (){ // function to add two numbers
	return 10 * 100; // this will return, not print
}
console.log(addingTwoNums()); //calling the function in console log, so it will print the returned number/value. If not called using console.log, it will just return the number, that you can use in a const or anywhere else as a normal variable's value. 


// same function as above, but more reusable - 
// parameters are the variables that a function has. These parameters can then be defined inside the function only to be used as needed. 
// arguments - are the values that are passed for the functions' parameters. meaning, wheatever value you want your functions' parameters to have, you pass it later inside or outside the code, those passed values are called arguments.  

function addingNums (n1, n2){ // function to add two numbers, n1 and n2 are parameters
	return n1 * n2; // this will return, not print the resultant value of the parameters. 
}
const returnedVal = addingNums(40, 5) // here, 40 is the argument for n1 parameter, and 5 for n2, and the multiplication of these numbers will be returned and assigned to returnedVal variable. If no values are passes, then it will be NaN - not a number, because the values are undefined, and undef * undef = NaN
console.log(returnedVal); // printing the returned variable.


// function to figure out odd or even numbers - 

function isEven(num){
	if (num % 2 === 0){ // the condition 
		return true // returning the value
	}else{
		return false
	}
}
console.log(isEven(25)); // printing the returned value after passing the argument. 

// but we can shorten this above function too - 

function isOdd(num){ // similar function as above, but we shortened it considerably
	return num % 2 === 0; // even if we dont write the if-else statement here, the retuurned value will be the same - either true, or false. 
}
console.log(isOdd(20));


// function that takes a string, and gives its first character as the output - 

function firstChar(strr){ // strr is the parameter
	return strr[0]; // condition will retuurn the first index of the string 
}
console.log(firstChar('Meranda')); // function called, parameter passed, and indexed character printed. 


// function that takes array and target as an input - and give the index of the target if target is in the array of numbers, if the target is not in the array, return -1 -
// note that, when the function's for loop's condition meets, the loop will end there and will exit out of the loop. So here, if the number is found, it will exit the loop and go on with the rest of the function's code/conditions. 

function arrTar(array, target){ // function takes two parameters
	for (let i = 0; i <= array.length; i++){ // condition
		if (array[i] === target){ //here, array[i] is the index numbers of the arguments 
			return i; // if found, return the index of those arguments
		} // loop will continue till end
	}return -1; // if not found, return -1.
}
const myar = [1, 2, 3, 4, 66, 778, 5, 4,343 , 6, 3434, 3, 10000]; // argument for array
anss = arrTar(myar, 100000); // both arguments passed and returned to a variable - anss 
console.log(anss); // printing anss(answer)






// 42. function declaration - are the functions that are declared normally. They are different from func expression.  
// function expression - means that if there is a function declared, and if you define that entire function to a variable so that when the variable is called, the entire function will be called and will work, then its called function expression, because we are expressing the function in a variable. 
// these variables can be declared using const, var or let, but we mostly use const so that we  dont change the values later on by mistake. 

function arrTarExp(array, target){ // function takes two parameters
	for (let i = 0; i <= array.length; i++){ // condition
		if (array[i] === target){ //here, array[i] is the index numbers of the arguments 
			return i; // if found, return the index of those arguments
		} // loop will continue till end
	}return -1; // if not found, return -1.
}
const myar1 = [1, 2, 3, 4, 66, 778, 5, 4,343 , 6, 3434, 3, 10000]; // argument for array
const anss1 = arrTarExp(myar1, 778); // both arguments passed and returned to a variable - anss. But we are also declaring the entire function to a variable. So when we call or print this variable, the entire function will run as a whole. 
console.log(anss1); // printing anss(answer)


// a simple function expression - 

function hbdExp (){ // creating the function
	return 'printing happy bday using a function' // purpose of the function
}
const hapyBdayExp = hbdExp(); // assinging the entire function to a variable.
console.log (hapyBdayExp); // calling the said variable, and the entire function will execute. 


// we can also define the function where we are making the function only - like so - 
// and these type of functions (the one below) is called anonymous functions, because they themselves dont have any name. 

const hapyBdayExp1 = function (){ // creating the function but assigning it to a variable. And here, we dont have to give a function name because the name will be the const variable only.  
	console.log( 'printing happy bday using a function') // purpose of the function
}
hapyBdayExp1(); // here, we are calling the const variable as a function. And since its a function expression, it will run just as a function. 





// 43. Arrow Functions - 
// arrow functions are same as function expression - but instead of writing the 'function' keyword, we just put the parantheses () - and then we follow it by an arrow => adn then we go on about our normal function code and conditions - like so - const abc = () => { function conditions here } -  
// well, it is easier to write than normal functions and it is used widely in REACT. 

const hbdExp1 = () => { // creating the arrow function without the function keyword and placing the arrow (=>) symbol after parantheses and then going on from there. 
	return 'printing happy bday using an arrrow function' // purpose of the function
}
console.log (hbdExp1()); // calling the said variable, and the entire function will execute. 


// another example - sum of two parameters - 

const sumOfTwo = (x, y) => { // normal arroww function 
	return x + y; // returning the sum of two parameters
};
console.log(sumOfTwo(10, 52)) // printing the function after calling it and assigning the arguments to the parameters. 


// when writing an arrow function, if your function is taking only one parameter, then  you dont have to put the parantheses in place, you can just write the parameter there openly and the continue on with the arrow  and then the functin. But, if there is more than one inputs(parameters), then you will have to put the parantheses and even when there is no parameters - 

const firstChar1 = strr => { // strr is the single parameter, so no parantheses
	return strr[5]; // condition will retuurn the first index of the string 
}
console.log(firstChar1('MerandaHouse')); // function called, parameter passed, and indexed character printed. 


// also, if your arrow function is returning only one line of code, then  you dont have to write the curly brackets, or the return keyword. You can just return it normally - like so - 

const firstChar2 = strr => strr[10]; // this is also correct - a single line was returned so we removed it and the function will still work. 	 	
console.log(firstChar2('MerandaHouse')); // function called, parameter passed, and indexed character printed.





// 44. Hoisting - 
// 
