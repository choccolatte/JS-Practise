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
let ax2 = 0; // i - the starting point
while (ax2 <= 100){ // condition if i <= 100, then run the loop, else exit
	sumTotal = sumTotal + ax2; // sumtotal's value from before will be added to value of i with each loop so its like - 0 +0, 0+1, 1+2, 3+3, 6+4 and so on. 
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
let tot = 0; // the total number
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
// this will skip the conde that meets its conditions, and then continue on after jumpinig over that skipped condition. 

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
let ne2 = ne1; // second defined variable, but it is similar to first one. 
console.log('value of ne1 is: ', ne1) // printing first
console.log('value of ne2 is: ', ne2) // printing second. 
ne1++; // increasing value of ne1. 
console.log('value of ne1 is: ', ne1) // printing first after change. its value will be changed after the increment, but the secon'd value will remain the same as we degined earlier. Why? Because when we defined ne2 = ne1, they got stored in two different places as two different instances/variables seperately, so changes made in one wont affect the other. If it was reference type, then both would have been affected. 
console.log('value of ne2 is: ', ne2) // printing second after change.


// reference data types - 
// these are objects, arrays, functions, objects holding other objects, etc,
// objects can be of any size, and they are stored in heaps, but their addresses (defined variable's address) are stored in stacks.  
// so if the defined variable changes in value (arrays), then  if you call it somewhere else, that new array will also hold all the changes - because they are being called from the same memory/address. 
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
// you can call a function before its declared and it will work even then, but it will only happen with a named function or normal function that is written with the function keyword. It will not happen if you use function expression or arrow function.  
// if you try to do that with function expression or arrow function, then it will give an error.  These behaviors is called hoisting. 

worldHel(); // here we are calling the function even before declaring it, and it'll work. 
function worldHel(){ // declaring the function
	console.log('hello wrold!')
}


// however, if you are usingn funciton expression, adn you call the function before its declared, but you use var as the keyword when declaring, then it will give undefined. Else, in case of const and let, it will give you an error and will not work at all. Same is with arrow functions.   

console.log(worldHel1);
var worldHel1 = function () {
	return 'hello wrold!'
}





// 45. functions inside functions - 
// in JS, we can write functions inside functions as well (nested functions) - and you can make as many functions inside a single function as possible - 
// the function inside the function will be called and used in that function only - 

function newFun() { // main function
	const myInnerFun1 = () => { // inner function 1
		console.log('Hello from myInner Function 1')
	}
	const addTwoNew = function (n11, n22){ // inner function 2
		return n11 + n22;
	}
	const mulTwo = (n33, n44) => n33 * n44 // inner function 3 
	myInnerFun1(); // calling inner function 1
	console.log(addTwoNew(5, 10)); //calling inner function 2
	console.log(mulTwo(5, 10)); // calling inner function 3
}
newFun(); //this is the main function call - if its not called then all of the inner functions will be useless unless its called, else they will not work. And they will also not work outside the function itself. 





// 46. Lexical Scope - 
// lexical scope/environment basically means the local environment of a function
// so lexical scope chained function works in a peculiar way in a sense that the function will run only when called but also it will take the defined variable from inside its own function - however, if the variable of the same name is defined in local scope of the function (outside that earlier one), then it will take the variable from there (it will look outside its own function for the value of the variable), and if the vairbale is defined outside the entire function (on a global scale), then it will take the value of the variable from there and use it in its conditions/code. 
// But if the value of the variable is given inside that function only, then it will not have to look elsewhere and it will use that only, else, it will keep looking one step above it (outside its own function) to search for the variable (only if it has the same name) and then when it finds it, it will use it. 

const myVar = 'value - 0';
function myApp () { // main function
	const myVar = 'value - 1'; // main myVar variable value

	function myFunc(){ // inner function 1
		const myVar = 'value - 2' // inner myVar variable value 2
		console.log('from inside my Func 1', myVar) // this will take value 2 as myvar value, but it we hadnt provided it, then it woudl have searched in myApp function's myVar variable and use it - value -1
		function myFunc2 (){ // inner inner function 2
			const myVar = 'value - 3' // inner inner myVar variable value 3
			console.log('from inside my Func 2', myVar) // this will use value -3, but if it was not present, it would have looked outside its scope and if found would have printed - value -2, if even that was not there, then it would have looked one step outside and would have printed value -1 from myApp function's variable. And if it didnt find any myVar value, then  it woudl have looked on the global scope (outside function) and printed value - 0. 
		}
		myFunc2();
	}
	
	console.log(myVar);
	myFunc();
}
myApp();





// 47. Block and Function scope - 
// let and const are block scopes - meaning if you use them to declare a variable inside a scope ({}), then you can use them inside that scope only. not outside of it. You can access these inside that specific block only. 
// var is a function scope - meaning, unlike let and const, if you define var anywhere in the program - function, scope or anywhere else, it can be used in the entire program or any function/block inside it. 
// Blocks are written inside curly braces - menaing any code within {} is a single block.   
// var can be used in the entire codebase/code window, because JS treats the entire code space as one main function - global scope. 

//block 1
{
	let fname = 'from inside a block scope' // defined variable using let keyword
	console.log(fname) // printing it inside the block - no error. 
}
//console.log(fname) // printing it outside the block - will give error. 

//block 2
{
	const fname = 'from inside block scope 2' // defined variable using const keyword. If we had used var to define the variable, then we wouldnt have gotten an error. 
	console.log(fname); //printing it inside the block - no error. 
}
//console.log(fname) // printing it outside the block - will give error. 

const fname = 'from global scope'; // defined variable in global scope
console.log(fname); // this will not give error. 

// another example
// anything inside curly braces (for loop, while loop, if condition) is a block.
if (true){
	var fname1 = 'abc';
	console.log(fname1)
}
console.log(fname1); // cant access the fname1 variable here outside the block as we defined it using let, if we had used var, then we wouldnt have gotten an error. 


// another example - using a function - 
function myNewAp(){
	if (true){ // an if condition that is always true
		var fnae = 'xyz';
		console.log(fnae);
	} // condition will run till here, and since its true, then it will do as insstructed. 
	console.log(fnae); // if inside the if condition, the vvariable is defined using var, then this will print, else, it will give an error. Note that lexical scope wont work here, because this console.log() is not inside the lexical scope of the function. If the variable was defined outside the function, then there would not have been an error, because that would have been its lexical scope. But if we would have used var to define the variable, then we could have access it anywhere.  
}
myNewAp();





// 48. Default parameter - 
// meaning, if we are making a function, then in the parameter defining only, we can set a default value for those parameters, so that if there is no value given as argument, the parameters will take the default value and then will work using that. Else, if the argument is given for the parameter, then theh function will use the given argument. 

function addNum (a, b, c = 10){ // here, we are putting a default argument of c parameter as 10, so if nothing is given, c will take 10 as the argument. 
	return a + b + c;
}
const addAns = addNum(4, 5) // giving arguments only for a and b.  
console.log(addAns)





// 49. rest parameter - 
// it means, if there is more arguments than the parameters given, then chances are, there might be an error. If we want to store/assign the rest of the arguments in a single parameter, then we can do so using the spread operator (...) when defining the parameter. When that is done, the rest of the leftout argument will be assigned to the parameter with the spread operator.   

function myNum (a, b, ...c){ 
	console.log('value of a', a)
	console.log('value of b', b)
	console.log('value of c', c)
}
const adAns = myNum(4, 5, 6, 7, 8, 9) // rest of the numberrs will be assigned to c as an array. 

// making a function to add any range of numbers given as an array   - 
function addAll (...numss){ // using the rest parameterr (...)
	let tott = 0; // the counter - total of/sum
	for (let num of numss){ // for loop to loop through the given arguments
		tott = tott + num; // adding all - total (completed loop) = total(before the loop) + numbers (next in line)
	}
	return tott; // returning the total (added numbers)
}
const ansss = addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1) //arguments
console.log(ansss) //printing the entirety of funciton that was defined in a variable. 





// 50. Parameter Destructuring - 
// It is used mostly with objects, and is used much in React. 
// it basically means that if we have parameters that are known or that we can borrow from other objects, then we can use the object's defined keys as function's paramaters - like so - parameter(fname).
// it alos means that it is possible to unpack(take) values from arrays, or properties from objects, into distinct variables to be used in the function, given that we pass function's arguments as the name of the object, so it knows where to loook. 
// unpack or segregate values from an array or object literals into distinct variables. 

const myPerson = {
	fname: 'sky',
	gender: 'female',
}

// function printDetail (obj){ // a function with a parameter that is not known
// 	console.log(obj.fname) // here, we are destructuring the parameter and assigning the values of myPerson to function's parameter.
// 	console.log(obj.gender) //same with here, so now, we haev two arguments of function's parameters, that we can use seperately as well. 
// }

function printDetail ({fname, gender}){ // the fname and gender(parameters) are known from the object we defined earlier. if we give an extra parameter that is not in the object, then it will give undefined as a result. 
	console.log(fname); // we can use those known parameters singularly as well.
	console.log(gender);

}
printDetail(myPerson);// calling the function, and in the argument we pass the object's name, so now, the function understands that the arguments we are to take for our parameters have to come from the object only. 





// 51. Callback Function - 
// callback functions are those functions that take another function as the input/argument. So when the main function is called while having the seoncd function as the argument, it will run/give the entire argument's function as the parameter.
// when you take an entire function as the argument, you can also call the parameter of that argument. WHen that happens, the argument (called function) will run in its entirety.
// there is a convention when using a callback function - that we use 'callback' as the parameter in the main function. So, it means, that we accepting callback and then calling it. 
// also, the sequence of running of the code will depend on what sequence you are calling the functions. 
// if the funciton that is to be called has a parameter too, then it must be defined (provided an argument for the parameter) in the callback function when calling the function that is to be called - callback('parameter');
// put simply, if you take any function as an input and then call it - thats callback function. 

function myNewF (name){
	console.log('from inside my New Function'); //this will print second
	console.log(`the name is ${name}`) //string template giving the parameter's passed argument. this will print third
}

function myOldF(callback){
	console.log('hello, from the old Function'); //this will print first
	callback('sky') // we are calling the function to be called function and passing an argument for it. 
}
myOldF(myNewF);





// 52. function returning functions - 
// when a function returns another function (like it returns a string, number or something else), thats what it is.
// Make a function inside a function (or anywhere else), but when it returns the contents/functions of that function, then when called, it will return the function's function - like so - return function. 
//  higher order function - when you are using a callback function or a function returning function, inside a function, they are called higher order function. 

function myFunF (){
	// the commented part would also have done the same thing. 
	// return function(){
	//	return {name: 'abc',
			// age:14,} 
	// }
	function prinHel(){
	return {name: 'abc',
			age:14,}
	}
return prinHel; // since we are returning the printHel function, we dont use () - like printHel(), instead, we treat this function as another variable - like return variable, thats why we are using - return printHel here. 
}
const myFunF1 = myFunF(); // we are assigning the main function to a const so that when w e call the const(variable), the entire function(along with the inner function) runs.
console.log(myFunF1()) // printing the variable with function inside it. If we were returning just the main function, then it would have given us the inner function as a result becuase thats its only function. Else, it would have done that thing and returned the main funcion's function along with the entire inner function as it is.  





// 53. Important Array methods - 
// forEach - 
// forEach works similar to the for loop - it will go through each item of the array/string/object and run them through the conditions of the function.  

const exArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function multiTwo(number, index){
	console.log(`index is ${index}`)
	console.log(`${number} * 2 = ${number * 2}`)
}
// for (let i = 0; i <= exArray.length; i++){
// 	multiTwo(exArray[i], i)
// }

exArray.forEach(multiTwo) // forEach will do the same thing that the for loop is doing in the commented code above without writing all the codes and the conditions. 
// it will take the array - exArray, then forEach(), and then the name of the function inside the forEach parameter - forEach(multiTwo) - this will go through each item of the array and run the function over and over again on all of them. 


// you can use a callback function to do the above code, or do the same thing using an anonymous functionn (a function that doesnt have any name)

exArray.forEach(function(number, index){
	console.log(`index is ${index}`)
	console.log(`${number} * 2 = ${number * 2}`)
}) // it will give you the same function and result as the code we wrote earlier - but this is crispier and much easier and smaller to write. 

// my made program solution
const nummm = [4, 3, 5, 6, 8]
nummm.forEach(function(number){
	console.log(`2 * ${number} is ${2 * number}`)
})

// the actual solution
const nummm1 = [4, 3, 5, 6, 8]
nummm1.forEach(function(number){
	console.log(number * 2)
})


// realistic example of forEach - to print just one variable from all the users using forEach () method - 
const userN = [
	{fName: 'abc', age: 52},
	{fName: 'xyz', age: 42},
	{fName: 'opq', age: 12},
	{fName: 'pqr', age: 32},
	{fName: 'stv', age: 22},
];
userN.forEach(function(user){ // here, function is taking the user as an object - here, user is the parameter, and userN is the argument for that parameter connecting the userdata to the function. And since this function doesnt have a name, so its an anonymous function. 
	console.log(user.fName)
})

// we can also write the above function as an arrow function - 
// also, note that the forEach() method doesnt give us a new array/dataset, it just uses the old data from the old array.   
userN.forEach(user => {
	console.log(user.fName)
})

// or we can do the above function using the for of loop as well - we can also use normal for loop as well - 
for (let user of userN){
	console.log(user.fName)
}



// Map() method - 
// the map method works similar to the forEach() method andn is an array method.   
// when you use map() method, it returns us a new array with new data and address. and when using map() method, we always return something. Why? Why not console.log(). because it will always give new array, so with console.log() we print the original data only, and there is no new data in the newly assigned map array, so it will give undefined for it. 
// just like the forEach() method, the map() method will also take a callback function as an input. 
// how does map() work - when you use map, it will first call the function it is associated with(here, cube), then it will pass the number of the array associated with the function (one number each time), and for each number/iteration, it will run the function for that number adn will return the new value to a new array. Andn then, you can store that new array in a variable (const newNoms) and then use that new values in your code/projects. 

const noms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cube = function(num){ // anonymous function with num parameter
	return num * num * num; // the equation
}
const newNoms = noms.map(cube); // using the callback function and associating it in the noms array. Since we are using map() method, it will return a new array. 
console.log(newNoms); // printing the new array. 


// the same function above can also be written this way - we can also use arrow functions like forEach() method above - and we can also write the numbers' index - 
const newNoms1 = noms.map(function(num, index){ 
	return `${index}, ${num * num}`; // this is a square condition. 
})
console.log(newNoms1); // printing the square of all numbers above. 


// using map() in a practical use - 
const userN1 = [
	{fName: 'abc', age: 52},
	{fName: 'xyz', age: 42},
	{fName: 'opq', age: 12},
	{fName: 'pqr', age: 32},
	{fName: 'stv', age: 22},
];
const newUse = userN1.map((user) => { // using an arrow function to print only the firstnames of the users from the array above. 
	return user.fName
})
console.log(newUse);





// filter() method - 
// is also a function of an array. 
// it will take a callback function as an input.
// filter() method always returns a boolean value - either true or false. 
// it will also give a new array as a result - just like map() method.  
// using it, you can filter out values/objects inside a variable/array/objects, etc.

const noms1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const isEve = function (number){
	return number % 2 ===0; // will return when conditions meet a new array of even numbers only. 
}
const nomsPrint = noms1.filter(isEve); // taking the callback function as an argument. And then,it will keep on passing the array's values from noms1 array. And it wil return in array only when it returns true - even numbers. 
console.log(nomsPrint);


// it can also be written as this - this time, for odd numbers 
const isOd = (number) => {
	return number % 2 !== 0; // will return when conditions meet a new array of even numbers only. 
}
const nomsPrint1 = noms1.filter(isOd); // taking the callback function as an argument. And then,it will keep on passing the array's values from noms1 array. And it wil return in array only when it returns true - odd numbers. 
console.log(nomsPrint1);




// reduce () method - 
// reduce method will take a callback function as an input and it can be used with arrow function or anonymous function.  
// along with the callback, we can also pass the initial value, which will be the first value of the accumulator/initial value - like so - const summ = noms4.reduce((accumulator, currentValue) => {
// 	return accumulator + currentValue;
// }, 100);
// using this, we can tamper/change the initla value from which the accumulator starts. 

// this function will sum all the numbers of the array - but using reduce method. - 
const noms4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const summ = noms4.reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
});
console.log(summ)

// here we see how reduce () works -
// reduce takes two parameters - accumulator (which will hold the first value of the array), and current value (which will hold the second value of the array)
// and these two's values will keep on moving one number forward till the loop ends and the condition is met.  here, we are adding all the numbers in the array - so this will be the actual working process of the reduce() method - 

// accumulator        currentValue		return
//  	1					2			3
//		3					3			6
	// 6					4			10
	// 10					5			15
	// 15					6			21
	// 21					7			28
	// 28					8			36
	// 36					9			45
	// 45					10			55


// another example of reduce() - 
const userCart = [
	{prodId: 1, prodName: 'shoes', price: 10000 },
	{prodId: 2, prodName: 'tablet', price: 20047 },
	{prodId: 3, prodName: 'tv', price: 30800 },
	{prodId: 4, prodName: 'laptop', price: 40500 },
	{prodId: 5, prodName: 'mobile', price: 55000 },
];
const totAmount = userCart.reduce((totalPrice, currentProduct) => {
	return currentProduct.price + totalPrice
}, 0);
console.log(totAmount);

// how does it happen - 
// total price			current			return
// 0					{}				10000
// 10000			20047				30047
// 30047			30800				60847
// 60847			40500				101347
// 101347			55000				156347




	

// 54. sort ()  method - 
// this method sorts the data in ascending or descending orders. 
// this method changes/mutates the original array so that the original array becomes the sorted array. 
// howevevr, sort () method sorts the data according to the string values not according to the numerical values. in other words, if you have numbers that needs to be sorted, it wont sort it as numbers but as strings. It coonverts the entire numerical data into strings and then sorts according to that changed stringed data. 
// Strings are sorted according to the ASCII code, whichever data has the lowest or highest ASCII code, it sorts according to that. 
// But, it has its positive as well - alphabetical strings are sorted accordingly, and capital letters are sorted first and then the smaller letter ones. but not the numerical ones. 
// sort () method as an input takes an optional callback function.


const valSort = [10000, 20047, 1, 3, 30800, 4, 40500, 5, 55000, 2]; 
const sortedVal = valSort.sort((a, b)=>{ // here, we are taking two parameters, a and b, a will be the current value of the array and b the next value.
	return a-b; // and if a - b is greater than 0 (any positive number), then the smaller number will be printed first (b then a), and then the larger one and it will sort in ascending order else it will sort in descending values order (a then b). For practical usage, we use a-b, and for descending order, we use b-a. 
})
console.log(sortedVal);


// realistic example of sort() method - in an online store - sorting price according to low to high, or high to low -  

const prodFlip = [
	{prodId: 1, prodName: 'shoes', price: 10000 },
	{prodId: 2, prodName: 'tablet', price: 20047 },
	{prodId: 3, prodName: 'tv', price: 30800 },
	{prodId: 4, prodName: 'laptop', price: 40500 },
	{prodId: 5, prodName: 'mobile', price: 55000 },
]
const loToHi = prodFlip.slice(0).sort((a, b) => { //by using the slice(0) method, we are storing the sorted values of the original array into a new array - loToHi. The 0 in the slice() methdod means start from 0 and go till the end of the index.   
	return a.price - b.price // here, we are using the same optional parameter as we saw earlier in the sort method. a.price is the price of the first product, b.price is th eprice of the current product, and according to the condition, if a-b is positive number, then it will sort the products in ascending order. And it will make changes to the current array only. 
})
const hiToLo = prodFlip.slice(0).sort((a, b) => {  
	return b.price - a.price // this will give a high to low sorted array adn we stored the returned values in a new array - hiToLo so the original values are not changed. 
})
console.log (hiToLo)






// 55. find() method - 
// it will also take a callback function as an input
// find () method, returns the first occurance of the string or value it finds and not any more, so use it as such. if conditions do not match, it will give undefined. 

const userr= ['shoes', 'tablet', 'tv', 'laptop', 'mobile']
function isLen (string) {
	return string.length > 5; // through this condition, we are trying to find any string from the array that is greater then 5 length. And it will return/print that string.  
}
const ans = userr.find(isLen) // finding the length of string from array using function.
console.log(ans);


// realistic example of the finc() method - finding the user with a specific userID
const userN2 = [
	{fName: 'abc', age: 52, userId: 1},
	{fName: 'xyz', age: 42, userId: 2},
	{fName: 'opq', age: 12, userId: 3},
	{fName: 'pqr', age: 32, userId: 4},
	{fName: 'stv', age: 22, userId: 5},
];
const fndUsr = userN2.find((user) => { // or user.userId ===5
	return user.userId ===5
}); // this arrow function will find the user with the userId 5 and it will return it. 
console.log(fndUsr);





// 56. every() method - 
// is used to check if every element/values in a variable meets a certain criteria. 
// It takes a callback function as an input and will return boolean - true or false. 
// and even every() method will return true or false - boolean values and will return true only when every value meets the criteria. It goes through every value of a variable, checks them whether they meet the criteria, and if they do, it will return true, if even one of them doenst meet the criteria, it returns false. 

const noms2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function isEv (num) {
	return num % 2 === 0;
}
const ans12 = noms2.every(isEv); // it will give false, because not every value is even. 
console.log(ans12);


// realistic example of every() method - to find whether all the price in the cart is less than 30000.
const userCar = [
	{prodId: 1, prodName: 'shoes', price: 10000 },
	{prodId: 2, prodName: 'tablet', price: 20047 },
	{prodId: 3, prodName: 'tv', price: 30800 },
	{prodId: 4, prodName: 'laptop', price: 40500 },
	{prodId: 5, prodName: 'mobile', price: 55000 },
]

const result = userCar.every((carItem) => carItem.price < 30000);
console.log(result); // the result will be false, because not every item in the cart is less than 30000. 





// 57. some () method - 
// unlike every() method, some() method will search the entire values of the variable and checks whether some values meets the criteria or not. 
// it returns boolean value as a result, so if some meets the criteria, then returns true, else false. 

const noms122 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resul = noms122.some((num) => num % 2 === 0);
console.log(resul) // it will give true as a result, because in the array, there are values which meets the criteria. 


// a realistic example of some() method - 
const userKar = [
	{prodId: 1, prodName: 'shoes', price: 10000 },
	{prodId: 2, prodName: 'tablet', price: 20047 },
	{prodId: 3, prodName: 'tv', price: 30800 },
	{prodId: 4, prodName: 'laptop', price: 40500 },
	{prodId: 5, prodName: 'mobile', price: 55000 },
]
const result1 = userKar.some((cartItem) => cartItem.price > 50000);
console.log(result1); // it will give true as a result, because one item in the cart is bigger than 50000.





// 58. fill() method - 
// value, start, end
// fill() method is used to fill the empty spaces or arrays or objects using any value. It takes three parameters - value - what value needs to be filled with, start - the start of the index, end - end of the index. So, from the start index to the end, the fill method will fill the array with the value. 
// The start and end parameters are optional if you want to fill the entire array with the value's value. 
// if working with an old array with existing values, and if you decide to use the fill() method on them to change their values, it will make changes to the original array. 

const myArr = new Array(10).fill(0); // here, we are creating a new array using new keyword and Array () method, we are assigning 10 to the array so the array will be of 10 length. fill(0) method will fill the entire array with the value of 0 and it will all be stored in theh myArr variable. 
console.log(myArr);


// another example of fill() method - 
const nomsAr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // original array
nomsAr.fill(0, 2, 6) // it has value - 0, start - 2, end - 6
console.log( nomsAr)





// 59. splice() method 
// start, delete, insert
// is used for two methods - to delete or insert any values between an existing array. 
// it will make changes to the original array only. 
// it takes three parameters (one optional) - start - the starting index from where you want to delete something, delete - how many items to delete (numerical value), insert - how many items to insert (and their value)
// also, the item that you are deleting, it will also return that value somewhere, so if you want to use it, you can use it as well. 

// deleting - 
const newAr = ['item1', 'item2', 'item3', 'item4', 'item5'];
newAr.splice(1, 2) // here, 1 is the starting index, 2 is the number of items to delete, so index 1 and index 2 will be deleted. 
console.log(newAr)


// inserting - 
newAr.splice(1, 0, 'inserted item') // here, 1 is the starting position(index), 0 - since we are not deleting anything so its 0, and 'inserted item' - is the item to be inserted, it will be inserted at index 1 since thats the starting position. 
console.log(newAr)


// inserting and deleting together - 
delItems =  newAr.splice(1, 2, 'newInserted Item 1', 'newInserted Item 2', 'newInserted Item 3') // 1- here, we are starting from index 1, 2 - deleting 2 items, and the inserting 3 new items  so the new items will be between index 1 and last index. And since we are also deleting two previous items, we can store them seperately and use them somewhere else as well, here, we are doing that in delItems variable. 
console.log(newAr); // the original array with new changed items 
console.log(delItems); // the deleted items





// 60. Iterables - 
// iterables are the things like strings arrays on which we can use the for of loop.
// objects are not iterable 

// looping a string 
const newNa = 'abcxyz';
for (let char of newNa){ // printing each value of string seperately using a loop
	console.log(char)
}

// looping an array
const nom = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let num of nom){ // printing each value of nom array seperately using a loop
	console.log(num)
}

// looping an object - it will give an error because objects are not iterables. 
// const usrObj = {prodId: 1, prodName: 'shoes', price: 10000 };
// for (let obj of usrObj){
// 	console.log(obj)
// }


// array like objects -
// objects that has length property are array like objects
// any objects that we can access using their index numbers are array like objects. 
// example of such is - strings. 

const newNa1 = 'abcxyz'; // a string
console.log(newNa1.length) // we can use the length property on it
console.log(newNa1[5]) // we can find its values using their indexes. So, strings are array like objects. 





// 61. Sets -
// sets are iterable. 
// they can store data in linear way (1 to 2) and have their own methods. 
// but, you cant access them using their indexes. 
// and their order is also not guarnteed because they dont have any index. 
// they take only unique items, so no duplicate data are allowed but in arrays, they are allowed. 
// you can make a new set using Set() method and then can add any values like arrays, strings, ints etc. 
// mostly, we keep a set empty - new Set() - andn then later, we keep adding numbers or any other values to the empty set - numbers.add(1) - 
// you cant usually repeat a value data inside a set, but its only when you are defining it in one go - like [1, 2, 1]  - but if you add similar/matching data values using two Set.add() methods - then it will add, why? Because, acc to JS, those two data values have different memory allocations inside the set. 
// you can have multiple data type values in a single Set, but if you want to add two arrays with matching values, then both will add because they both have different memory allocations even though they both have the same or matching data, but it will only happen in case of arrays. 
// when to use set - when you know you have unique values like userIDs, and you know that those user IDs wont be repeated. 

const numSet = new Set([1, 2, 3, 4, 5, 1]); // here, we are writing two times in an array inside a set, buut the second 1 is repeated so it will not show in set. 
console.log(numSet);
numSet.add(['item 1', 'item 2']); // similar array data, but both will be added
numSet.add(['item 1', 'item 2']);// similar array data, but both will be added
console.log(numSet);
if (numSet.has(5)){ // using the has() method, we can find out whether certain values/items are inside a given set or not. If there are, then it will return true, else false.
	console.log('5 is present')
}else{
	console.log('5 is absent')
};


// since Sets are iterable, here we are trying to loop through them - 
for (let num of numSet){
	console.log(num)
}


// here, we have a repeated values in an array, so we are trying to get only the unique values from that array inside a new set - 

const numSet1 = [1, 2, 3, 4, 5, 1, 6, 7, 8, 9, 7, 5, 4, 4, 3, 33, 2, 5, 6, 7,555, 4, 4,3, 4, 5, 6, 6, 5,4 ,4, 3, 3 ]; // many repeated values
const uniqueElem = new Set(numSet1); // passing the array to a new Set
console.log(uniqueElem); // only the unique values will be added to the set. But here, we cant use the length property to find the length of the Set, it will give us undefined. 
console.log(numSet1);// the original array - unchanged still. 


// finding the length of a Set - 

let length = 0; // starting from count = 0. 
for (element of uniqueElem){ // taking each element of the newly created Set. 
	length++; // increasing the count by 1 after each iteeration. 
}
console.log(length); // the entire length of the Set will be printed, just the set. 





// 62. Maps
// it is an iterable. And it can store data in ordered fashion. 
// Maps store data in key: value pair (just like objects), but unlike objects, duplicate keys are not allowed in Maps.
// The difference btw Maps andn Objects is that - in objects, you can only have strings or symbols as key, but in maps, you can use anything as keys like arrays, numbers, strings, etc.    

const newPer = { // putting curly braces - {} - and writing the key: value pair in objects is also known as object literals - literally creating objects by yourself. And ib objects, 99% of keys are in strings, and the remaining in stymbols.
	firstName: 'xyz',
	age: 32,
	1: '1' // here, we are taking 1 as key, but as its an object, it will change this int key into a string key.  
};
for (let key in newPer){
	console.log(key) // printing all keys here using for-in loop. 
	console.log(typeof key) // all keys are strings in objects
}


// using key:value pair in Maps - and as mentioned above, in Maps, we can keep any data type like numbers as keys whcih we couldnt do so in Object. 
const newPer1 = new Map() // an empty map - map literal. 
newPer1.set('firstName', 'xyz') // inserting first key:value pair as a Set in Map. 
newPer1.set('age', 32); // inserting second key:value pair as a Set in Map. 
newPer1.set([1, 2, 3], 1) // array as key
newPer1.set({1: 'one'}, 123) // object literal as key 
console.log(newPer1)

// accessing the data from inside the Maps, unlike objects, we cant use - map.keyName - to access the keys, to do so, we have to use the get() method - 
console.log(newPer1.get(1)) // accessing the numerical key of Map like this.
console.log(newPer1.get('firstName')) // accessing the value of the key using this - mapName.get('keyName').
console.log(newPer1.keys()) // keys() method will give you the entire key used in the Map, and we can also do so using loop. 

for (let key of newPer1.keys()){
	console.log(key, typeof key) // here, we are accessing all the keys of the Map using the for-of loop and keys() method. So here, it will print the keys, and their type as well. 
};


// we couldnt use for-of loop in objects as it was not iterable, but in Maps we can do so - like so - 

for (let key of newPer1){
	console.log(key) // it will give all the keys of the Map 
	console.log(Array.isArray(key)) // will tell us whether the type of key, value are arrays or not - they are arrays only - it will return true as result.  
};


// destructuring the key-value pair in maps and printing them after destructuring - 

for (let [key, value] of newPer1){ // here, we are destructuring the [key, value] in the loop condition itself. 
	console.log(key, value) // printing the destructured key, value pair. 
};


// adding additional key, value pair in an already existing Map - 
// to add key value pair in a map, we use map() method, then a main array [] which will hold all the key-value pair, and then another array consiting the specific [key-value] pair, so it will look sometjing like this - ([['a', 1], ['b', 2]]) - and so on - 

const newPer2 = new Map ([['fName', 'abc'], ['age', 900]]) // two key:value pairs, defined seperately. 
console.log(newPer2);


// realistic examples of Map - 
// its an object with a key:value pair, but we want to store it in a Map, so how do we do that?

const newPer3 = { // normal object with key:value pair. Now, we want to add additional info to this object without using object, but with using Maps.
	id: 1,
	name: 'poqo'
};
const perInfo = new Map(); // new empty map, where we are going to set the above key:value pair to. 
perInfo.set(newPer3, {age: 18, gender: 'female'}) //the original object taken as the argument for the set() method, and then in the same line, we define the new key:value pair as objects. Note that these two key:value pair will be part of the same object - newPer3, but the original will be object, and new one will be map.   
console.log(perInfo);
console.log(newPer3.id); // calling the original key:value pair 
console.log(perInfo.get(newPer3).gender);// calling the new key:value pair using get() method. 






// 63. Cloning objects using Object.assign - 
// firstly, we can clone by using the spread operator (...)

const newObje = {
	key1: 'val1',
	key2: 'val2'
};
const newObje1 = {...newObje}; // by using spread operator in the old object, we can clone the old object to a new one - newObje1 - and the changes made to the old object wont be reflected back to the new object. 
newObje.key3 = 'val3'; // adding a new key:value pair to the original object
console.log(newObje)
console.log(newObje1)


// another way to clone object - using Object.assign - 
// Object.assign () takes two parameters - {} - an empty object or object literal where the new data will be stored in - and the oldObjectName - the name of the object from where we need to copy the key:value pair or the old object which we need to clone. So the final code will look like this - const newObje2 = Object.assign({}, newObje);

const newObje2 = Object.assign({}, newObje);
console.log(newObje2);





// 64. Optional chaining 
// we access the key or property inside an object by using the . (dot).
// its main use is in nested objects - objects inside objects. 

const newObje3 = {
	key1: 'val1',
	//key2: {insideKey: 'val2'}
};
console.log(newObje3) // accessing the entire object
console.log(newObje3.key2) //accessing key2 inside the object. 
console.log(newObje3?.key2?.insideKey) // accessing the inside key, inside the key2 key insidee the main object. But if there was no key inside key 2, or the internal key:value pair were missing but we still tried to access it, then we would get an error - uncaught TypeError. But there is a way to get past that. 
console.log(newObje3.key2) // note that, if the second key was not defined (here we have commented it for the sake of the program), we are getting undefined, meaning that key2 is not defined yet. But if we try to acess it even further, we would get error not undefined, becayse we were trying to access the key inside undefined where there was no defined key or property. 

// in react (in state management) or in some JS programs, we dont know about all the properties of an object, and chances are, according to the code, we might get the property the next minute which we dont have right now. Meaning, that the property is not in the object right now, but in the future, the property might be there, and we dont want our program to give us error, we want it to give us undefined. To do that, we use the questionmark followed by dot(.) - like this - console.log(newObje3?.key2) - and if we do that, we wont get the error message even though the property is not in the object, it will give us undefined, adn when the property comes up, it will behave like normal code and use that property.  

// how do we read this questionmark . thing in console.log(newObje3.key2) - it just says whether newObje3 exists or not, if it exists, then give me key2, if it doesnt, give me undefined and do not proceed further because there is no object named - newObje3 (object name)
// for example - 

let user10; // an empty undefined variable
console.log(user10?.key1) // here, we are asking the key from inside the undefined(empty) user variable, so it should give an error in normal case. But since we are using ?. here, it will give us undefined and will not proceed to key1 because there is no defined user10. and so, we will not get an error. 





// 65. Methods
// functions inside objects - are methods.  
// we already know that we can set an entire function as a value to a key inside an object. We will be using that here, and that function inside object is the method. 
// 'this' in any code is an object. It is an object that is calling to the function it is mentioned/written in.  

const persoN = {
	fName: 'abc',
	id: 20,
	about: function(){ // creating a function inside an object - its a method.  
		console.log(`person name is ${this.fName}, and person id is ${this.id}`) // do you know what this here mean? It means that 'this' is calling to the object it is placed in, so this.fName here means object.fName. Also, you dont know the value of 'this' when you are writing the code, you only know the value of 'this' when the code is running - its value is known in RUNTIME. In this function, 'this' is calling to the function()/method(). So here, 'this' is the entire object - persoN. So this.fName means - persoN.fName and so on. 
	},
	new: function(){ // we created another function inside the object specifically to see how this works. 
		console.log(this) //here, we are just calling 'this'. And when the functiion is called, 'this' will give us all the key:value pairs of the persoN object. 
	}
}
//console.log(persoN.about) // doing this will print the entire function here. 
persoN.about() // but just calling the function of the object will run the function and let it do its job. Here, about() is the  method that is calling the persoN object, so in the about() method, 'this' is - persoN - object. 
persoN.new(); //here, when the functiion is called, 'this' will give us all the key:value pairs of the persoN object. So, in other words, using 'this.keyName', we can target specific keys inside the persoN (or any other) object. 



// another example of 'this' - 
// here, we are creating the function outside the object, but its callig the same 'this.fName' whose value we dont know yet. It will be known when  we call the function itself. 
// note that, if you call this function without assigning anything or linking it to any object, then it will give 'undefined' as a result in place of 'this.fName'. Why? Because its not linked to the object that has the properties the function is calling. 

function persoInfo(){  
	console.log(`person name is ${this.fName}, and person id is ${this.id}`) 
}

const persoN1 = {
	fName: 'abc',
	id: 20,
	about: persoInfo // this key:value pair is special. Note that the value/property here is the name of the function we defined earlier. Also note that, we are not calling the function here, we are just linking/setting this object to the function. 
}
const persoN2 = {
	fName: 'xyz',
	id: 18,
	about: persoInfo
}
const persoN3 = {
	fName: 'opq',
	id: 25,
	about: persoInfo
}
persoN1.about(); // now, here's where the magic happens. If we call the object(persoN)'s key - about - where we set the function, and we call that key. Then the link will be established, and the persoInfo function will run with the values taken from that specific object - here, its 'persoN1'. 
// here, about is the key of the object whose value/property is the function - persoInfo. So, when we call the key - persoN1.about(), it will call the function - persoInfo(), and now, the function will know the value of this - which is the values assigned in that persoN1 objects. 
persoN2.about(); // similarly, when we call the about() key using the other objects, the function will take their values as the property of 'this' and run the code. 
persoN3.about(); // similarly here. // to understand 'this' better, we see where its being called at. Here, about is being called as a function(which is linked to the main function()), and we see the left of the dot(.), and we see persoN. So, it means that about() method's this will be the persoN object and its properties. 






// 66. Window object - 
// is a global object in JS that has many methods inside it. 
// and if not used strict mode, our created functions will get saved in it, which sometimes can create problems. 
// If we run the window() method, we will see our owned created functions present in it. However, to avoid it, we can use - strict mode inside the function to avoid our function calling the window object - or we can assign the strict mdoe at the top of our JS script file. when thats done, it will give us an -undefined - as result when used window () method. 

console.log(this) // or console.log(window) -  both are the same thing and will return the inbuilt JS window() method. 


// creating a new normal function -

function fun123(){ // this is a normal function that when called will give you 'hello world'
	'use strict' // we can use - strict mode inside the function to avoid our function calling the window object - or we can assign the strict mdoe at the top of our JS script file. 
	console.log('hello world!')
	console.log(this) // here, 'this', which object is it calling to when we havent defined any object with this new function - the WINDOW object, thats what this 'this' will call. 
}
fun123(); // we can of course call it like this - normally and conventional way. 
window.fun123() // but, we can also call the fun() function like this - why? because, when we create a function without strict mode on, that function will get saved into the window() method. And it can create a lot of problem. That is why we use - 'use strict' - strict mode that doesnt allow window() method to run and store our defined functions in it. 






// 67. Function call() method - 
// call() method can also be used to call a function - here - helo.call() -  other than the name of the function itself - helo(). And both will produce the same output. 

function helo(){
	console.log('hello world!')
}
helo.call(); // call method to call the function. 


// an exmaple - 
// using call() method to call a function, we can also pass an object as an argument to the call() method.  When doing so, the call () method will use that object's properties as the argument regardless of which object it is passed in, or even if the function is passed outside the object.  

const persoN4 = {
	fName: 'rusty',
	id: 30,
	about: function(){ // here, we are passing the about key with a function().  
		console.log(this.fName, this.id)
	}
}
persoN4.about() // calling the function normally from the object - persoN4.

const persoN5 = { // new object - persoN5
	fName: 'rusted',
	id: 25 // it doesnt have the about key and neither the function - function() - meaning it cant use that function? Wrong. It can use it. See below how. 
}
persoN4.about.call(persoN5) // here, persoN4 - is being used as the function location of where the function (or about key) is located, then about - which is the key where the function() is located, then call() - using the call method we are calling the function, then persoN5 - is being used as the argument, so now, the function from persoN4 object will be called, but in place of 'this', it will take persoN5's properties. WHY? Because we are using the call() method.  In other words, we are using the about function of persoN4 object for persoN5 object. Andn this way, the 'this' is representing (or it will take the info from) - object thats defined in the argument of call() method. 
// if no argument is passed in the call() method, we will get undefined as a result. So, even if we want to use the orginal person as the object, either pass that persoN4 as the argument - persoN4.about.call(persoN4) - or dont use the call method at all -  persoN4.about() - and it will give you the same result.  


// the above code can also be written after adding some parameters along with the function, then adding those arguments in the object to be used with - 


const persoN8 = {
	fName: 'rusty',
	id: 30,
	about: function(age, likes){ // here, we are passing the about key with a function with new parameters.  
		console.log(this.fName, this.id, age, likes) // and, we are pringing the this.fName along with the new parameters. Where will it take the arguments for these parameters - from the object it is linked with.  
	}
}
persoN8.about() // calling the function normally from the object

const persoN9 = { // new object
	fName: 'rusted',
	id: 25 // it doesnt have the about key and neither the function - function() - meaning it cant use that function? Wrong. It can use it. See below how. 
}
persoN8.about.call(persoN9, 15, 'Bikes') // here, we are passing the object Name to be used with the function, but also the arguments for the parameters we defined earlier. So, it will all come together. If no argument is defined, then it will give undefined. 


// the above code can also be written differently where we define the function outside the key:value property of an object but like an independent function() and then calling it using the call function but in place of argument, we pass the name of the object we wnat to use - 

function about (age, likes){ // here, we are passing the about function() here.  
	console.log(this.fName, this.id, age, likes)
}
const persoN6 = {
	fName: 'rusty',
	id: 30
}
const persoN7 = { // new object - persoN5
	fName: 'rusted',
	id: 25 // it doesnt have the about key and neither the function - function() - meaning it cant use that function? Wrong. It can use it. See below how. 
}
about.call(persoN6, 25, 'Cars') // now since the function is not inside object but normal one, we can call it normally using its name only here. But since we are using the call() method, so we are writing the name of the object from where we want to get the value of 'this'. And here, we are also passing the arguments to be used in the parameter. 



// Function apply() method - 
// there is not much difference between call() and apply() - both are basically the same and does the same thing. But, when you are using apply(), you can pass an array of arguments for the extra parameters inside a funcion - which you were not able to do in the call() method - like so - 

function about (age, likes){ // here, we are passing the about function() here.  
	console.log(this.fName, this.id, age, likes)
}
const persona = {
	fName: 'rusty',
	id: 100
}
const persona1 = { // new object
	fName: 'rusted',
	id: 125 // it doesnt have the about key and neither the function - function() - meaning it cant use that function? Wrong. It can use it. See below how. 
}
about.apply(persona1, [215, 'Cars']) // here, we are passing an array as arguments for the parameters of the function. Thats the major diff between call() and apply() methods.
// now since the function is not inside object but normal one, we can call it normally using its name only here. But since we are using the call() method, so we are writing the name of the object from where we want to get the value of 'this'. And here, we are also passing the arguments to be used in the parameter. 






// Function bind() method - 
// unlike apply () and call(), the bind () function method works similar to them but it returns a function. So, when we want to use the values or the things, we call the function using bind() method and passing all the values and arguments of the parameters, and the result will be as expected/given. 

function about (age, likes){ // here, we are passing the about function() here.  
	console.log(this.fName, this.id, age, likes)
}
const persona2 = {
	fName: 'rusty',
	id: 100
}
const persona3 = { // new object
	fName: 'rusted',
	id: 125 // it doesnt have the about key and neither the function - function() - meaning it cant use that function? Wrong. It can use it. See below how. 
}
const funccc = about.bind(persona3, 2000, 'Mountains and Beaches') // here, we are passing an all the necessary arguments of the parameters passed above. So, now, if we call funccc(), we will get the expected result - but as a function and then assigning it to a const variable. So to call it, we call the variable.  
// But since we are using the bind() method, so we are writing the name of the object from where we want to get the value of 'this'. And here, we are also passing the arguments to be used in the parameter defined above. 
funccc() // calling the function we defined earlier of the function we called. 






// 68. How not to use 'this' keyword and to use bind() function method -  
// okay, so, we already know about defining variables and declaring fuunctions, and also functions to variables.  But If there is a function inside an object, and you call the function by assigning it to a variable outside the object. It wont work, it wont give you the result you want, what it will give you is - undefined - why? Because at that time, the value of 'this', if there is one, in the function, will be - window - and not the object from where you want the function to pick up.  Even though, according to the rule we read earlier, the left side before the dot of the function call. So, what do we do then? We use the call method and then write the name of the object we want to use the properties of in 'this' - like done below - 

const useR = {
	fName: 'RUSTED',
	id: 23,
	about: function(){ // here, we are passing the about key with a function with new parameters.  
		console.log(this.fName, this.id) // and, we are pringing the this.fName along with the new parameters. Where will it take the arguments for these parameters - from the object it is linked with.  
	}
}
const myNewF1 = useR.about.bind(useR)// here, we are not calling the useR.about function, but we are storing its reference (the function's reference) to the newly defined variable. So, if we run it, it will give undefined, because it will be calling the - window - object and not the one it is made in. Here, useR is not the object. What we are doing here - is literally this - function(){ console.log(this.fName, this.id) }
myNewF1(); // so, to avoid that mistake, we use call() or bind() method, adn then  we pass the argument - the  name of the object - from where we want the function to get its properties. Using this, we bind the object to the function. 






// 69. Arrow functions - 
// arrow function doesnt have a 'this' like a normal function does. 
// So, when this is used in an arrow function, it will not work as it would in any normal function declaration. If 'this' is declared in an arrow function, it will take its 'this' from its surroundings. Meaning, it will take its 'this' from one level up - So, if its defined inside an object, then its 'this' wont be the object's properties, but it will be - window object - because thats the only thing thats one level up a normal object. 
// if the object is defined inside another object, then the arrow functions' 'this' will take its 'this' property from the object above it - not from the same object it is defined in. Keep in mind.  
// and another thing, you cant change the 'this' of an arrow function. Meaning, how we were able to do in the normal function with call and bind and apply() methods - useR.about.call(useR1) - you cant do that with arrow function. You cant pass an object whose properties you want in your this - it will give you the same result - undefined. And it will always take its 'this' from its one level up. 

const useR1 = {
	fName: 'BoyToy',
	id: 1420,
	about: () => { // here, we are declaring an arrow function 
		console.log(this.fName, this.id) // arrow fucntion's 'this' will not take its property from this object, but from - window object. And here, it will be  undefined. 
		//console.log(this) // it will give you - window object.
	}
}
useR1.about() // will give undefined as result
useR1.about.call(useR1) // will also give undefined as result






// 70. Short Syntaxes - 
// here, we are referring creating the key:value pair that we used to do inside an object - that way of writing is correct, but you can also do that by jsut writing the method itself, without writing the function keyword or defining it inside a key:value pair - like given below - 
// functions inside an object are called methods. 

const useR11 = {
	fName: 'NEWT',
	id: 202,
	about: function(){ // this way of wrigint methods (functions) inside an object is correct
		console.log(this.fName, this.id)
	}
}
useR11.about();

// but, we can also write methods inside functions like this - 

const useR12 = {
	fName: 'NEWT SHORT',
	id: 2020,
	about(){ // here, we have created an about () method - and its the same as the one we wrote above - about: function() {} - both will give the same result - but here, we have shortened it. 
		console.log(this.fName, this.id)
	}
}
useR12.about();






// 71. OOP - Objet Oriented Programming - 
// so here, we are creating a new user (object), with all the things that will be associated with him (or will need when the user signs in). 

const newUsr = {
	fName: 'xyz',
	lName: '123',
	email: 'xyz123@123.com',
	id: 5255,
	city: 'Delhi',
	about: function(){
		return `${this.fName} has the following id: ${this.id} and lives in - ${this.city}`
	},
	isId: function(){
		return this.id >= 1000
	},
}
const usrPrint = newUsr.about()
console.log(usrPrint)


// but what if we want to add/create hundreds or millions of such users and objects. We cant do so manually, it will be too tiresome - so to overcome that problem, we will create a function to do our job - 
// so here, we are writing the same code as above but with automating the add users with the same properties, and what if we want to create new users with the saame properties buut with different names and stuff, here's how to do it - 

const newUsr1 = {
	fName: 'xyz',
	lName: '123',
	email: 'xyz123@123.com',
	id: 5255,
	city: 'Delhi',
	about: function(){
		return `${this.fName} has the following id: ${this.id} and lives in - ${this.city}`
	},
	isId: function(){
		return this.id >= 1000
	},
}


// here, we are trying to create a new function that will take the user's details as parameters, and then pass it to the inside functions and will keep doing it for all the new users that we create - it will have these 3 works to do -  
//1. function ( for creating funcition for creating object)
//2. add key value pair
//3. will return the object itself

function creatUsr (fName, lName, email, id, city){ // all the main parameters of user
	const usr = {}; // creating an empty object - usr - to store the details that we enter
	usr.fName = fName; // now, we are just assigning the parameters of the function to the newly created 'usr' object so that the new object will have these properties as its own. And we can assign values to these properties later when defining a new usr. 
	usr.lName = lName;
	usr.email = email;
	usr.id = id;
	usr.city = city;
	usr.about = function(){ // here, we are creating a function that will be of the 'usr' object only. And since its a function, we dont have to pass it as parameter. 
		return `${this.fName} has the following id: ${this.id} and lives in - ${this.city}`
	};
	usr.isId = function(){ // same with this. 
		return this.id >= 1000
	};
	return usr;
}

const usr1 = creatUsr('abc', 'xyx', 'abcxyx@gmail.com', 2552, 'Mumbai') // new user object created. Here, we are passing the arguments to the parameters of the user that we defined earlier. 
console.log(usr1); // printing the newly created user object
const isId1 = usr1.isId(); // testing the usr object's function 
console.log(isId1); // printing it
const isId12 = usr1.about(); // testing the usr object's other function
console.log(isId12); // printing it. 


// the above function is how you create a new user that is not manyally entering all the details. But it has lot of problems and issues. Here, we'll learn how to solve them - 
// like, how in the code above, we have made the user, but have also written functions in the same user object so that each new user thats created, they will have their own functions, and each function will take up memory. 
// what we could have done instead is we could have created funcitons outside the user's object creation space (on a global scope)- and each new user that we create, they will have the address of the same function and will run and return the saame function but with the data of that specific user. Or, we can create a new object that will hold only the methods that the user require, and even if we want to add new methods (fucntions) for the users to use, we can just do so in the same user method object. This way, we save space and memory on creating functions for each user. Here's how - 


const usrMethod = { // this new object will have key: value pairs. And now that we have thees methods independent and seperate from user, these will only take space as methods and we can just store their addresses wherver we need to use these methods. 
	about: function(){ // about is the key, function() is the method. 
		return `${this.fName} has the following id: ${this.id} and lives in - ${this.city}`
	},
	isId: function(){ // isId is the key, function() is the method. 
		return this.id >= 1000
	}
}

function creatUsr1 (fName, lName, email, id, city){ // all the main parameters of user
	const usr2 = {}; // creating an empty object - usr - to store the details that we enter
	usr1.fName = fName; // now, we are just assigning the parameters of the function to the newly created 'usr' object so that the new object will have these properties as its own. And we can assign values to these properties later when defining a new usr. 
	usr2.lName = lName;
	usr2.email = email;
	usr2.id = id;
	usr2.city = city;
	usr2.about = usrMethod.about; // storing the addresses(reference) of the methods we created earlier so that they dont get repeated with each new user. 
	usr2.isId = usrMethod.isId; // storing the addresses(reference) of the methods we created earlier so that they dont get repeated with each new user. 
	return usr2;
}
const usr2 = creatUsr('opq', 'rst', 'rst@gmail.com', 999, 'Alabama') 
console.log(usr2.about()); // its working correctly now. 
console.log(usr2.isId()); // same, working as intended. 


// the above code is working as expected, but it too has a problem. What if we want to add more methods that the user can user or will use or will need in the future. What to do then?
// before we do that, we have to learn something else - how an object can go to another object to look for a key when it doesnt possess it - in other words, we are borriwing the key from another object to use in a different object - but we want the code to do it on its own - thats what we are trying to do here - 

const obj1 = {
	key1: 'val1',
	key2: 'val2'
}
const obj2 = {
	key3: 'val3'
}
console.log(obj1.key1) // obj1 has key1
console.log(obj2.key1) //obj2 doenst have key1, but we want it to go to obj1 and use key1 in its own code/execution. 

// here's how we do it - 
const obj3 = {
	key1: 'val1',
	key2: 'val2'
}
//const obj4 = {} // here, we are creating an empty object and adding its key:value pair later on -  but, there is anothe way to create an empty object - 
const obj5 = Object.create(obj3) // this is the other wawy to create a new object - using Object keyword literal, adn the create() method, we are using 'obj3' here as the parameter in the create () method, because it would help us take that 'obj3' as a reference later on, so our newly created object can take the old array as a reference and call its keys when needed.  This line will return an empty object - {}. THis line is also used to set the proto of obj5 - so it works something like this -   obj5.__proto__ . So, using Object.create() - we are setting obj5's proto as obj3.
obj5.key3 = 'val3' // adding the key:value pair to the empty created object. 
//obj5.key1 = 'newkey'; // but if we define the key that we wanted to borrow from the other object here for the new object, then it will not have to go to the other object for reference. And it will be able to use its own key:value.
console.log(obj3.key1) // obj1 has key1
console.log(obj5.key1) // now, it is able to take the obj3's key1 as the reference in obj5. 
console.log(obj5)
console.log(obj5.__proto__)


// __proto__ or [[prototype]] - both are same - but they are different than prototype (these are only in functions)
// but the question is, how is it happening? if we see the end result of just (obj5) here, we see that it will have its key:value pairs written. But, there will also be a '__proto__' or 'prototype' thing written at the back. What is it? When the item (key:value) we are looking for isnt in the object, it will look in the proto. The proto holds reference to some things. Andn here, as we connected obj3 to obj5, so for obj5, in its proto, there will be references for key:value pairs of obj3. So, if obj5 doesnt find the key:value we are looking for, it will look in the proto and use from there. If it doesnt find there, then it will give undefined or error. 
// here, we are printing proto - 
console.log(__proto__); // it will give us the window object. 


// now, using the same logic here with a bigger and better example - 
const usrMethod2 = { // this new object will have key: value pairs. And now that we have thees methods independent and seperate from user, these will only take space as methods and we can just store their addresses wherver we need to use these methods. 
	about: function(){ // about is the key, function() is the method. 
		return `${this.fName} has the following id: ${this.id} and lives in - ${this.city}`
	},
	isId: function(){ // isId is the key, function() is the method. 
		return this.id >= 1000
	},
	work101: function(){
		return 'the user is working on projects!'
	}
}

function creatUsr2 (fName, lName, email, id, city){ // all the main parameters of user
	const usr3 = Object.create(usrMethod2);	 // creating an empty object using __proto__ we studied earlier and now using that to set proto to usrMethod2, so now, all methods of usrMethod2 will be set to usr3. So now, no matter how many methodss you create/write in usrMethod2, it will all be referensed to creatusr2, and it will be able to call it as such, whenever it wants or needs. Andn now, using this, we have managed to create a relatinship between the object and the methods. 
	usr3.fName = fName; // now, we are just assigning the parameters of the function to the newly created 'usr' object so that the new object will have these properties as its own. And we can assign values to these properties later when defining a new usr. 
	usr3.lName = lName;
	usr3.email = email;
	usr3.id = id;
	usr3.city = city;
	usr3.about = usrMethod2.about; // storing the addresses(reference) of the methods we created earlier so that they dont get repeated with each new user. 
	usr3.isId = usrMethod2.isId; // storing the addresses(reference) of the methods we created earlier so that they dont get repeated with each new user. 
	usr3.work101 = usrMethod2.work101; // storing the addresses(reference) of the methods we created earlier so that they dont get repeated with each new user. 
	return usr3;
}
const usr3 = creatUsr('opq', 'abc', 'rst@gmail.com', 99, 'West Coast')
console.log(usrMethod2.work101());





// 72. prototype in functions - 
// in JS function is a function, but it is also an object - and so, it can be treated as an object as well. 
// Name property => tells functions name
// functions provides more useful properties like call, apply, bind - similar to  objects 
// note that, only functions provides prototype property. 
// notice that prototype is different than __proto__ - which is used to create a chain, it was a reference, but prototype is an empty object where you can store key:value pairs related to the function where we are working. 
// usually prototype and __proto__ dont have a connection, but we can create one if need be. 


function helo(){
	console.log('helo world!')
}
helo(); //calling helo
console.log(helo.name) // in JS object, there is a property called - name - which you can write as object.name or function.name - and it will give you the name of the function. 


// you can also add your own properties in functions - 
// and when you add properties to functions liek we do in objects, we can then call those properties like we do in objects - like so - functionName.propertyName
helo.myNewProp = 'new unique value'; // addind new property and value to a function
console.log(helo.myNewProp) // calling that property


// note that, functions will also give a free space or empty objects - {} -
// this free space is an object and that object is called prototype in function. 

helo.prototype; //here, prototype is nothing but an object which is empty, which we can use later on using the function itself. How do we use it and why? Suppose, we are given or want to put some key:value pair in the function, we can do so using prototype becuase its an empty object and it can store those data and values. 
console.log(helo.prototype) // if we print functions' prototype, we will get an empty object literal - with only one property - constructor - and the value of this constructor will be the function it is in. So ultimately, its an empty object that we can use later. 

if (helo.prototype){ // checking if our function has prototype property. 
	console.log('prototype is present')
} else {
	console.log('prototype is absent')
}


// adding new properties to functions' prototype - 
helo.prototype.abc = 'abc'
helo.prototype.xyz = 'xyz'
helo.prototype.singThis = function(){
	return 'singing a song'
}
console.log(helo.prototype)// we added three key:value pair to prototype, here, we are printing them, and you will see that it behaves like a normal object.
helo.prototype.singThis(); // calling the new function we made inside the prototype object. 






// 73. establishing a connection btw a __proto__ and prototpye - 
// here, in this function, which is a copy of the function we made earlier, we will create a relationship btw prototpye and __proto__.
// notice that, we will comment out the methods we created earlier in a new outside object, but we will do the same thing, but this time, we will store them all methods of the function to use in function's prototpye object. 
// and these object's methods can be accessed in the function's' __proto__ - so if we want to use these methods, we can just access them using - function.prototpye.methodName - thus establishing the connection btw the prototpye and __proto__


// const usrMethod3 = { // this new object will have key: value pairs. And now that we have thees methods independent and seperate from user, these will only take space as methods and we can just store their addresses wherver we need to use these methods. 
// 	about: function(){ // about is the key, function() is the method. 
// 		return `${this.fName} has the following id: ${this.id} and lives in - ${this.city}`
// 	},
// 	isId: function(){ // isId is the key, function() is the method. 
// 		return this.id >= 1000
// 	},
// 	work101: function(){
// 		return 'the user is working on projects!'
// 	}
// }

function creatUsr4 (fName, lName, email, id, city){ // all the main parameters of user
	const usr4 = Object.create(creatUsr4.prototype); // here, we are creating an empty object using Object.create() method, and using createusr4.prototype (the functions' prototype) as the object where we will store all the methods we will use for this user. If JS doenst find any info in the usr4 variable - then it will look in the creatUsr4.prototpye - in its __proto__ and work from there. 
	usr4.fName = fName; // now, we are just assigning the parameters of the function to the newly created 'usr' object so that the new object will have these properties as its own. And we can assign values to these properties later when defining a new usr. 
	usr4.lName = lName;
	usr4.email = email;
	usr4.id = id;
	usr4.city = city;
	usr4.about = creatUsr4.prototype.about; // storing the addresses(reference) of the methods we created earlier so that they dont get repeated with each new user. 
	usr4.isId = creatUsr4.prototype.isId; // storing the addresses(reference) of the methods we created earlier so that they dont get repeated with each new user. 
	usr4.work101 = creatUsr4.prototype.work101; // storing the addresses(reference) of the methods we created earlier so that they dont get repeated with each new user. 
	return usr4;
}

creatUsr4.prototype.about = function(){ // about is the key, function() is the method. And here, we are storing these methods in the function's prototype empty object thus, we dont need to create any additional object to store them.   
	return `${this.fName} has the following id: ${this.id} and lives in - ${this.city}`
};
creatUsr4.prototype.isId = function(){ // about is the key, function() is the method. And here, we are storing these methods in the function's prototype empty object thus, we dont need to create any additional object to store them. 
	return this.id >= 1000
};
creatUsr4.prototype.work101 = function(){ // about is the key, function() is the method. And here, we are storing these methods in the function's prototype empty object thus, we dont need to create any additional object to store them. 
	return 'the user is working on projects!'
};

const usr40 = creatUsr4('opq', 'abc', 'rst@gmail.com', 99, 'West Coast')
const usr50 = creatUsr4('xyz', 'pqr', 'pqr@gmail.com', 9999, 'East Coast')
console.log(usr50.about()); // printing user 40
console.log(usr40.about()); // printing user 50






// 74. New Keyword - 
// it does three things here in this code - 
// 1. creates an empty object - this = {}
// 2. returns the - this - empty object
// 3. it makes an automatic connection btw - __proto__ and prototpye so that you dont have to write the Object.create(function.prototype) - the new keyword will do this thing on its own and we dont have to make a chain. So, in othher words, the new keyword, sets the value of __proto__ equals to prototpye. 

function creatUsr5 (fName, id){ // creating a normal function that takes two parameters
	this.fName = fName;
	this.id = id;
};
creatUsr5.prototype.abt = function(){ // adding a new function - abt () - in creatUsr5's prototype so we can use it later with any variable or user. 
	console.log(this.fName, this.id)
};
const ussr1 = new creatUsr5 ('xyz', 999); // here, we are using the new keyword to call the function - creatUsr5 - and passing our argument, and then storing them into a new variable - ussr1. So now, since we used the new keyword, the connection btw the function and ussr1 is already made and we dont have to write the Object.create(creatUsr5.prototpye) to establish their connection. So, if JS doesnt find anything in ussr1, it will go to the function's prototpye. And __proto__ will take us to prototpye.
ussr1.abt(); // now, here, we are calling the abt() function, and it will run smoothly. 


// now, improvising the earlier code we wrote - 
// till now, what did we see - what did the - Object.create(creatUsr5.prototype) - do - it set the Object's __proto__ equal to the prototpye so that if JS doesnt find any property - meaning any new property that is not given in the function's parameter - it will then go to that prototype to look for that property and work from there. And if the function's prototpye has those missing properties, then we wont have any problems and the code will run smoothly.  
// But here, we will do so using the new keyword which achieves 3 things - 1. creates an empty object, which is equal to 'this' = {}  2.  it adds the things in the empty object and then also returns them - returns the key:value pair in the empty object, and 3. it does the work of - Object.create(function.prototype). meaning, it will set the object's __proto__ to function's prototype. 


// this below function is also known as the constructor function - because its creating an object for us. 
// and, how do we know which function is to be called using the 'new 'keyword. For that, we have a convention in JS - to captitalize the function's first letter. So, when we see a function with a capitalized first letter, we know that its a function that has to be called using the new keyword. 
function CreatUsr5 (fName, lName, email, id, city){ // all the main parameters of user
	this.fName = fName; // now, we are just assigning the parameters of the function to the newly created 'usr' object so that the new object will have these properties as its own. And we can assign values to these properties later when defining a new usr. 
	this.lName = lName;
	this.email = email;
	this.id = id;
	this.city = city;
	// return this; // we can write this here, but since the new keyword also returns the object, so omittint this line will also work just the same. 
}

CreatUsr5.prototype.about = function(){ // about is the key, function() is the method. And here, we are storing these methods in the function's prototype empty object thus, we dont need to create any additional object to store them.   
	return `${this.fName} has the following id: ${this.id} and lives in - ${this.city}`
};
CreatUsr5.prototype.isId = function(){ // about is the key, function() is the method. And here, we are storing these methods in the function's prototype empty object thus, we dont need to create any additional object to store them. 
	return this.id >= 1000
};
CreatUsr5.prototype.work101 = function(){ // about is the key, function() is the method. And here, we are storing these methods in the function's prototype empty object thus, we dont need to create any additional object to store them. 
	return 'the user is working on projects!'
};

const usr4x = new CreatUsr5('opq', 'abc', 'rst@gmail.com', 99, 'West Coast')
const usr5x = new CreatUsr5('xyz', 'pqr', 'pqr@gmail.com', 9999, 'East Coast')
console.log(usr5x.about()); // printing user 40
console.log(usr4x.about()); // printing user 50
console.log(usr4x) // printing the objects to see their __proto__, and we see that all the functions/methods we made earlier are established/written there as well.
console.log(usr5x) // printing the objects to see their __proto__, and we see that all the functions/methods we made earlier are established/written there as well.






// 75. hasOwnProperty() method - 
// it will give or loop (if you are looping through) only the properties of an object that it has on its own and is not taking from the function's prototype.
// it will give true or false(boolean) as a result, and using it, you can use the if-else conditions on the object's properties. 

// here, we are using the same code from above - 
for (let key in usr4x){ // this will give all the keys that the user is using as its property - its own and even that taken from function's prototype
	console.log(key) 
}

// using hasOwnProperty() method - 
for (let key in usr5x){
	if (usr5x.hasOwnProperty(key)){ // using this method will only give the properties that the user is having on its own and not taking from function's prototpye 
		console.log(key)
	}
}






// 76. methods inside arrays - 
// functions that create an object is called constructor function. 
// we saw that arrays are objects, and also saw that functions can create empty objects to store methods and key:value properties inside prototype - but, does array also has methods to use? 
// Yes, it does and it is stored in array's prototype. But how? JS uses this way to create array - new Array () - it uses Array() constructor method to create array, and we already saw what the new keyword can do. 
// So, if you use that way to create an array, you will see all the methods and properties you can use with the array - any array because JS uses that method to create the arrays so each of them will have those properties in their prototype.  


let numArr = new Array (1,2, 3)
console.log(Array.prototype);
console.log(numArr)

//but normally we use this way to create an array - 
// here, to get the prototype of any array, we can use the getPrototypeOf() method, and we will then pass the defined array as the parameter. When thats done, we will get the prototype of the array - Object.getPrototypeOf(definedArray Name) -   

let numArr1 =  [1, 2, 3, 4, 5, 6]
console.log(Object.getPrototypeOf(numArr1));
console.log(numArr1)


// by default, in functions, the prototype will be in object format - but in array, it will be in array format. How? Well, you can change the formamt in which your prototype appears or stores data. 
// so, you can decide which data type you want your prototype to be like and it will be like that - example given below

// numArr1.prototype = []
// console.log(numArr1.prototype)
// numArr1.prototype.push ('1')
// console.log(numArr1.prototype)






// 77. Class keyword - 
// we define our properties and methods inside a class for a method/function. 
// in JS, classes are fake. 
// constructor inside classes will create objects. And we will pass all the parameters inside that constructor that we used to pass inside the function that we used to create outside. 
// in classes, we dont have to return anything, because automatically it will return object. 
// inside the class itself, we will define the methods that we used to earlier define outside the function, then we used to connect them. 
//functions inside classes are called methods. And in class, we call those methods using the new keyword only, else it will not work. You cant call the class constructor without the new keyword. 


class CreateUsr{ // class defining
	constructor(fName, lName, email, id, city){ // passing the parameters
		console.log('constructor called!');
		this.fName = fName; //defining the parameters
		this.lName = lName;
		this.email = email;
		this.id = id;
		this.city = city;
	}
	about(){  // defining the methods. 
		return `${this.fName} has the following id: ${this.id} and lives in - ${this.city}`
	};
	isId(){  
		return this.id >= 1000
	}
	work101(){
		return 'the user is working on projects!'
	};
	// funnc(alpha){ // note that we can also pass parameters in our functions that we can define its arguments later on when calling the parameters. 
	// 	console.log(alpha)
	// }
}
const usr40x = new CreateUsr('opq', 'abc', 'rst@gmail.com', 99, 'West Coast')// whenever we call the class constructor using new keyword, it will go through class, and give us the result - here, we are seeing that when our constructor is called - in case of each user.   
const usr50x = new CreateUsr('xyz', 'pqr', 'pqr@gmail.com', 9999, 'East Coast')
console.log(usr40x.work101()); // calling usr40x and its functions/methods or properties. 
console.log(usr50x.about());
console.log(Object.getPrototypeOf(usr40x)) // it will give us all the methods that our created user has to work with - and it will also include all the methods that we had created earlier - about(), work101(), etc. 


// this is the code - thing - that will happen inside the class so we dont have to write it outside - 
// function CreatUsr5 (fName, lName, email, id, city){
// 	this.fName = fName;
// 	this.lName = lName;
// 	this.email = email;
// 	this.id = id;
// 	this.city = city;
// }

// CreatUsr5.prototype.about = function(){ 
// 	return `${this.fName} has the following id: ${this.id} and lives in - ${this.city}`
// };
// CreatUsr5.prototype.isId = function(){  
// 	return this.id >= 1000
// };
// CreatUsr5.prototype.work101 = function(){
// 	return 'the user is working on projects!'
// };






// 78. Inheritance - Sub and Parent Class - and creating more classes - 
// to create a base(Parent) class we use the extends keyword followed by the name of the class - class New extends Parent{}
// objects are also called instances.

class Animal { // animal class
	constructor(name, age){ // will have two parameters
		this.name = name;
		this.age = age;
	}
	eat(){ // defining methods 
		return `${this.name} is eating`
	}
	isCute(){
		return this.age <= 1;
	}
	isCuteToo(){
		return true
	}
}

const animal = new Animal ('cat', 1) // creating the animal object using new keyword. 
console.log(animal) // calling animal
console.log(animal.age) // calling animal's property
console.log(animal.isCute()) //calling animal's methods
console.log(animal.isCuteToo()) // calling animal's other property


// creating a new class to understand inheritance - 
// here, we want our new class to inherit all the methods from the previous Animal class but we dont want to write the same methods again and again - what do we do? We use inheritance so that the new class inherits all the methods and properties of the old class.  
// Here, Dog is subclass (child class) - and Animal is Super class (parent/base class)

class Dog extends Animal{ // using extends keyword, the new class will have all the properties and methods of the old Animal class so we dont have to repeat outselves.  
}
const doggy = new Dog ('tommy', 0.5);
console.log(doggy);
console.log(doggy.age);
console.log(doggy.isCute());





// 79. Super class 
// objects are also called instances.
// Super class is the main - parent class. 
// here, we are creating a new property in the above sub-class by creating a new constructor - method - which will be special and will be for its own - 


class Tiger extends Animal{ // using extends keyword, the new class will have all the properties and methods of the old Animal class so we dont have to repeat outselves. 
	constructor(name, age, speed){ // here, we are passing all the parameters that our new sub class will use 
		super(name, age); // super() method will give the name and age parameters
		this.speed = speed; // speed is special to this sub-class so we are defining it here. 
	};
	run(){ // creating a new method/property run that we can use for the sub-class
		return (`${this.name} is running at ${this.speed} mph`)
	}
};
const tigga = new Tiger ('oLion', 0.5, 110);
console.log(tigga)
console.log(tigga.run())
console.log(tigga.eat())





// 80. modifying some properties for sub-class so that it doesent use the same one as parent class - 
// note that, when we call a method in a class, it will check the class where we are alling the method to see that if it contains that said method or not. If it does, then it will use that method only, and will not look into the parent class(super) - if it doesnt find that method, then it will go to the super class to look for the method. 

class Lion extends Animal{ // using extends keyword, the new class will have all the properties and methods of the old Animal class so we dont have to repeat outselves. 
	constructor(name, age, speed){ // here, we are passing all the parameters that our new sub class will use 
		super(name, age); // super() method will give the name and age parameters
		this.speed = speed; // speed is special to this sub-class so we are defining it here. 
	};
	eat(){
		return `Modified Eating : ${this.name} is eating` // here, we are modifying the eat() method from the parent class so that it is special to this Lion sub-class, so that when we use this method in this sub-class, it will be modified. How do we do that? By defining the method again, and making changes for this sub-class  
	}
	run(){ // creating a new method/property run that we can use for the sub-class
		return (`${this.name} is running at ${this.speed} mph`)
	}
};
const leon = new Lion ('oTigga', 0.5, 110);
console.log(leon.eat()) // it will return the modified version of eat() method. 






// 81.  Getters and Setters - 
// using get keyword - you can use a method - which usually requires you to call it using a parantheses - method() -  and call it like a propertyy - which is called like so - object.property - and it will give you the full result as it would have when you woudl have called it as method ().

class Person{
	constructor(fName, lName,age){
		this.fName = fName;
		this.age = age;
		this.lName = lName;
	}
	get fullName (){
		return `${this.fName} ${this.lName}`
	}
	setName (fName, lName){ // using this method, we can change the set fName and lName
		this.fName = fName;
		this.lName = lName;
	}
}
const personDef = new Person('Sky', 'Pearson', 30)
console.log(personDef.fullName) // this will work like a property, but if you call it like a method using a parantheses - it will give you an error. 
personDef.setName('Badal', 'Pearson') // defining new fName and lName after changing their values. 
console.log(personDef.fullName) // printing the fName and lName


// using setters - set keyword - 
// setters work like this - 
// fullName.split(' ') - it will split the fullName property which has two parameters
// [Akash, Lightning] - and where it will see the space, it will split the name from there, and store it into two different variables - fName and lName
// the split(' ') method will split the string into two and it will split only from the space so that before space will be set to - fName, and after space will be set to - lName. 
// setters will always take a value - that you want to set - obviously.

class PersonNew{
	constructor(fName, lName,age){
		this.fName = fName;
		this.age = age;
		this.lName = lName;
	}
	get fullName (){
		return `${this.fName} ${this.lName}`
	}
	set fullName (fullName){
		const [fName, lName] = fullName.split(' '); // here, we are destructuring the list. 
		this.fName = fName;
		this.lName = lName;
	}
}
const personDef1 = new PersonNew('Sky', 'Pearson', 30)
console.log (personDef1.fullName) // will give the original values
personDef1.fullName = 'Zeus Bolt';// setting new values to the already existing object. 
console.log (personDef1) // new set values will print. 






// 82. Static Methods and Properties - 
// static methods can be defined using the static keyword inside the class.
// and they are called using the class names itself rather than the object name - so it looks like this - ClassName.MethodName() - and it will give you the result of the function. Meaning, these static methods are related to the class directly instead of the objects, adn static methods can be called directly using and we dont have to create an object to call them.   
// same with static properties - we use them to create a class using __init__and initialize it. We will learn more about them later.  But know that the static properties are made using static keyword and they can also be called using the className directly - className.propertyName


class PersonNew1{
	constructor(fName, lName,age){
		this.fName = fName;
		this.age = age;
		this.lName = lName;
	}
	static classInfo(){
		return 'calling from Static method'
	}
	static desc = 'this is static property';
	get fullName (){
		return `${this.fName} ${this.lName}`
	}
	set fullName (fullName){
		const [fName, lName] = fullName.split(' '); // here, we are destructuring the list. 
		this.fName = fName;
		this.lName = lName;
	}
}
const personDef2 = new PersonNew1('New', 'Animal', 300)
console.log (personDef2.fullName) // calling the fullName method from the objectName. 
console.log (PersonNew1.classInfo()) // calling static class, but here, notice that we are calling it from the className itself rather than the object name as we did above it. 
console.log(PersonNew1.desc) //calling the static property using the className directly.





//Part II

// 83. How JS works? - 
// JS is a syncronous prog language - it means, that the code gets executed line-after-line, so if the first line doesnt execute completely, the second line of code will not start to execute and so on - this is called - single threaded language.     
// In JS, the asyncrhronous prog features for JS is provided by the browser itself. 

// JS runs its code in two phases - explained below - 
//phase -1
// in JS, our code first gets - compiled, - then the code executes. 
// the compilation phase has three phases - tokenizing/lexing, parsing, and code generation. 
// in tokenization, the code is broken into small parts, and these small code parts are called tokens. 
// in parsing, these small code blocks get into AST - abstract syntax tree - and using the AST, the code is made into an exectuable form - code generates - which thus compiles and then executes.
// In ECMA official documnents, we see that the code must be checked early (Early Error Checking), then the variables should be checked according to their scopes (Determining Appropriate Scopes for Variables). And to fulfill these two requests, your code must beb parsed before it gets executed. Note that, when you declare a variable, JS knows where the variable belongs, and where you can access it, and which scope does it belong to.  
// in conclusion, before the code executes, it must be compiled first.
// if a JS variable that isnt inside a function, then it belongs to the Global scope. So, in the code below, the fName variable is on a global scope.  And JS knows this information before even executing the code. It knows that in Global scope, there is a variable named - fName.  

// phase - 2
// second phase is the Code Execution Phase. So, in JS, the code executes inside the execution context. SO, to execute the code, we need to create an execution eontext. 
// And the first execution context that is created is called the Global execution eontext. 

// Global execution context
// it also runs in two parts - Creation Phase and Code execution phase.
// Even before the fist line of code is executed, the GLobal execution context will be created. And it will also be made in two phases - the Creation Phase and then the Code execution phase.

// the Creation Phase - Global Memory (will run even before the code runs)
// when the Global execution context's Creation Phase is created for the code below- it will equal the fName = undefined. 
// and when the Global execution context is created, the value of 'this' for browser will be - 'window' object that contains the pre-existing key:value proeprties.

// the Code execution phase -
// here, we are explaining the code we wrote below - 
// console.log(this) - will give window object itself - because as we read, in global context, this is the window object
// console.log(window) - will print the window object as well
// console.log(fName) -  since fName is not defined, so its value will be set to undefined.
//  var fName = 'abc' - we are asking the fName in line 3 to change from undefined to abc. But in line 3, it will still be undefined printed because its called before declaring the variable. 
// console.log(fName) - now, we are asking to print fName, note that the value of fName in line 3 wont change, it will remain undefined till there, but since in line 4 we changed the value of fName to abc, so in line 5, the fName will print - abc. 

console.log(this)
console.log(window)
console.log(fName)
var fName = 'abc'; 
console.log(fName)






// 84. Analyzing the code below - 
// JS is a lexical scope language - why? Because of phase 1 of code compilation - TOkenization/Lexing. it means, that the way we have written our code, depending on that JS will decide the variables will belong to which scope. In the code below, the fName, lName and fuName belong to the global scope, because we havent written them inside a function. Even the myFunc is in a global scope lexically. 
// as we read earlier, there are two phases in executing a JS code - compilation phase and code execution phase. the compilation phase is for early error checking, it is during this phase that our code will be checked for errors, but also for seeing which variables belong to which scope - local or global. 
// in this code, we have fNameN, lNameN, and fuNameN along with myFuncc() function as global scope - this will all happen in the compilation phase. 

// now, in the code execution phase -  the Global execution context (GEC) will be created - and it is added in the stack.  
// GEC also has two phases - the Global Memory - which will be the result of GEC being created and running - in the global memory the -window - object will be created even before running the code. The second is Code execution phase (CEP) - 

// JS, also stores its variables in an object - as key:value pair. These are called - Environment Record. - this is extra stuff.  
// even before any of the below code runs, the browser will provide us with the - window - object. 
console.log(this)// will give - window object - will be stored in Global Memory(GM). After GM, it will print since its the first line.  
console.log(window)// will give - window object - will be stored in Global Memory - it will print next, since its already provided by browser. 
console.log(myFuncc) // - this will print next, adn it will print the entire function's code and not run the function because we are not calling the function.  
console.log(myFuncc()) // - also note that, because of JS's hoisting, this function here is being called even before it is defined. and becuase of thhe hoisting's rule, the function will run no problem - why? because the function, variable or classes are run first because of hoisting, so there will be no error, adn the function will be called.  
console.log(fNameN)// will give undefined, becuase fNameN has not been defined yet. - after GM - it will give undefined because there is undefined stored in the GM. 

function myFuncc(){ // this function will also be stored in a global memory, and it will be added to the global memory before executing the first code line.  - will be stored in Global Memory. 
	console.log('calling from inside my function')
}

var fNameN = 'abc'; // since these variables are made with var, so they will be set as undefined - - will be stored in Global Memory - earlier, the value of fNameN was undefined, but affter running this code, it will store it as - abc
var lNameN = 'xyz'; // since these variables are made with var, so they will be set as undefined - will be stored in Global Memory - earlier, the value of lNameN was undefined, but affter running this code, it will store it as - xyz
var fuNameN = fNameN + ' ' + lNameN; // since these variables are made with var, so they will be set as undefined - will be stored in Global Memory - - earlier, the value of fuNameN was undefined, but affter running this code, it will store it as - abc xyz
console.log(fuNameN); // lastly, it will print the fullname - abc xyz






// 85. Hoisting - 
// hoisting is a built-in behavior in JS, through which, the declarations of functions, variables, and classes are moved to the top of their scope (local or global) – and it all happens even before the code is executed. This allows us to use functions, variables, and classes before they are declared wihout getting an error.
// since we are using the function keyword to make a function - making it a function declaration, it gets stored in the global excution context  (GEC), that is why we are able to use it before the function is defined as we saw in the case above. 
// in a stack, after the GEC is executed, it will get poped (deleted) from the stack. And know that, the stack will only contain the current execution context at the top. 

// the above function we wrote was function declaration - since we are declaring the function right there using the function keyword. 
// but what will happen in case of function expression - in case of anonymous function - where we dont use the function keyword to define the function. 
// here, we are breaking down the funciton expression code below - 
// we already know that if you declare a function using the function keyword, then it will be stored in the GEC as the function and we can use it globally even before declaring it. 
//But here, we are using var to declare the function - function expression, so since we are using var keyword, it will automatically take undefined as its value till it is defined. and once it is defined, from that point forward, it will take the declared value, function as its value adn use it as such. But till that point, the function expression's value will be undefined.   
// first, our code will compile (any code) - and there two things will take place in the compilation phase - the early error check, and seeing which variable belongs to what scope. 
// here, in our global scope, there is only - myfunccc . after this, the code will execute and GEC will be created and will be added in the stack - Global Execution Context, it too works in two phases - creation phase CP, code execution phase CEP. 
// anytime, GEC is created, Global memory is created and will be stored in the CP, and it will have Window{} object (will be provided by browser), and the function will be stored as undefined - not as function - why? because we are making it as function expression. If it was made using function declaration, then it would have set as it is, so it could be used anywhere even before declaring it. 
// Now, the code begins to execute, 

console.log(myfunccc); // here, it will give - undefined. 
var myfunccc = function(){ // here, we are making a function expression. And here, myfunccc, which earlier stored as was undefined, now will have this entire function. So, from this point on, myfunccc will have this function as reference not undefined. 
	console.log('hello from anon function')
};
console.log(myfunccc); // and here, the entire function will be printed. 






function helloo(xo){
	const a = 'varA';
	const b = 'varB';
	return function (){
		console.log(a, b, xo)
	}
}
const anss12 = helloo('arg')
anss12();



function hbdd(){
	return 'Happy Birthday to you!!!'
}
const returnedhbd = hbdd;
console.log(returnedhbd);


const newVarr = function(){
	console.log('this is an anon function!!!')
}

newVarr()


const objNew = {
	obj1 : 12,
	obj2 : 23,
	obj3 : 45
};

function illion ({obj1, obj2, obj3}){
	console.log(obj1, obj2, obj3)
}

illion(objNew);






let arr121 = [1, 2, 3, 4, 5, 4, 3, 4, 5, 6, 7, 8, 6, 7, 8, 9, 0, 8, 7, 6, 5, 4]

let unqvall = new Set(arr121)
console.log(unqvall)

counter112 = 0;
for (let vall of unqvall){
	counter112++;
}
console.log(counter112)

const newObjj = {
	abc : 121,
	1: '1',
	hashmap: 'hash'
};

console.log(newObjj.hashmap);
for (let key in newObjj){
	console.log(key);
	console.log(typeof key);

}

const newMapp = new Map ();
newMapp.set ('abc', 'xyz');
newMapp.set ({1: 'one'}, 123)

console.log(newMapp.get('abc'))
console.log(typeof 'abc')

for (let key of newMapp){
	console.log(typeof key)
	console.log(Array.isArray(key))
}


const newObjjj = {
	a: 1, 
	b:2,
	name: 'abc xyz'
}
console.log(newObjjj)
const newValss = new Map ();

newValss.set(newObjjj, {z: 26, b: 2, a: 1})
console.log(newValss.get(newObjjj))


const newObjjjClo = {
	a: 1, 
	b:2,
	c: 3
}
const newObjjjClo1 = {...newObjjjClo}
newObjjjClo1.d = 4;
console.log(newObjjjClo1)


const newObjjjClo2 = Object.assign ({}, newObjjjClo1);
newObjjjClo2.e = 5;
newObjjjClo2.f = {'insidekey': 101};
newObjjjClo2.g;
console.log(newObjjjClo2)
console.log(newObjjjClo2.f.insidekey)
console.log(newObjjjClo2?.g?.keyy)



// methods -

function normalthing(){
	'use strict'
	console.log(`happy bday!!! to ${this.a} and ${this.c}`)
}
const newObjjjClo223 = {
	a: 1, 
	b:2,
	c: 3,
	d: normalthing
}

newObjjjClo223.d();
console.log(window.normalthing)





// let currentPlayer = "X";

// while (true) {
//   // Display the current board state
//   console.log(board.join("\t")); // Join the array elements with a tab for visual representation

//   const cellIndex = parseInt(prompt('Player ${currentPlayer}, enter your move (1-9): ')) - 1;

//   if (makeMove(currentPlayer, cellIndex)) {
//     const winner = checkWinner();
//     if (winner) {
//       console.log('Player ${winner} wins!');
//       break;
//     } else if (board.every((cell) => cell !== "")) {
//       console.log("It's a draw!");
//       break;
//     }
//     currentPlayer = currentPlayer === "X" ? "O" : "X"; // Switch players
//   } else {
//     console.log("Invalid move. Try again.");
//   }
// }



function newHalo(){
	console.log('hello world!')
}
newHalo.call();

const newPers = {
	fname: 'abc',
	age: 13, 
	class: 'Z',
	about:  function () {
		console.log('hello world!')
		console.log(this.fname, this.class)
	}
};

const newPers1 = {
	fname: 'xyz',
	age: 18
};
newPers.about.call(newPers1);



const newPers101 = {
	fname: 'abc',
	age: 13, 
	class: 'Z',
	about: () => {
		console.log(this.fname, this.age, this.class)
		console.log(this)
	}
}
newPers101.about()
newPers101.about.call()


const shortsyn = {
	fname: 'abc',
	age: 13, 
	class: 'Z',
	about() {
		console.log(this.fname, this.age, this.class)
		console.log(this)
	}
}
shortsyn.about.call(shortsyn)
console.log(shortsyn.age)



const newMee = {
	action: function(){
		return `${this.fname} and ${this.id} belongs to ${this.userName}`
	},

	actionNew: function(){
		console.log(`this is the new age for ${this.fname}`)
	} 
}

function createNewUss (){
	const newUss = {};
	newUss.fname= fname;
	newUss.action = newMee.action;
	newUss.actionNew = newMee.actionNew;

	return createNewUss;	
}


// const newUss =  createNewUss('abc', 33, 'abc_12');
// console.log(newUss.action())




function createNewFunc (){
	console.log('hello world!')
};
createNewFunc()
console.log(createNewFunc.name)

createNewFunc.newProp = 'new function property'
rustttt = createNewFunc.newProp;
console.log(rustttt);
console.log(createNewFunc.prototype)

createNewFunc.prototype.abcc = 'xyzz';
createNewFunc.prototype.xyzz = 'abcc';
createNewFunc.prototype.newFunc = function(){
	console.log ('hello world from the proto!')
}
console.log(createNewFunc.prototype)
createNewFunc.prototype.newFunc()



function newUsr11(name, id){
	this.name = name;
	this.id = id;
}

newUsr11.prototype.abtt = function (){
	console.log(this.name, this.id)
}

const newUssr1 = new newUsr11 ('abc xyz', 999)
newUssr1.abtt()

for (let key in newUssr1){
	console.log(key)
}

for (let key in newUssr1){
	if (newUssr1.hasOwnProperty(key)){
		console.log(key)
	}
}




let numNewArr = new Array(1, 2, 3, 4, 5);
console.log(numNewArr)
console.log(Array.prototype)

let newArra = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(Object.getPrototypeOf(newArra))
console.log(newArra)



class NewUsee{
	constructor(name, id, salary, ucity){
	console.log ('constructor called!')
	this.name = name;
	this.id = id;
	this.salary = salary;
	this.ucity = ucity;
}
about (){
	return `${this.name} lives in ${this.ucity}, has the id: ${this.id} and makes ${this.salary}`
}
isId (){
	return this.id >=100;
}
working(){
	return`${this.name} is working currently!`
}
}

const newUserr = new NewUsee ('abc xyz', 99, 156000, 'Chicago')

console.log(newUserr.about()) //user called using class 



class AnimalNew{
	constructor(name, age, friendly){
		this.name = name;
		this.age = age;
		this.friendly = friendly;
	}
	eat(){
		return `${this.name} is ${this.age} years old and is ${this.friendly}`
	}
	cutenessLevels(){
		return this.age <=0;
	}
	friendly(){
		return true
	}
}

const newPet = new AnimalNew('cat', 1, 'Yes')
console.log(newPet)


class Pet extends AnimalNew{}
const dog = new Pet ('dog', 2, 'Yes')
console.log (dog)