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
// here, in our global scope, there is only - myfunccc . after this, the code will execute and GEC will be created and will be added in the stack - Global Execution Context, it too works in two phases - creation phase - CP, code execution phase CEP. 
// anytime, GEC is created, Global memory is created and will be stored in the CP, and it will have Window{} object (will be provided by browser), and the function will be stored as undefined - not as function - why? because we are making it as function expression. If it was made using function declaration, then it would have set as it is, so it could be used anywhere even before declaring it. 

// note that, if you create a function using a function declaration - then, it will get stored in the Global Context as is - and it can be hoisted as well(can be called earlier too.) But in case of function expression - like we are doing below - it will only be stored  as a variable in the Global Memory - because we are creating it using var. And its value will be set as undefined similar to other variables. 

// Now, the code begins to execute, 

console.log(myfunccc); // here, it will give - undefined. 
var myfunccc = function(){ // here, we are making a function expression. And here, myfunccc, which earlier stored as was undefined, now will have this entire function. So, from this point on, myfunccc will have this function as reference not undefined. 
	console.log('hello from anon function')
};
console.log(myfunccc); // and here, the entire function will be printed. 


// in case of using let to define our fuction - 
// as we studied earlier, JS's code executes in two-phases - 1- error checking phase  and scope-deciding phase where the compiler will decide the scope for the variables used in the code. and the second - 2- is the code execution phase - CE phase.  
// in the below code - we see that since we are using let to define our variable and also we are creating it in the global scope - so the variable here will be of global scope. 
// CE phase - it will create a global execution context - GEC - which is in two phases - creation phase of GEC and the second is CE phase. Creation phase will set some variables in the global memory which belong to the global phase. 
// any time you create a variable, it gets stored in the GEC/Global Memory. 
// Any time a program runs, it has its own windows{} object, and the program's 'this' method will have windows{} object on the global scope.
// here, we are using let to define our variable - and in this case, it will be un-initialized before the program runs. It means that the variable gets the memory but its un-initialized. 
// so, when the code executes, we are calling the variable before declaring it, you cant use it before it, it will give an error - Uncaught - reference error. Other than let, const will also give the same result.  
// note that, let and const, but gets hoisted, both can be used in hoisting. They're present in the memory before we are calling them, but they're uninitialized - they'll be useless until you initialize it.

// in line 2, if we remove line 1, the variable firstNam will get initialized, and it will be not then will give an error when we call it in line 3. 
console.log(firstNam); // line 1 
let firstNam = "SKY"; // line 2
console.log(firstNam);  // line 3



// 86. Temporal Dead Zone - TDZ
// when nothing was executed, the value of var firstNam was unitialized, but after its execution, we can say that from the moment of variable's uninitialization to before its assignment, that variable is in the TDZ. Until then, the variable will give you reference error. It can be done with let, but not with const. 

console.log(typeOf(firstNam1)); //will give reference error since we are accessing it before initializing it. However, if we just access it without assigning it later, it will give us undefined. 
let firstNam1;// here, it is initialized, but not assigned, so its in the TDZ.
firstNam1 = "SKY"; // the value is assigned. 
console.log(firstNam);


//revising compilation phase - 
// so in the below code, JS will keep knowledge even before using the varibales and functions of - fName11, lName11, myFunctionNew - at the time of compilation only.  
// inside the function - myFunctionNew, there are two variables - var1, var2 - so here, the scope is decided now. 
// the creation phase of code execution is also called - memory creation phase.  

console.log('hello world!')
let fName11='abc'
let lName11='xyz'

const myFuncitonNew=function(){
	let var1='first variable'
	let var2='second variable'
	console.log(var1)
	console.log(var2)
}



// 87. Function Execution Context
// this code here, sees which context is running - global or function,
// here, we see that in line 1, the vlaue of foo will be uninitialized because we used let to make the variable.
// function - line 3, will be as is
// line 4, the variable with const will also be uninitialized - all of this is happening in the memory creation phase. 

//now, in the execution phase, the code will get executed line after line, and it will also get tracked in the call stack. line 1, will run and save foo to the value of foo. 
// in line 2, the stored value of foo will get logged in the console.
// line 3, the entirety of it is a function, and since its a function, it is just stored right now, and it will only run when called. 
// line 4, calls the function and asks to log the returned value of the function with the given arguments. 

// now, once the function gets called - it will make the Function Execution COntext - FEC - and when it will run, it will also have two phases - Local Memory Creation Phase, Execution Phase. 
// array like objects - not an array, but an object with array-like properties - we can use index on them to get their specific values, and also use length property on them, both of which we cant do on objects. 
// So, here, in the function, arguments is an object which has the two arguments of the function. Here, the fName is a local variable (specific to the function it was written in) and its value is the given argument - 'abc'. SImilarly with lName. first called argument will be assigned to the - arguments - fName - and second to the second.  
// Even inside the function, the defined variables like myVar, and fulName, are uninitialized - why? because they're not called and not initialized.

// function code execution context - 
// when the function gets called, its stack will be stored on top of the main code(global function), and if there's a function inside that function, then, it will get stacked on top of the function in the call stack. After their job are done(function gets called), they'll exit from top down, they follow - Last In, First Out - principle - LIFO
// when executing inside the function, arguments (which is an array-like object) will get logged on console
// myVar, which was uninitialized before, it will have the value 'var inside function'
// then, myVar, with its new value will get logged. 
// fullName, which was uninitialized before, will get the value of fName, lName from the function argument we passed earlier. 
// last line of the function will return the fulName variable with the now defined value. Where will it get returned? it will get returned to the function call variable - personNam. After that line, function's job is funished, and it will get removed from the call stack. 

// lastly, the poersonNam, whose value we got earlier from the function, will get logged in the console. 

let foo1='foo' // line 1
console.log(foo1) // line 2
function getFullName(fName, lName){ // line 3
	console.log(arguments);
	let myVar='var inside function'
	console.log(myVar)
	const fullName=fName+ ' ' +lName
	return fullName
}
const personNam = getFullName('abc', 'xyz') // line 4
console.log(personNam)// line 5



// 88. Lexical Environment, Scope Chain
// as always, even before executing the code, window.object will be assigned, and it will have this object. lastNaa will be uninitialized, and all the const inside function execution context will also be uninitialized. 
//  line 1 says that put the value 'xyz' to the uninitialized lastNaa
// line 2, says, printNaa was uninitialized before, but it will become a function when code starts executiing
// line 3, says to call printNaa() function and once called, it will create a function execution context because we are calling a function here. Its call stack will be above the GEC - local memory creation and code executioin phases. 
// first, in local memory creation, the firstNaa will be uninitialized
// then, when code starts executing, the uninitialized value will be removed and replaced with 'abc' value, then log on to console - firstNaa - its value, and then line 3 inside function says to print lastNaa - but the local function doesnt have that value, what will it do then? 
// know that, if a function doesnt find any local varible defined in the function but it is used in the function,  it will look up at its parent - Global Execution Context - or Global function. From there, it will take the value of the lastNaa variable - and use it

//  the function's lexical environment is the main gloabl function - or GEC, and it will check there for any values of a variable that is used in the function but not defined there. It will keep on searching until it reaches the GEC. 

// if there was another fuinction inside the main function, and the other function had all the print statements while the main function had all the variables, that would make the inside function ask the outer function for the variable's value, making it its lexical scope/environment.  If it didnt finc the values in the outer functions, then it would have searched for it in the Global scope as well.
// So, when the fucntion execution context runs, in its local memory creation phase, it will also look for the variables that it might use inside. 

const lastNaa='xyz'; // line 1
const printNaa=function(){ // line 2
	const firstNaa='abc'
	function myFunc(){
	// 	console.log(firstNaa)
	// 	console.log(lastNaa)}
	// }
	// myFunc()
	console.log(firstNaa)
	console.log(lastNaa)
}
printNaa();} // line 3




//89. Closures -
// functions can also return other functions. 
// eg. below
function outFunc(){
	function innFunc(){
		console.log('Hello world!')
	}
	return innFunc;
}
const ans1=outFunc()
console.log(ans1); // it will print the entire inner function
ans1() // will run the inner function. 

// during MCP - memory creation phase - window's {} (which is an object) value will be set, and this will point at window.
// after that, all the function that the code will have - here, outFunc() will also be present in the memory during MCP. 
// after that, in line 2, we are creating a variable using const, which we know will be uninitialized during the MCP. The variable will be created, memory will be allocated, but they will still be uninitialized - const ans2. 

// now, during the execution phase - EP - the call stack will have GEC - gloabl execution context as the first element in the call stack. 
// when line 1 runs, function is already present in the memory, line 2 - which calls the outFUnc() function, and when this happens, it will create the FEC - function execution context. And this FEC will be stacked ontop of the call stack. 
// When FEC runs, it will create a local memory creation phase - LMC, and code execution, CE phase for the function - outFunc(). In the local memory, there is an array-like object which is called - arguments(args). This args will store the arguments/parameters passed when called the function - ['abc','xyz']. The first arguments' value will be equal to 1st parameter - abc, and second arguments value will be equal to 2nd parameter - xyz. after that, outFUnc() function will also be stored in the local memory
// when line 1 runs, it is a function and its already present in the memory - FEC
// when line 1, return innFunc will run, once returned, it will go to ans2 variable which is caling the outFunc(). WHich means, earlier ans2 was uninitialized since it was made using const, but now, with the innFunc returned, the ans2's value will be the entire function outFunc() function. And its value will also change in the gloabl Memory creation phase. Now the outFunc()'s work is done, and it will get removed from the call stack. 
// line 3, calls ans2() - which will create another Function Exection COntext - FEC. it too will have the same thing - arguments(aray-like object) in the local memory. 
// And we already know ans2 from the global memory has the entire innFunc() function. And since inside that function, there's nothing to save but print on the console, so there wont be anything to save on the local memory. 
// The innFunc() line 1 - console.log() - will execute. But since the local memory didnt had anything to save for that inner function - like fName, lName, and still its caling it - then, it will check the lexical environment, there too it wont be found.
// So, whenever, the innFunc will return- which is already present inside the main outFunc() - it will return with the local variables that's getting called - fName, lName.  
// note that, when line 3 returns, it willalso create its own FEC - in the local memory, it will have the arguments(array-like objects), fName, lName(from innerFunc). Then, it will run the innFunc(), which here tells to log on console - fName, lName - which is already present inside the global memory, because the innFunc() was closures, and when returning, it will log on the console the variables with the values. 

function outFunc(fName, lName){ //line 1
	function innFunc(){
		console.log(fName, lName)
	}
	return innFunc; // when returning, it will return with its parameters(variables) as well - fName, lName.
}
const ans2=outFunc('abc', 'xyz') //passing arguments - //line 2
ans2() // will run the inner function(which already returns with its variables) with outer fucntion's parameters and arguments. - //line 3

// when a function returns inside a function, and they return with the variables they have inside their local memory. They are called closures. This entire function returning along with the variables is called closures. When these functions are returned, they will return with the lexical environment. 




// 90. Examples of Closures - 
// as usual, we have the GEC before the code even runs - it has two parts - MCP (Memory Creation Phase) - where the GEC sees the code, accepts the values-initializes them but doesnt store their values yet. It has the window{} object, and this's value here is windows. And the other is CEP - code execution phase - which runs after MCP task is complete and it will assign the values and run the functions and stuff.
// in the MCP - the helo() function will be defined, and the const anssss variable will be stored, whose value right now will be uninitialized. 
// Now, we have the CEP - where line by line they'll execute as per the code stack - where the first is GEC, and then the rest of them will keep cascading on top of GEC and run while the remaining functions will still be on the call stack. 

// when the helo() function runs, it will create its own FEC - Function Execution Context - which is also divided into two parts - MCP(local memory), CEP.  
//In FEC - in its local memory, we will get the following - arguments(args - which is an array-like objects that will store all the function's arguments), x - which is the function parameter. X's value will be args - because args stores all the function arguments. Other than that, the variables, a and b, their starting values will be uninitialized(because we have made them using const). 
// THere will also be the function which we will be returning - but that function has no name, so its an anonymous function. 
// Once its all local memory thing will be done, the code execution process will begin. Here, value of a will be replaced with varA, b with varB, then the function return will be, but since its a function present inside a function, so the outer function becomes its lexical scope, and when it returns, it will return with the values of its surroundings as well. the things its returning, a, b, x, it is not defined within its scope, its in its lexical scope, so it will return with these values because it knows that it will have to use it later on. 
// When the function gets returned, it gets stored in the anssss variable, because anssss was the variable that has called the main function - and since main function is also reurning the inner function, so it will get stored in anssss variable. THis variable - anssss-  also has x:args, a:varA, varB becuase itis present in the main functin. 
// Once the fuinction gets returned, it will be removed from the call stack.
// Now, when anssss gets called in the last line, it too will haev its own memory creation phase(local memory) and code execution phase. Since we are not passing anything in the anssss() function call, so in its args[] there wont be anything stored. 
// in its CEP - we see that, the returned function will start running, the returned function is asking to console.log(a, b, x) and since it doenst have these on its own, it will look on its lexical scope, which has these values, so it will take the values from there and log onto the console. Since, value of x, was stored in the helo() function's args[], the returned function will also take that value from there and log it.


function helo(x){
	const a='varA'
	const b='varB'
	return function(){
		console.log(a, b, x)
	}
}
const anssss=helo('arg')
anssss()





// 91. creating a function that can take another function and return the square or cube of the number passed. 
// here, in the code below, in the MCP - there would be two functions - squared, answerSquared because both of them are calling a function but both of them will be uninitialized in the beginning when MCP is happening. 
// when the first function runs, it will create a FEC - and it will have two components - local memory, code execution. Memory will have the array-like-objects - arguments[2] with 2 as its value, why, becase the function call is taking 2 as its parameter. After that, myNewFunction() has a parameter called power, whose value willbe set to 2 from the arguments. THere is another inner function inside the myNewFunction(). THats when memory phase stops.
// code execution will return the inner function, it will return with power as it is using it inside it. Power here is presentin the lexical scope. So, it will return with it.
// now, in the outside GEC, sqaured's value will be set to the returned function along with power's value = 2. Since function's work is done, it will stop executing and removed from the call stack. 
//  now, we call the squred() in the next line, which will alos cretate a new FEC - which will do the same thing here, but here, in memory, args[] will be present, and since squared alreadyhad the returned inner function, and power:2, it will all be accessed by answerSquared variable.
// now, since the inner function already has power with its value 2. and number, it will take from parameter, whose value is 3, which it will get from the squared() function call. Ultimately, it will give the result, log on console, 4. 

function myNewFunction(power){
	return function(number){
		return number ** power // double asterick ** means exponent
	}
}

const squared = myNewFunction(2)
const answerSquared=squared(2)
console.log(answerSquared)

// we can write the above function is smaller way too - 
const myFuncNew=power=>number=>power ** number


// another example of closure - 
// one of the applications of closures is that you need to call them only once. If theya get called more than once, chances are, there might be a problem later one.
// here, in the function below, we see that we have used an if-else statement for our function call, so that if we call a function more than once, it will print a message saying that we have already called the function once before. 
// When the GEC is created, it will create two things - GMC, CEP. 
// In the GMC phase, the window{} object will be created, along with - this: windows, will be created, then func will be created which has the function, and after that, myFunc variable is there which will be uninitialized at first.
// the first line is the function, which is already present in the memory. Second line is outwside the function callingit by creating a new variable which earlier was uninitialized. When function gets called it will creates its own FEC - MCP(local memory), CE - MCP has arguments[], which is an aray like object that holds all the arguments passed inside the function. Whether there's an argument in the function or not, there will always be an arguments[]. Then, there's coutner, which is earlier uninitialized, then there's the function which is getting returned. 
// now, in CE, the counter's value will be 0, line 2 will return the inner function() - the entire function - now outside the function, the const myFunc was uninitialized, but now, its value will become the entire returned inner function. Also, when the inner function returns, it will take the couner=0 with it. Now, line 2 of outside is complete. 
// here, in line 3, we see that we are calling the myFunc() again.  When this happened, another FEC will be created for myFunc() - MCP(local), CE in it as well -  
// here in the CE, we see the returned function getting called, the if statement will be the 1st to execute, but it will check whether the value of counter is less than 1. To see that, it will go to arguments[] in MCP, but here's no arguments in the function, so it will go above and look into its lexical scope (closure) to search counter's value. If coutner's value is less than 1, the if's condidion will run. Then, the counter's value will get increased to 1 because of - counter++, and now it will get out of the function.
// now, in line 4, we see that myFunc() getting called again, so again the same FEC will be created, and the same if condition will run, but this time when it checks the vlaue of counter, it is 1, so if condition will not run, instead, it will go to the code below and run the else statement.
// note that, you can only change the value of counter after a function is returning it, unless the function is getting called, the value of counter will remain unchanged. 


// const myFun12=func12()
// myFun12();
function func(){
	let counter = 0; // a counter that keeps track of how many times the function gets called. 
	return function(){
		if(counter < 1){ // if its less than 1, only then this condition will run. 
			console.log('function call 1')
			counter++; // once the function gets called, its value will incerease by 1
		} else {
			console.log('function called already once! Cant call again.')
		}
	}
}

const myFunc=func();
myFunc();
myFunc();





// 92. adding JS file to HTML file
//using the <script> tag in the <head> section of the HTML file.
// when doing this, the first thing it does is send the HTML file to the browser. Then, once it starts parsing, it reaches the script tag where it will start to load the JS file and stop loading the HTML file. The problem with this approach is that it stops the HTML file parsing at the script tag, it will then start to parse and load JS file. So, when the browser starts to execute the JS file, and since the parsing of HTML file is already stopped at script, the browser will then find the contents of the HTML file below the script tag even before it has loaded/parsed. So, in a way, during JS execution, the browser will throw an error that these variables or items are missing in the HTML file even when they are not. So, this is bad practise. 

<script src="./JS1.js"> </script>



//using the <script> tag at the end before the </body> tag ends.  
// now, we have placed the script tag and the JS attached file at the end of the body tag. So, this will allow the browser to parse the entire HTML document from the top to the bottom. It will start to do it. 
// When the browser reaches the <script> tag with JS file, it will start to execute th JS file, and it will execute no problem. FIrst the JS file will load, then it will execute. But, the problem is that it takes time to complete, first HTML loads and prases, the JS loads and executes. It means that the work is getting done synchronous - first 1 thing is getting done, then the other. it should happen asynchronous, both should be happening at the same time.  

<script src="./JS1.js"> </script>
</body>



// using the JS in the <head> only, but this time using the JS async keyword. 
// when using this method, we see that the browser parses the HTML file first, when it reaches the <script> tag and JS file, and it sees the async keyword, it will not stop parsing, it will continue to parse the HTML file but also continue to read and load the JS file - both are happening asynchronously. 
// however, this only happens till the JS file loads, once it finishes loading, it will stop HTML parsing as well and start to execute just the JS file, which means the HTML file parsing could stop even at the middle if it hasnt reached the end. This could lead to error because only half of our HTML file has parsed. And it will also lead to the first-one's problem.

<script src="./JS1.js" async> </script>



// using defer keyword at the <script> tag.
// when using defer, we see that the browser starts to parse the HTML file, when it reaches the script tag, and the JS file, and it sees the defer keyword, it will then starts to load the JS file. So now, both the parsing HTML and loading JS file is happening together. 
// Once loading the JS file completes, it stops there and waits for the HTML parsing to finish. Once HTML parsing is done, the browser starts to execute the JS file, making it the best out of all the ways we saw earlier of using JS file in HTML file. It is also faster and safer to use than the other ways we saw before. It also improves the website's performance. 

<script src="./JS1.js" defer> </script>




// 93. DOM - document object model 
// when the browser receives an HTML file, it first goes through the entire file. It sees the tags used - the head (title and meta inside it), the body(header, footer, nav, logo, etc. inside it), and using this details, the browser creates an object, which has a key:value pair. This object is called document, and it gets added to JS's window object. So, document becomes a property that is an object. Basically, it becomes, the entire document, becomes part of the JS's window object that we were studying.
// we already know that every JS file has a window object and since our own file was getting stored in the window object, so using that document object, the browser is able to display the web page as is. So, using that same document object, we can even change the webpage's text or other settings or get mroe details about the webpage itself. 

console.log(window.document) // will give us our web page's HTML code and structure.  
console.dir(document) // will give us our web page's entire document structure and properties that we can use and change the webpage. 




// 94. Events -
// events are basically the actions that you can perform on the DOM using windows.document object in JS - example - submit, click, hover, scroll, etc. 




// 95. selecting an HTML element using the DOM - 
// know that, every element in HTML webpage can be selected using document object, there are lots of methods that we can use on the document object to select any element in the web page.

// selecting element using document.getELementById()
// for this, our element in webpage should have an ID to be selected. And this method can be used using document. 
// JS makes an object for every element present inside the document object. So, its like an object inside an object - <h2> will be stored as an object inside the document object. So, when it returns something, it is not returning the <h2> HTML element but as an object.  

document.getElementById('main-heading')// right now, we have just targetted the element, not made any changes to it. 
console.log(document.getElementById('main-heading'))// will print the selected element as an object.
console.log(typeof((document.getElementById('main-heading'))))// will give us the type of the element - which is an object. 

const mainHeading =  getElementById('main-heading');
console.log(mainHeading)// will print the element which has main-heading as its ID but in the form of an object. 


// selecting an HTML elemetn using querySelector() - 
// unlike getElementById(), using querySelector() you can target any element or item of the HTML document. Classes, ids, elements, anything you can select using this method. 
// to select a query/item using querySelector(), we have to use the way we use in CSS - . for classes, # for IDs, normal for elements.
// if you are using querySelector() to select a class which is given to multiple elements, it will select the top element that matches the class-name you entered. 

//querySelectorAll()
// if you want to select all instances of an element that has a specific class or is an specific element - like H2 - then, you can use the querySelectorAll() method - which will select all the instances of that element. 
// It will give you the result as a node-list, which is like an array, but is not an array. 

const mainHeading2 =  querySelector('#main-heading');
const mainClass =  querySelector('.btn');
console.log(mainHeading2)


// changeText() method - 
// is used to change the text content and inner text of an HTML document. 
// to use it, you must first select the element using querySelector() or select using ID of the element you want to change the text of. Once selected, then you apply the methods you want to use on it.

const mainHead = document.getElementById('main-heading') // element selected
mainHead.textContent="this is the new changed text" // text changed
console.log(mainHead) // new text printed

// note that, when you use textContent() method, it will show you the entire text of the selcted element - even the one which is hidden or blocked using - display:none - property. And when you change the textContent() of that element, it changes the entire text of the element, even the hidden one. So, keep that in mind. 
// also note that, textContent() will not preserve the format of the text which was already present. If you wnat to preserve the formatting of the text, use innerText() method.


// innerText() method - 
// will only give you the content/text you actually see on the screen, not the hidden one.

const mainHead3 = document.getElementById('main-heading') // element selected
mainHead3.innerText="this is the new changed text"



// changing the style of the elements of HTML DOM - 
// before we even change the style of the element, we must first select the element using the methods given above. Once selected, then we use 

const mainHead2 = document.querySelector('div.headline h2') // this is how we chain the elements together to get to one specific element in the DOM - here, we are targetting the h2 element inside the div element whose class is headline.
mainHead2.style.color = 'red' // will change the heading color to blue. Note that, when you select the style of any object, it will give you the entire style-list that you can use using CSS, and also, all these styles are in object format, so they can be targetted and selected as how we select and use an object in JS.
// when changing CSS elements in JS, we dont use hyphen for elements like - background-color, it will throw an error, instead, we use backgroundColor, camel case like we use in JS, and the same applies for every other CSS element that uses hyphen, we use camel case instead of the hyphen. 




// 96. get and set () attributes - 
// attributes are trhe properties that we give to the elements, like class, id, name, placeholder, etc. 
// getAttribute() is a property that all elements with an attribute has. So, suppose <a> tag has a href attribute, we can target that attribute using the getAttribute() method.
// note that, the getAttribute() method will only give you the attribute of the element.

const link = document.querySelector('a')
console.log(link.getAttribute())// this will give us the href attribute of the a element. Here, we can also change or limit the things that we want from the attribute if there's more than one item using .slice() method - console.log(link.getAttribute('href').slice(1)) - this will slice the first character from the thing we are looking for. 

// setAttribute()
// with setAttribute() method, we can change the selected attribute in an HTML element. 

const link2 = document.querySelector('a')
console.log(link.getAttribute())
link.setAttribute('href', 'www.google.com')// using setAttribute() method to find the attribute we want to change - href here, and set it to a different attribute - www.google.com here. 
console.log(link.getAttribute())//getting the attribute again after changing it. 




// 97. get Multiple elements using getElementsByClassName() method -
// with getElementByClassName() method, you can get multiple element which has the same class using just its class name.
// it will give you the collective result as HTML collections - which is an array-like-object. It means that you can use indexing on it which can then be used to iterate over them, but it wont be able to use all the array methods.

const navItem=document.getElementsByClassName('nav-item') // will give HTML collection
console.log(navItem[1])//getting the navitem using their index. 
console.log(typeOf(navItem)) // will give object as a result


// get Multiple elements using querySelectorAll() method - 
// it will return all the elements that matches its query - class, element, etc - but it will give you a result of a Nodelist instead of a collection. A nodelist is also an array-like-object and can be used indexing on it, but it wont support all the array-methods. 

const navItem1=document.querySelectorAll('.nav-item') // will give nodelist
console.log(navItem1[1])
console.log(typeOf(navItem1))// will give object as a result



// 98. loops - 
// can be used on elements of the same kind. We can use the getElementsByClassName() method or querySelectorAll() method on those elements, and run a loop on them to give us a result that we want for each one of them - like changing font size or changing text color. 
// the loops we run on them too can be of many types - forEach, for of, for loop. ForEach methid cant be used to iterate over HTML collections (array-likeo objects has indexing and length property on them). 

// simple for loop - 
const navItems = document.getElementsByTagName('a');// this method will give us HTML collections only, but here, we are targetting them using their tag names. So, a here represents the anchor tags. It will select all the anchor tags. 
for(let i = 0; i < navItems.length; i++){
	const navItem = navItems[i];
	navItem.style.backgroundColor="#FFF";
	navItem.style.color='green';
	navItem.style.fontWeight='bold';
}

// using for of loop - 
for (let navItem of navItems){
	navItem.style.backgroundColor="#FFF";
	navItem.style.color='green';
	navItem.style.fontWeight='bold';
}


// we cant use forEach method on HTML collections, but what we can do is change the collection to an array, and then use forEach on it. 

let navItems11 = document.getElementsByTagName('a')
navItems11=Array.from(navItems11); // here, we change HTML collection to an array using Array() method. 
console.log(Array.isArray(navItems11)) // will result true, thus we successfully changed the HTML collection to an array. Once done, we can use any array method on it.
navItems11.forEach(navItem=>{
	navItem.style.backgroundColor="#FFF";
	navItem.style.color='green';
	navItem.style.fontWeight='bold';
})



// looping through a node list - 
// querySelector() method throws its result as a node list. It too is an array-like object. 
// with nodeList, you can use - 
	// simple for loop
	// for of loop
	// forEach loop

let navItems12 = document.querySelectorAll('a');

// using simple for loop - 
for(let i = 0; i < navItems12.length; i++){
	const navItem = navItems12[i];
	navItem.style.backgroundColor="#FFF";
	navItem.style.color='green';
	navItem.style.fontWeight='bold';
}

// using for of loop - 
for (let navItem of navItems12){
	navItem.style.backgroundColor="#FFF";
	navItem.style.color='green';
	navItem.style.fontWeight='bold';
}

// using forEach method - 
navItems12=Array.from(navItems12); // here, we change HTML collection to an array using Array() method. 
console.log(Array.isArray(navItems12)) // will result true, thus we successfully changed the HTML collection to an array. Once done, we can use any array method on it.

navItems12.forEach(navItem=>{
	navItem.style.backgroundColor="#FFF";
	navItem.style.color='green';
	navItem.style.fontWeight='bold';
})




// 99. Inner HTML - 
// innerHTML basically is anything written inside a tag. So for the <body> tag, till </body> everything inside it is inner HTML. It applies from the largest of tags to the smallest like just one <p></p>tag inside a <div></div> tag.  
// to target the Inner HTML, we can use - .innerHTML method.
// using .innerHTML, we not only cna change the contents of the page, but we can also add new elements and tags to the page as well as written below. To add something new to the same innerHTML, we use += - additon operator to add to the existing content of the web page/tag. 
// \\ - \\ is backslash - escape sequence, which can be used to put more apostrophe or double quotes.  

const headL = document.querySelector('.headLine')
console.log(headL) // will give all the tags and contents inside the tag with the .headline className. 
console.log(headL)
headL.innerHTML = '<p>inner HTML changed using .innerHTML method</p>'
console.log(headL.innerHTML)

headL.innerHTML += '<button class=\'btn\'>Learn More</button>'




// 100. DOM Traversing - 
// how does the browser know how to traverse the DOM?
// it knows that whatever file it has to work with, it has to be with the document itself, so that will go on top. It is also called as Root Node (a JS object). 
// inside the document all the HTML code is saved - it is called Root Element - which is the child node of the document. Know that the document saves the HTML and info as a tree
// after HTML, we have Head - whihc is a child node of HTML. 
// after Head tag, document sees that below it, there's space and another tag opens up. So, a new line - which will be represented as - \n. It is also an object and its a text node, becasue its a new line space, so its a text node.  
// Then, there's the Title tag - which has a text - it wills tore the title's text below the title node only. That data is also a text node only. 
// Then, we have another new line and space - \n -
// then, we have the script tag, which will store the script's data.
// then, we have another new line and space - \n - which will be another text node.

// after head, we have another new line adn then space - \n 
// then, we come to the body tag - which will be the child tag of HTML root element. 
// after head, we have another new line adn then space - \n
// then, we have a div tag, which will be the child tag of body tag, after which, after head, we have another new line adn then space - \n

// then, we have another new line and then space - \n - we have entered the div tag now
// then, we have a h1 tag, which will be the child node of div tag. The h1 tag will also store the data inside it.  
// then, we have another new line adn then space - \n - text node
// then we have a p tag - which will create an element node and it will also contain the data of the p tag. 
// then, we have another new line adn then space - \n - note that, the browser also takes note of the empty text nodes and empty lines as well.

// So, this concludes our DOM tree. But why is it important. 
// using the DOM tree, we can traverse the document and the code. In other words, if we just know the root node, we can traverse through the entire tree and go wherever we want in the tree. It is all connected through the root node. 

<head>
	<title>DOM Traversal</title>
	<script src="JS1.js defer"></script>
</head>

<body>
	<div class="container">
		<h1>My Heading</h1>
		<p>lorem ipsum</p>
	</div>
</body>


// root node - is the main document node inside which the document's (HTML) data is stored.
// root element - is the main HTML element of the document - that the document's main heading will be since its an HTML doc. 
// child - the first child here of HTML is the head child, then there's the \n (new line, space) child, then, there's the body tag, which is also a child of HTML.

// head - child's child - Head has 4 children - /n, title, /n, script
// \n (new line, space) of HTML - has no child
// body - child's child - has 3 children - \n, div, \n

// div - child's child's child - it has 4 children - \n, h1, \n, p

// h1 - doesnt have child - it has data

// p - doesnt have child - it has data



// 101. traversing through the document DOM tree - 
// so now, using this DOM traversing, we can traverse throughout the tree to get to one specific element/location and make changes to or add elements or items we need. 

//getRootNode() is a method of DOM that lets you access/get the root element of the tree. This root element typically is the document, and HTML is its child. 
// using different methods, we can see the child nodes of the parent node/root node - document.getRootNode.childNodes

const rootNode=document.getRootNode();
console.log(rootNode)
console.log(rootNode.childNodes) // will give us the child node of the root node

const htmlElementNode=rootNode.childNodes[0] //will give us the first indexed child of the root node
console.log(htmlElementNode)

console.log(htmlElementNode.childNodes) // will give us the child nodes of the HTML child - NodeList(3) [head, text, body] - will be the output

const headElementNode = htmlElementNode.childNodes[0]// will give us the first indexed child of the HTML element - head
const textElementNode = htmlElementNode.childNodes[1]// will give us the second indexed child of the HTML element - text
const bodyElementNode = htmlElementNode.childNodes[2]// will give us the third indexed child of the HTML element - body

console.log(bodyElementNode)

console.log(headElementNode.parentNode)// will give us the parent element of the headElementNode - ths is parent relationship


// sibling relationship in nodes/tree
// it basically means that all the elements/nodes present at the same level, are considered as siblings, so their relationship will be sibling relationship, because they traverse/come/originate from the same parent. 

console.log(headElementNode.nextSibling) // will give you the next sibling of headElementNode
console.log(textElementNode.nextSibling) // will give you the next sibling of textElementNode -  but it will also give us the data present at that location of the sibling 


// there is a property in document that is called - .nextElementSibling - it will give you the element sibling and not give you the newline, space - \n - sibling as a result.  

// note that, browser sets all the element's white spaces to normal - so hwoever you wrote the code, the nwe lines or white spaces are ignored.

// .childNodes - will give you the child nodes of the element that you are looking for. 
console.log(headElementNode.childNodes)


// selecting an element and traversing to its parent and changing the parent's details - 

const h1 = document.querySelector('h1') // the h1 element
const h1Parent=h1.parentNode // traversing to h1's parent - which is div
h1Parent.style.color="#EFEFEF" //changing parent's text color
h1Parent.style.backgroundColor="#333" // changing parent's background color

const divparent=h1.parentNode.parentNode // traversing from h1 to div, div to body
divparent.style.color="#EFEFEF" //changing parent's parent's text color
divparent.style.backgroundColor="#333" // changing parent's parent's bg color

// we can also do document.body - to select the HTML DOM's body. 

// selecting the head of the DOM

const head=document.querySelector('head')
const titles=head.querySelector('title') // here, we're using query selector on the head element that we selected on line above - this will make this query selector search only the elements/contents of the head instead of the entire body. So, this is to show that we can use querySelector() on the document, html, elenmet node, body etc. 
console.log(titles)
console.log(titles.childNodes)


// using the children property 

const containers = document.querySelector('.container')
console.log(containers.childNodes) // will give NodeList with all the child nodes of the containers variable - meaning, it will also give the newline, space - \n - part of the document's child as well. 
console.log(containers.children) // however, using children property will give us a HTML collection with only the children ndoes of the element and not the newline, space - \n - part of the document




// 102. .classList property - 
// this property when used will tell you how many classes does a specific element/item has.  It will give you a DOM token list and all the classes that an element has. 
// But we can also give new clases to the selected elemnet using JS. 

const sectionTodo=document.querySelector('.section-todo')
console.log(sectionTodo.classList)

sectionTodo.classList.add('bg-dark'); // adding a new class
sectionTodo.classList.remove('bg-dark'); // removing an existing class

sectionTodo.classList.contains('container'); // checks whether the mentioned class is present in that element or not

sectionTodo.classList.toggle('bg-dark'); // toggle will add the class (if class is not present) or remove the class (if class is present) 

const header= document.querySelector('.header')
header.classList.add('bg-dark') // will add a class to the header element. But note that, if two classes are given to an element, and both has similar values defined for one item - like bg-color, one is red, one is black - then, the second one, the latest one will be used and the previous one will be ignored. In other words, the one who is written later will take the precedence.




//103. adding new HTML elements to a page using innerHTML - 
// using innerHTML, we can add elements to an already existing HTML element using querySelector and innerHTML. 

const todoList = document.querySelector('.todo-list')
todoList.innerHTML+= '<li>New Todo</li>'
todoList.innerHTML+= '<li>Newer test Todo using JS</li>' // adding new elements/items to a todolist using innerHTML


// when not to use innerHTML?
// do not do anything like the code has mentioned above to add new todo/elements. it has performance issues. So, do not use innerHTML to append/add elements to an already existing HTML element, because it will render the already existing elements regardless of how many there are and then add the new elements, so its time and resource consuming.  

// when to use it?
// use innerHTML when you already have text formats in a webpage, adn you have to change the entire HTML content of that element. So, you are replacing new elements/items with the old one. Thats when you should use it. 




// 104. document.createElement() property - and inserting elements in the DOM
// using createElement() method, we can create a new HTML element directly from JS
// .append will add a new item to the end of the list, element, item.

// the long version of creating a new text content and adding to the li - using append

const newTodoItem=document.createElement('li') // it will create a new <li> element in the doc
const newTodoItemText=document.createTextNode('Teach Students') // will add new Text content to the newly created li item
const todoList1=document.querySelector('.todo-list') // will select the query/list where we are adding these things
todoList1.append('newTodoItem') // append will add the newly created element to the end of the list 
//newTodoItem.appendChild(newTodoItemText) // instead of append, we could also used appendChild - but this is an older way to do it. 


// the shorter version of creating a new text content and adding to the li
const newTodoItem1=document.createElement('li') // it will create a new <li> element in the doc
newTodoItem1.textContent='Teach Students' // here, we are targetting the newly created element and adding the text content here only.  
const todoList2=document.querySelector('.todo-list')
todoList1.append('newTodoItem')


//.prepend - will add the new item to the start of the element, list, item
const newTodoItem2=document.createElement('li') // it will create a new <li> element in the doc
newTodoItem2.textContent='Teach Students using prepend' // here, we are targetting the newly created element and adding the text content here only.  
const todoList3=document.querySelector('.todo-list')
todoList1.prepend('newTodoItem') // prepend will add the newly created li and text content to the start of the list. 


// removing existing things from the list using - .remove - method

const todo1=document.querySelector('todo-list li')
todo1.remove();


// .before() method - 
// here, we are trying to insert a new item even before the <ul> element. In other words, we ar etrying to add before the todo list - 

// here, we are adding the new li item before the todo-list li item begins using before() method
const newTodoLi=document.querySelector('li')
newTodoLi.textContent('New LI Item in List')
const todoLi=document.querySelector('todo-list')
todoLi.before(newTodoLi)


// .after() method -
// here, we are adding the new li item before the todo-list li item begins using after() method
const newTodoLi1=document.querySelector('li')
newTodoLi1.textContent('New LI Item in List using After')
const todoLi1=document.querySelector('todo-list')
todoLi.after(newTodoLi1)



// 105. insertAdjacentHTML(where, html) method - 
// elem.insertAdjacentHTML(where, html) - syntax
// using this, we can add new item in our already existing unordereed list - but here, we dont have to select or create a new element like we did before, here we can just enter/create a new html directly. 
// .insertAdjacentHTML() mnethod takes two arguments - where do you want to insert this item ('beforeend','afterbegin', 'beforebegin', 'afterend' - these are the parameters it will accept to place where you want your new HTML to be at) and what that item will be ('<li>.......</li>')

// 'beforebegin' - will add the new html element before the beginning of the list, item, element
// 'afterend' - will add the new html element after the end of the list, item, element.

const todo11=document.querySelector('todo-list')
todo11.insertAdjacentHTML("beforeend", '<li> Teach Students using Adjacent HTML </li>') // its working as append - adding to the end of the list. 
todo11.insertAdjacentHTML("afterbegin", '<li> Teach Students using Adjacent HTML </li>') // its working as prepend - adding to the start of the list.





// 106. Clone Nodes - 
// it will clone a newly created item so that you can use it twice without losing to which method was used later.

// to truly clone the entirety of the element, along with all of its contents, we use deep cloning, where we use true as cloneNode's parameter - cloneNode(true)
// but it you dont want to clone, you can always create a new element and use that instead of cloning an old one. 

const ul=document.querySelector('todo-list') //selecting the todo list as ul
const li=document.createElement('li'); //creating a new element li to add to the ul 
li.textContent=('new todo item') // entering the text content for that li
ul.append(li) // append the newly created li item to the ul.
ul.prepend(li) // prepend the newly created li item to the ul - however, notice that here we are appending and prepending the same li element to the ul two times, so only one of the things will happen - and since we wrote/used prepend later/after append, so prepend will be applied. 


// to fix that issue, where we can insert same li item two times in the ul, we will have to clone the new li itself using cloneNode() method - 

const ul1=document.querySelector('todo-list') //selecting the todo list as ul
const li1=document.createElement('li'); //creating a new element li to add to the ul 
li1.textContent=('new todo item') // entering the text content for that li
const li2= li.cloneNode(true) // cloning li to li2, now we can use both as li and li2 
ul1.append(li) // append the newly created li item to the ul.
ul1.prepend(li2) // prepend the newly cloned li2 item to the ul. 




// 107. methods that work in IE - 
//.appendChild() 
// using .appendChild() method, we can append a child to the selected element

const ul11 = document.querySelector('todo-list')
const li11 = document.createElement('li')
li11.textContent='New Todo in IE'
ul11.appendChild(li11)


//.insertBefore() method - 
// it will insert a new element/item before the first element/item present in the list. So, basically we are pushing it in front of the pack. 
// it takes two paras - the item to be added, the reference of the inserting-before element 

const ul12 = document.querySelector('todo-list')
const li12 = document.createElement('li')
const referenceNode=document.querySelector('first-todo') // here, we are making the reference of where exactly we want to insert our item before what element. 
li12.textContent='New Todo in IE'
ul12.insertBefore(li12, referenceNode)


//.replaceChild()
// will replace a content already present inside the DOM with a new content/item. 
// it takes two paras - the item to be added, the reference of the replacing-onto element 

const ul13 = document.querySelector('todo-list')
const li13 = document.createElement('li') // new element
li13.textContent='New Todo in IE' // new element's content
const referenceNode1=document.querySelector('first-todo') // which element we want to replace, here we are giving the reference of it. 
ul13.replaceChild(li13, referenceNode1)


// .removeChild()
// 


const ul14 = document.querySelector('todo-list')
const li14 = document.createElement('li')
li14.textContent='New Todo in IE' 
const referenceNode2=document.querySelector('first-todo') // reference of what we want to remove
ul14.removeChild(referenceNode2)





// 108. Static List, Live List
// static lists are basically the lists that you can change using JS, and it will reflect on the DOM, but it will not be changed in the original DOM items present. 
// querySelectorAll() method will give you a static list, like we have done below - It will give you a Node List, and a static list - 

const listItems=document.querySelectorAll('todo-list li') // selecting all instances of li
const newListItem=document.createElement('li') // creating new li
newListItem.textContent='Todo Test Item 6' // new li text content
const ul121=document.querySelector('.todo-list') // selecting the UL where we will add the new li
ul121.append(newListItem) // appending the new li to UL. 


// live list 
// using. getElementsBySomething() (TagName, ClassName, etc) will give you a live list - 
// basically, live lists are those that will reflect the changes in the console or DOM original settings after you make any changes(adding, deleting) any list items using JS's getElementBySomethin() methods - it will give you an HTML collection and a live list - 

const ul1211=document.querySelector('.todo-list')
const listItems1=document.getElementsByTagName('li')

const newListIte1m=document.createElement('li') // creating new li
newListItem1.textContent='Todo Test Item 6' // new li text content
 // selecting the UL where we will add the new li
ul1211.append(newListItem) // appending the new li to UL. 





// 109. How to get DImensions of Elements - 
// using the .getBoundingClientRect() method, we can find out the height, width, left, right, top, bottom and other dimensions of an element. it will give you an object that will have all the information about the selected element. 
// we can also pinpoint the dimension we are looking for like height or width (which are more important) - using .height after our main method like so - getBoundingClientRect().height

const sectionTodo1 = document.querySelector('.section-todo')
const infoOfElement=sectionTodo1.getBoundingClientRect().height // getting the dimensions of the element selected
console.log(infoOfElement)




// 110. Events - 
// Any work done on the screen is an event - like the user clicking any button (keyboard, mouse, hover, over element, etc.)
// there are a lot of events but we use only few of them - mouse events - click, keyboard events, input events, form events, etc. 

// firing/adding an event - 
// there are three ways to add an event - 
// 1. add - adding on the HTML page only using onclick property. Inside that property, you can write JS code that will happen when that button is presed - eg. onclick="console.log('You clicked me')". Its an older way so we dont use it much.
// 2. onclick - this is another way to add an event to the btn. It is also an old way, and we cant use it much becuase we cant assign more than once on the 'click' event. 

const btn1=document.querySelector('btn-headline')
btn1.onclick=function(){
	console.log('You clicked me!')
}

// 3. method - addEventListener() - is a JS method that listens for an event that you have asked it to listen like click, scroll, etc. 
// it takes two parameters - the event (click), and the function (what will happen when that event is occured.)

const btn2=document.querySelector('btn-headline')
function clickMe (){
	console.log('You clicked me!')
}
btn2.addEventListener('click', clickMe)// we can write the function here, or write the complete function here as well. 


const btn3=document.querySelector('btn-headline')
btn3.addEventListener('click', ()=>{
	console.log('You clicked me using an arrow func!')
}) // here, on the second parameter, we are using an arrow function, but you can also add a normal funciton as well or even an anon func. 


// using this keyword in the callback function - 
const btn4=document.querySelector('btn-headline')
btn4.addEventListener('click', function () {
	console.log('You clicked me using an arrow func!')
	console.log('value of this')
	console.log(this) // here, the value of 'this' is the button itself which we are working with. Because 'this' takes the value of the item/element we are working with. Like in the main/global window, the valueof this is the window itself. Because the method is getting called on btn element.  
}) 


// using this keyword in the arrow  function - 
const btn5=document.querySelector('btn-headline')
btn5.addEventListener('click', ()=>{
	console.log('You clicked me using an arrow func!')
	console.log('value of this')
	console.log(this) // here, the value of 'this' in the arrow function is the window object. Because with arrow function the value of 'this' is one step above/ one level above where we used it. So, instead of the btn element, it will be the window object. 
}) 



// adding Click event on multiple elements/btns -  
// we 

//this is us adding click event on just one btn 
const btnOne=document.querySelector('#one')
btnOne.addEventListener('click', function(){
	console.log('this button is clicked!')
})



// to select all three btns, we do this - we use loops (any loop will do - for of, for each, normal for)

const btns=document.querySelectorAll('.my-buttons button') // class of div, then the three buttons inside the div
for (let button of btns){
	button.addEventListener('click', function(){
		console.log('buttons clicked using for of loop')
	})
}


// getting the button text content of the buttons using loops - 

const btnsLoop=document.querySelectorAll('.my-buttons button') // class of div, then the three buttons inside the div
for (let button of btns){
	button.addEventListener('click', function(){
		console.log(this.textContent) // this wil print the text content of the buttons. If we use arrow function here, it will give you an error, ebcause arrow function will take its 'this' object one scope above - so it will take the window object
	})
}


// using normal for loop

for (let i=0; i<btnsLoop.length; i++){
	btnsLoop[i].addEventListener('click', function(){
		console.log(this.textContent) // it will give us the same result as the above for of loop.
	})
}


// using for each loop for the same thing - 

btnsLoop.forEach(function(button){
	button.addEventListener('click', function(){
		console.log(this.textContent)
	})
})




// 111. Event Object -
// we have a JS engine, which executes our JS code line after line. 
// the browser, which runs the JS script files, it has a JS Engine + extra features as well - like - JS Engine, WEB Api. So, using these tools, the browser keeps an eye out for the user, of what/when event he is performing and on what element, what buttons he is clicking. 
//So, when the browser (web api) finds out that the button is clicked (the event is performed that it was listeneing to - using addEventListener()), it will do two things ---- give you the callback function assocaited with the button to the JS Engine and it will also give the details of the Event that was perfomed - and we will receive this information in the form of an Object. 
// we can receive that object and use it on the function's arguments as well.   


const btn1=document.querySelector('#one')
btn1.addEventListener('click', function(event){
	console.log(event) // this will give us the event that was performed on the webpage
})


// using normal function - 
const btnDiv=document.querySelector('.my-buttons button')
for(let button of btnDiv){
	button.addEventListener('click', function(){
		console.log(this.textContent)
	})
}


// using arrow function - 
const btnDiv1=document.querySelector('.my-buttons button')
for(let button of btnDiv1){
	button.addEventListener('click', (event)=>{
		console.log(event.currentTarget) // it will give us an event object on the buttons. it has two major properties - currentTarget, target.  
	})
}


// target -  it beaiscally means which element triggered the event. It means from which button/elemet the target is being triggered. 

// currentTarget - it means on which element, we have attached our event Listener, that will be targetted. 




// 112. Behind the Scenes how does the Event works - 
// the browser has two things - JS Engine, Web API (application program interface). 

// in the browser's JS Engine, we have a call stack - where the work is being done inside the Global Execution Context (which will be running the JS file - line by line) - as the GEC goes through the JS file, it takes care of the elements, variables, and whatever the JS file is asking to do. 
//JS Engine will not be able to go and run the entire code simultaneously becuse its single-threaded. So, it asks help from the Web API, which will take care of the things - like check for listening of events - and JS Engine will keep on going through its file.    
// you already know that every JS element before running needs to go through teh call stack, and through the call stack, when its turn comes, it will run. Similarly, the content/elements taken care of by the Web API can not send directly to the call stack. Instead, its contents form a line where they are stored, and from that line, they will await their turn to be called. Once done, it will be taken care of by the Event Loop which will take care of the line - callback queue. 

// Event loop checks/looks into the call stack as well as the Web API's line where elements are kept to run.  Once the call stack is empty of the GEC, the event loop will allow the Web API's line to go ahead adn get to teh call stack where their callback will be stored in the call stack. Once in the call stack, and after their work in the DOM is done, their job will be done. 
// After the first-element-in-line's(queue) work is done (callback, calculations, printing, etc.) the other will get to the call stack when called, and do its job (what it is programmed to do), and then, in the end the call stack will be empty at last. 

console.log('script starts')

const allBtns=document.querySelectorAll('.my-buttons button')

allBtns.forEach((button)=>{
	button.addEventListener('click', (event)=>{
		let num=0;
		for (let i=0; i<=100000; i++){
			num += i;
		}
		console.log(event.currentTarget.textContent, num);
	})
})

let outerVar = 0;
for (let i = 0; i <= 10000; i++){
	outerVar+=i;
}
console.log('value of outer var is ', outerVar);
console.log('script ends');



// some practise with click event -
// changing the color of buttons

const allBtns=document.querySelectorAll('.my-buttons button')

allBtns.forEach(button =>{
	button.addEventListener('click', (e)=>{
		e.target.style.backgroundColor='yellow'
		e.target.style.color='red'
	})
})






// 113. creating a small project using event handling.
const mainButton=document.querySelector('button')
const body=document.body;
const currentColor = document.querySelector('.current-color')

function randomColorGenerator(){
	const red=Math.floor(Math.random() * 256);
	const green=Math.floor(Math.random() * 256);
	const blue=Math.floor(Math.random() * 256);
	const randomColor=`rgb(${red}, ${green}, ${blue})`
	return randomColor;
}
mainButton.addEventListener('click', ()=>{
	const randomColor=randomColorGenerator();
	body.style.backgroundColor=randomColor;
	currentColor.textContent=randomColor;
})




// 114. Keypress Event/ MouseOver Event - 
// keypress event - similar to 'click' event will listen to the key presses of the keyboard, not just the click events but any key presses of the keyboard's button. When any button is pressed on the keyboard, that button is logged in the keypress event's console/memory. Meaning, using the keypress evebnt, you can target any key presses of the keyboard. Example given below -  
// note that, most of the events - keyboard or mouse will occur similar to these only. 

const bodyT=document.body

bodyT.addEventListener('keypress', (e)=>{
	console.log(e); //event parameter
	console.log(e.key); //pringint literal key's name
})


// Mouseover event - 
// simialr to keypress, mouseover is also an event but this is an event of the mouse. So whenever you want this event to occur - which will occur whenever the mouse hovers over the targetted element - that event will occur. Regardless of whether you press the button or not, if you hover over the targetted element, the mouseover event will occur.  

const mainBtn=document.querySelector('.btn-headline') // selecting button
mainBtn.addEventListener('mouseover', ()=>{ // adding event on btn
	console.log('mouseover event occured') // adding result of hover
})


// Mouseleave event - 
// simialr to mouseover event, the mouseleave event will occur whenever the mouse pointer leaves the targetted area. 

const mainBtn1=document.querySelector('.btn-headline') // selecting button
mainBtn1.addEventListener('mouseleave', ()=>{ // adding event on btn
	console.log('mouseleave event occured') // adding result of hover
})





// 115. Event Bubbling - 
// basically, it means that if there's a click event on the child, and there's click event on the parent, grandParent, and the document body as well - as mentioned below, clicking on the child element will automatically initiate the click event on all the other elements - parent, grandParent, body. 
// if you do on parent, it will trickle down to - grandParent, body, along with the parent element
// if you do on grandParent, it will trickle down to - body, along with the grandParent element - 
// it basically means that whatever is the element above, and there's click event on that element, then it will trickle/bubble down to the lower elements as well - given that they too have a click event on them. It is also called event propagation. 


const grandParent=document.querySelector('.grandParent')
const parent=document.querySelector('.parent')
const child=document.querySelector('.child')

child.addEventListener('click', ()=>{
	console.log('child class/item selected')
})

parent.addEventListener('click', ()=>{
	console.log('parent class/item selected')
})

grandParent.addEventListener('click', ()=>{
	console.log('grandParent class/item selected')
})

document.body.addEventListener('click', ()=>{
	console.log('grandParent class/item selected')
})



// Capturing events - 
// here, in the addEventListener() function, there is already two parameters present - click event, the callback function ()=>{}, but, we are adding another parameter here, a boolean value - true, whose job is to capture the event.  
// how is the event getting captured - we have put the third argument for the addEvenetListener() function - as true - this will capture the event where it is placed. 
// There's also other events that we are not capturing - the ones where the third argument is not placed, they wiill not be captured and they will run as they are supposed to - like they did on the code above.

// what happens when we click on the child now?
//  It will start to capture the events with the third parameter - true - it will start to capture first, once all the elements are captured(with the parameter), then, it will start bubbling down to the document.body - So, it will first capture, then once it will capture all, it will start to bubble down to the last element (with the event).
// even if the events are based on different elements, they all will work in a similar structure/way. First, the capturing will happen (if present - from body to child), then the bubbling (from child to body) will happen. This is how the cycle goes on. 

const grandParent0=document.querySelector('.grandParent')
const parent0=document.querySelector('.parent')
const child0=document.querySelector('.child')

child0.addEventListener('click', ()=>{
	console.log('child class/item captured')
}, true)

parent0.addEventListener('click', ()=>{
	console.log('parent class/item captured')
}, true)

grandParent0.addEventListener('click', ()=>{
	console.log('grandParent class/item captured')
}, true)

document.body.addEventListener('click', ()=>{
	console.log('grandParent class/item captured')
}, true)
// till here, it will capture the events/elements

//from here, it will start to bubble the events down to the body element
child.addEventListener('click', ()=>{
	console.log('child class/item selected')
})

parent.addEventListener('click', ()=>{
	console.log('parent class/item selected')
})

grandParent.addEventListener('click', ()=>{
	console.log('grandParent class/item selected')
})

document.body.addEventListener('click', ()=>{
	console.log('grandParent class/item selected')
})



// Event Delegation - 
// it means that you can use just one event listener object and callback to call/work on all the objects present inside/around the object you wrote for.
// it basically mean that you dont have to use event listener object on all the elements - for example here, parent, grandparent, body, child, - you just put the event listener on the grandparent object, and it will work on all of them. Why? This is because of event delegation, where the event is delegated to the object around it. Why is it happening, because all these boxes are inside each other <div> inside <div> inside <div>. So, putting it on the outer <div> will work on all the <div>s.   

const grandParent1=document.querySelector('.grandParent')

grandParent1.addEventListener('click', (e)=>{
	console.log(e)
})





// 116. Project - TODO - adding new LI items (todo items) to the app using dedicated buttons.

const todoForm=document.querySelector('.form-todo')
const todoInput=document.querySelector(".form-todo input[type='text']")
const todoList101=document.querySelector('todo-list')

todoForm.addEventListener('submit', (e)=>{
	e.preventDefault() // will prevent the default behavior of the website - like refreshing the page after clcking an event/button
	const newTodoText=todoInput.value;

	const newLi=document.createElement('li')
	const newLiInnterhtml=`
				<span class="text">${newTodoText}</span>
				<div class="todo-buttons">
					<button class="todo-btn done">Done</button>
					<button class="todo-btn remove">Delete</button>
				</div>
	`;

	newLi.innerHTML=newLiInnterhtml;
	todoList101.append(newLi);
	todoInput.value='';
})

todoList101.addEventListener('click', (e)=>{
	if(e.target.classList.contains('remove')){
		const targetLi=e.target.parentNode.parentNode;
		targetLi.remove()
	}
	if(e.target.classList.contains('done')){
		const liSpan = e.target.parentNode.previousElementSibling;
		liSpan.style.textDecoration='line-through'
	}
})





// 117. Synchronous Programming vs Asynchronous Programming - 
// Sync
// normal JS code and programming is sync programming only. Basically, it means that one piece of code will finish executing before the other can begin working and executing. 
// So here, first console will print, then the for loop will run and end, and then it will print the last console log. But to reach the last console log, it will first finish the for loop, which in turn is blocking the last console log. 
// In sync,  a code might/will block the further code from executing because JS is a sync programming and single threaded lang, it has a single thread to work with the code. 

console.log('script start')

for (let i = 1; i <100; i++){
	console.log('inside the for loop')
}

console.log('script end')


// async prog - 
// setTimeout function -
// this function basically, will work depending on the timer set on it while the rest of the code/program runs in the foreground while this function will wait in the background to finish its timer. Once its timer finishes, it will then start to execute.
// it takes two parameters - a function (or a callback funciton), and a timer, in miliseconds(ms) usually. Once the timer ends, the function will execute.  

console.log('script start')

// function newSetTim(){ // function to be used in the setTimeout() function below
// 	console.log('Hello World!')
// }

// setTimeout(newSetTim, 1000); // this function can work like this as well, where we give it a globaly-defined function and a time (1000ms = 1 sec) to work. 

setTimeout(()=>{ // or, we can write an arrow function inside the setTimeout() function, which will take the entire funciton as a callback, and a time - in ms(miliseconds) usually. 
	console.log('inside setTimeout() function')	
}, 1000)

console.log('script end')

// here, in the code, we see that there's a GEC in JS when a code is run. Once the first console log runs, it will print whatever is written. 
// the setTimeout() function is provided by the browser, not JS. So, JS sends this function to the browser - which will then be stored in Web APIs provided by Browser, it will also wait for the time set (1000ms) before it runs its code - it will then prompt the JS to run its existing code rather than wait for browser's side of the code to execute.
// JS will then run its last console log which will then be printed.
// After the timer finishes, browser will store the setTimeout()'s callback function in the callback queue. Browser will then see that the call stack is free from the JS code, while browser's own callback function of the setTimeout() will be stored in the callback queue (as we saw earlier). the event loop, will then check whether the callstack is free or not, if its not free it will stop the queue from proceeding, if free, it will prompt the callback queue items to go forth into the callstack. 
// Once the call stack is free, the callback queue will push the callback function to the callstack, where it will run the code, and then, its result - the second console log - will be printed. This is all the work happening here.   


// another example of setTimeout() - which is another example of async programming. 
// a setTimeout() function always gives an ID - this id can be used to clear the timeouts that has already been set/defined. 

console.log('script starts') // this will run 1st

setTimeout(()=>{ // this will be stored in the web browser's API, and then to callback queue
	console.log('inside setTimeout() function') // this will run 4th - last when all the code from callstack is finished. The event loop will hen stop the callback queue from progressing further. Once the call stack is finished, it be pushed from callback queue to call stack, and then it will run and execute, regardless of the 0ms time, it will run last	 
}, 0)

for (let i = 0; i<=100; i++){ // this will run 2nd - till the end of the loop
	console.log(i);
}

console.log('script end') // this will run 3rd


// another example of setTimeout() & clearTimeout() - which is another example of async programming. 
// a setTimeout() function always gives an ID - this id can be used to clear the timeouts that has already been set/defined. 
// a clearTimeout()  function is contrary to setTimeout() function, it will clear the timeout set by the setTimeout function, if done before the script/code ends, it will not run the setTimeout callback because its been cleared - as stated below.  

console.log('script starts') // this will run 1st

const setId = setTimeout(()=>{ 
	console.log('inside setTimeout() function')
}, 0)

for (let i = 0; i<=100; i++){
	console.log(i);
}

console.log('setTimeout() ID is', setId) // will print thje settimeout id
console.log('clearing setTimeout ID') // clearing the setTimeout id
clearTimeout(setId) //will clear the setTimeout id so it wont run

console.log('script end')



// setInterval() function - 
// here, the same thing will happen  as setTimeout().
// setInterval() will run the code inside the callback function after the set time interval. The time interval set will be in miliseconds - here its 1000ms - so after every 1 second, the code will print 1 random math number between 0 to 1, it will keep on printing till the script's code ends. 

console.log('script starts') // this will run 1st

setInterval(()=>{ // this will run last.
console.log('Math.random()')
}, 1000)

console.log('script ends') // this will run 2nd


// another example of setInterval() - 

const body1=document.body;
const btn = document.querySelector('button')

const IntId=setInterval(()=>{
	const red = Math.floor(Math.random() * 126)
	const blue = Math.floor(Math.random() * 126)
	const green = Math.floor(Math.random() * 126)
	
	const rgb = `rgb(${red}, ${green}, ${blue})`
	
	body1.style.background = rgb;
}, 1000)

btn.addEventListener('click', ()=>{
	clearInterval(IntId)
	btn.textContent=body.style.background;
})




// 118. Understanding Callbacks - 
// callbacks are basically functions that you call inside a function

// normal way of doing this - normal function
function myNewF(){
	console.log('Function 1 is working')
}

function myNewF2(){
	console.log('Function 2 is working')
}

myNewF();


// using a callback - callback function
function myNewF3(callback){
	console.log('Function 1 is working')
}

function myNewF4(){
	console.log('Function 2 is working')
}

myNewF3(myNewF4);


// using an anon function inside the main function - that we want to call 
function myNewF5(){
	console.log('Function 1 is working')
}

myNewF4(
	function myNewF2(){ // making a function inside a function 
		console.log('Function 2 is working')
	}	
);


// using an arrow function inside the main function - that we want to call
function myNewF6(){
	console.log('Function 1 is working')
}

myNewF7( () => { // arrow function with its contents
	console.log('Function 2 is working')
	}	
);



// another example of a callback function - 
// callback here, in the third paramter below - will take a function, that function will also have the same parameters as the main function. We then define our callback with its values (which will be used in the second function - callback(num1, num2)) - so now, when the arguments are passed in the main function, the value of two parameters will be given - but the value of callback will be the function. And in that function - the new function, its values will be derived from the main function because of the callback. 

function getTwoNum(num1, num2, callback){
	console.log(num1, num2)
	callback(num1, num2)
}

// another function to add two nums - 
function addTwoNums(n1, n2){
	console.log(n1 + n2)
}

getTwoNum(40, 50, addTwoNums)


// another variation of the example above - where we put an if statement to check if the type of numbers match the conditrion, only then call the callback function, else dont - 

function getTwoNum(num1, num2, callback){
	if(typeof num1===number && typeof num2===number){
		callback(num1, num2)
	} else {
		console.log('wrong data type!!!')
	}
}

function addTwoNums(4, 4, (n1, n2) => { // here, we are passing the callback function in the arrow function itself. So, whenever callback is called, it will give the same result as the if-else statement above.  
	console.log(n1 + n2)
});


// using two callback functions - success and failure - 
function getTwoNum2(num1, num2, onSuccess, onFailure){
	if(typeof num1===number && typeof num2===number){
		onSuccess(num1, num2)
	} else {
		onFailure();
	}
}

function addTwoNu (n1, n2){
	console.log(n1+n2)
}

function onFail(){
	console.log('Wrong data type') // this will only work when onFailure() callback is called
	console.log('Data should be numbers only!')
}

getTwoNumsandAd(4, 4, addTwoNu, onFail)


// or we can condense the above code and functions into one function only - 

// getTwoNumsandAd(4, 4, (num1, num2)=>{ 
// 	console.log (num1 + num2)
// }, ()=>{ 
// 	console.log('Wrong data type') // this will only work when onFailure() callback is called
// 	console.log('Data should be numbers only!')
// })





// 119. Using callback in Async programming - 

// in the example below, instead of using the setTImeout() function two times for two different variables/elements, we are nesting one inside the other. And, while doing so, we see that the outer/main setTImeout() function's time can be set different than the inner/nested setTImeout() function. 

const head1=document.querySelector('.heading1')
const head2=document.querySelector('.heading2')
setTimeout(()=>{
	head1.textContent='heading 1' // will change the text content after 1 sec
	head1.style.color='red'

	setTimeout(()=>{
		head2.textContent='heading 2' // will change the text content after 1 sec
		head2.style.color='green'
	}, 1000)
}, 1000);



// here, we are using the setTimeout() function and nesting diff setTimeout() functions inside the main one to achieve different results on each of those elements at different times - 

// callback hell or pyramid of doom - demonstrated below - this is where we have callback inside callback inside callback - or nested callbacks. To solve this, we have promises - which we will see below - 

setTimeout(()=>{
	heading1.textContent='one'
	heading1.style.color='violet'

	setTimeout(()=>{
		heading2.textContent='two'
		heading2.style.color='purple'

		setTimeout(()=>{
			heading3.textContent='three'
			heading3.style.color='red'

			setTimeout(()=>{
				heading4.textContent='four'
				heading4.style.color='pink'

				setTimeout(()=>{
					heading5.textContent='five'
					heading5.style.color='green'

					setTimeout(()=>{
						heading6.textContent='six'
						heading6.style.color='blue'

						setTimeout(()=>{
							heading7.textContent='seven'
							heading7.style.color='brown'
						}, 1000)
					}, 3000)
				}, 2000)
			}, 1000)
		}, 2000)
	}, 2000)
}, 1000)



// same thing as the code above but using a function - 

function changeText(element, text, color, time, onSuccessCallback, onFailureCallback){
	setTimeout(()=>{
		if(element){
		element.textContent=text;
		element.style.color=color;

		if(onSuccessCallback){
			onSuccessCallback()
		}
		} else {
			if(onFailureCallback){
				onFailureCallback()
			}
		}
	}, time)
}

// function pyramid of doom - this is callback hell - we can use promises in here to avoid this - 

changeText(heading1, 'one', 'green', 1000, ()=>{
	changeText(heading2, 'two', 'violet', 2000, ()=>{
		changeText(heading3, 'three', 'purple', 2000, ()=>{
			changeText(heading4, 'four', 'red', 2000, ()=>{
				changeText(heading5, 'five', 'pink', 2000, ()=>{
					changeText(heading6, 'six', 'blue', 1000, ()=>{
						changeText(heading7, 'seven', 'black', 1000, ()=>{
						})
					}, ()=>{console.log('Element doesnt exist!')})
					})
				}, ()=>{console.log('Element doesnt exist!')})
				})
			}, ()=>{console.log('Element doesnt exist!')})
			})
		}, ()=>{console.log('Element doesnt exist!')})
		})
	}, ()=>{console.log('Element doesnt exist!')})
	})
}, ()=>{console.log('Element doesnt exist!')})
}, ()=>{console.log('Element doesnt exist!')})





// 120. Promises - 
// is called the values that we dont know yet, but there is a high chance that it will get those values later on. 
// its basically Future Value - a value that we dont know yet, but in the future we will get to know it later.
// till it gets to be execute, its value will be undefined and its status will be pending.
// once the promise is done, its status will be fulfilled and the job will be done with its values that we were trying to do. 
// if the promise cant be fulfilled, its status will be - rejected, value will be - a message

// promise is also an async programming. It is not done by the JS itself (atleast all of it), it is done by browser, similar to setTimeout(), not JS GEC. 
// note that, promise is also an object, when creating it, it is done by JS, but when consuming it, it is done by the browser - making it an async prog. 

// creating a promise - 
// it is created like Classes with the - new - keyword. Then, we write Promise, first word will be Caps like in Classes. Then, we give one parantheses (function-like), inside that parantheses, we give another parantheses - (callback function), inside that parantheses we give two parameters - resolve, reject. And lastly, we put arrow function that will define the callback function's body. 
// So, a promise looks like this - new Promise((resolve, reject)=>{function body}) - the callback function inside the Promise is called an - Executor function - which executes a promise/function/condition. 

// for a promise to have resolve() status, it must meeet the condiditon set upon it - here we are using an if statement. If the conditions meet, it will run the resolve() method, if the conditions dont match/meet, it will run the reject() method. 
// also, note that, these resolve adn reject() methods can take any data/variables - strings, objects or even arrays. 
// here, we are creating a promise - then, we'll have to consume it - 

const bucket = ['coffee', 'tea', 'chips', 'snacks', 'beer', 'wine']

const partyPromise=new Promise((resolve, reject)=>{
	if(bucket.includes('chips') && bucket.includes ('beer') && bucket.includes ('wine'))
	{
		resolve('Beer Party!!!')
	} else {
		reject('Party Cancelled!!!!!')
	}
})


// here, we are consuming the above promise - 
// the parameter here will store the value we passed above in the resolve and reject() methods. WHatever value they had passed or expected to display, when consuming the promises, they will be used as arguments for the callback function's parameters. 
// the inputs/arguements for these callback functions will be the values from resolve() or reject() methods above.

partyPromise.then((upcomingParty)=>{ // callback 1 - in case of resolve()
	console.log('there is an upcoming', upcomingParty)
}, 
(error)=>{ // callback 2 - in case of reject()
	console.log(error)
})


// using the above promise to return an object and error in case of resolve and reject() - 

const bucket1 = ['coffee', 'tea', 'chips', 'snacks', 'beer', 'wine']

const partyPromise1=new Promise((resolve, reject)=>{
	if(bucket1.includes('chips') && bucket1.includes ('beer') && bucket1.includes ('wine'))
	{
		resolve({value: 'Beer Party!!!'})
	} else {
		reject(new Error('Some items missing for the party!'))
	}
})

// consuming the promise - 
partyPromise1.then((upcomingParty)=>{ // callback 1 - in case of resolve()
	console.log('there is an upcoming', upcomingParty)
}, 
(error)=>{ // callback 2 - in case of reject()
	console.log(error)
})


// using only one callback method - for resolve, instead of rejecta() as well - 

partyPromise1.then((upcomingParty)=>{ // callback 1 - in case of resolve()
	console.log('there is an upcoming', upcomingParty)
}, 
// null // in case we wanted to not have reject's() value as well - the second callback method, so here, we are only caring about our resolev() method. 
).catch( // here, we are chaining catch method as well with .then() method. 
	(error)=>{
		console.log(error)
	})



// explanation of how promises work behind the scenes - 
// as per code, first, JS will print 'Script Starts' ac to line 1. 
// then, with line 2 it will see that there's an array of items, and it will keep it in memory. Once thats done, we had defined our Promise with a const, and in that promise, there's two values - Status and Values.
// Till that point, JS will take care of things - but when when we start to consume the promise, it will be sent to the browser. the promise object and the bworser will keep working async while the rest of the JS works as is. 
// Unlike setTimeout() which was stored in the callback queue before moving to teh call stack, the Promise's consuming task will done by the browser, then once done, and once we will use .then() method after promise's completion, the .then() method's task will move to the Microtask queue while the other code is still running. 
// The thing to note here is that Promise (resolve, reject, (catch, then) is added to the Microtask queue.

// Once the GEC is finished executing - all of it - then, from the Microtask queue, the .then() method will get to callstak and will start to run the Promise's side of thing and get the thing done. 



// using setTimeout and Promise together - 
// explaining the code below - 

// here, first, the console will run and print.
// then, the array with the values will be stored in the memory. 
// then, there is only one promise object which JS will curently store its const value in memory, not the Promise itself but the const it is assigned to. 
// then, we consume the Promise, and here, the JS will assign the Promise for consumption to the browser. 
// then, setTimeout() work is also assigned to the browser only. It will count the time of how long it has to wait before executing. Once done, it will be sent to the callback queue. 
// now, console will log the for loop and run through it - whatever it is. 
// then, the console will print the script ends - that ends the normal global code execution. 
// Now, browser still has two things - Promise - which will go to Microtask queue, callback function for setTimeout will go to callback queue. 
// Note that, if you have code waiting to execute in your queue - the one in the Mircotask queue will run first - why? Becuase its importance is bigger/more than the one at Callstack queue. So, the task queued at Microtask queue will go to the call stack and run it - which will then execute the Promise code - whether its resolved or rejected, depends on the code, but it will run now and get printed/executed.  
// in the end, the queued task from setTimeout() from callstack will be sent to call stack, and then it will run - print/execute its own thing. It will happen at last.

// this behavior of code running is same in all browsers. 


console.log('script starts...')
const bucket2 = ['coffee', 'tea', 'chips', 'snacks', 'beer', 'wine']

const partyPromise2=new Promise((resolve, reject)=>{
	if(bucket2.includes('chips') && bucket2.includes ('beer') && bucket2.includes ('wine'))
	{
		resolve({value: 'Beer Party!!!'})
	} else {
		reject(new Error('Some items missing for the party!'))
	}
})


// consuming the Promise - 

partyPromise1.then((upcomingParty)=>{ // callback 1 - in case of resolve()
	console.log('there is an upcoming', upcomingParty)
}).catch((error)=>{
	console.log(error)
})

setTimeout(()=>{
	console.log('hello from setTimeout.')
}, 0)

for (let i=0; i<=10; i++){
	console.log(Math.random(), i)
}

console.log('script ends here!!!!')





// 121. Functions returning Promise - 
// with a function, you can also return an entire Promise from it - that promise can do specific set of instructions - and when you return the function, the entire Promise - what it is meant to do ultimately - will return through that function. 
// note that, when you use .then() and .catch() methods for the Promise, you will have to do it after the function call for it to work - so it looks like this - functionCall().then().catch()

const bucket3 = ['coffee', 'tea', 'chips', 'snacks', 'beer', 'wine']
function beerParty(){
	return new Promise((resolve, reject)=>{
		if(bucket3.includes('chips') && bucket3.includes ('beer') && bucket3.includes ('wine'))
			{
				resolve({value: 'Beer Party!!!'})
			} else {
				reject(new Error('Some items missing for the party!'))
			}
	})
}

//function and Promise call - 
beerParty().then((upcomingParty)=>{ // callback 1 - in case of resolve()
	console.log('there is an upcoming', upcomingParty)
}).catch((error)=>{
	console.log(error)
})






// 122. Promise and setTimeout() - 
// suppose we want to reject or resolve our Promise after a set interval of time, then we use Promise with setTimeout() method - 

// here, we are creating a new function inside which we are creating our Promise. To resolve or reject our Promise, we are not writing it inside the callback function directly, instead, we are taking a variable inside it with the value = true, If the value is true, then it enters the setTimeout() function which is inside the Promise callback function. 
// this setTimeout() function will then inside of it we write resolve or reject using an  if statement/condfition. If value is true, then run resolve(), else run reject(). and since its a setTimeout() function, we are giving it a time of 2000ms or 2 sec. So, this reject/resolve -Promsie - willl run after 2 seconds. 
// then, we are calling our function, and running .then() and .catch() method with it. If if statement is run, .then() will run - which also takes a callback function, if else statement is run, .catch() will run - which also takes a callback function. 

function newPromiseNew(){
	return new Promise ((resolve, reject)=>{
		const value=true;
		setTimeout(()=>{
			if (value){
				resolve()
			}
			else{
				reject()
			}
		}, 2000)
	})
}

newPromiseNew()
	.then(() => {console.log('resolved')})
	.catch(() => {console.log('rejected')})





// 123. Promise & Revolve - Promise.resolve()
// note that, .then() method will return a Promise, Always. 
// So, by doing this, we can create a Promise chain. 

const myPromisedValue=Promise.resolve(5) // this Promise, when resolved will return a Promise of 5

myPromisedValue.then(value=>{ // now that our value is stored in a const, we can use .then() to write a code of what will happen next when the value is resolved.  
	console.log(value) 
})

Promise.resolve(5).then(value=>{ // this will do the same thing as above, but this is a longer way of writing it. The above code will also do the same thing, if resolved will return a value of 5.
	console.log(value) 
})



// Promise chaining 
// note that, .then() method will return a Promise, Always. 
// So, by doing this, we can create a Promise chain where after retuning a promise, you can make changes to it and return that smae promise again, and then again, as seen below. 


function myPromse(){ // the function returning promise 
	return new Promise((resolve, reject)=>{ // the main promise
		resolve('foo') // if resolved, return this vlaue
	})
}

myPromse().then(value=>{ // if promise returned, then, execute. Also, here, value is the value returned by the Promise - 'foo' 
	console.log(value) // printing value
	value += 'another foo added' // changing the vlaue
	return value // this value here is returning a Promise itself. It is working as similar to this code - return Promise.resolve(value)
}).then((value)=>{ // since we returned a Promise, we can chain .then() method again. 
	console.log(value) // another print value - updated
	value += 'another foo added using Promise chaining' // changing value
	return value // returning another Promsise - update 2
}).then((value)=>{ // another chaining - since .then() is retuurning Promise
	console.log(value) // finally printing the last value. Note that we can chain another .then() method with this if we decided to make further changes to value again.  
})





// 124. Using Promise where we use Pyramid of Doom (callback)- 
// here, we are defining a Promise, setting the resolve and reject callbacks, and setTimeout() function inside the Promise with a timer. 
// if the code goes to resolve(), it will run through all the code given below -  going through all the return resolve - which will return the Promise itself, and the .then() method callbacks, all of them. 
// however, if in case of error, it will go till the last successful callback, then it will directly run the .catch() method and exit the program entirely.


function changeTextUsingPromise(element, text, color, time){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			if(element){
			element.textContent=text;
			element.style.color=color;
			resolve()
			} else {
				reject('element not found')	
			}
		}, time)
	})
}

const returnedPromsie=changeTextUsingPromise(heading11, 'one', 'red', 1000)
returnedPromsie.then(()=>{
	return changeTextUsingPromise(heading22, 'two', 'purple', 1000)
}).then(()=>{
	return changeTextUsingPromise (heading33, 'three', 'green', 2000)
}).then(()=>{
	return changeTextUsingPromise (heading44, 'four', 'blue', 3000)
}).then(()=>{
	return changeTextUsingPromise (heading55, 'five', 'yellow', 1000)
}).then(()=>{
	return changeTextUsingPromise (heading66, 'six', 'violet', 2000)
}).then(()=>{
	return changeTextUsingPromise (heading677, 'seven', 'orange', 2000)
}).then(()=>{
	return changeTextUsingPromise (heading33, 'eight', 'pink', 1000)
}).then(()=>{
	return changeTextUsingPromise (heading33, 'nine', 'peach', 1000)
}).then(()=>{
	return changeTextUsingPromise (heading33, 'ten', 'mustard', 1000)
}).catch((error)=>{ // this will run in case of any error and then exit the program
	alert(error) 
})





// 125. AJAX - asynchronous JS and XML
// it is basically a set of 'web development' techniques used by using many web technologies on the 'client-side' to create asynhronous web apps. 
// with AJAX, web apps can send and retrieve data from a server asynchronously (in the background) without interfering with the display adn behavior of the existing page. 

// browser is the client and server is the backend. the communication btw client and server is HTTP. Client uses JS, backend uses any backend-suitable language, they communicate through HTTP request/API request. 

// we dont use data in XML format anymore, we use JSON now. 

// we have 3 most comon ways to create and send request to server - 
	// 1. xmlHTTPRequest (old way of doing)
	// 2. fetch API (new way of doing)
	// 3. axios (this is the third party library)


// using XHR - XML HTTP REQUEST
// here, on xhr, you can use multiple methods because we have created a new XMLHTTPRequest.
// basically, XHR is an object where you can call methods.

// JSON - JS Object Notation
// JS object has key:value pair, but in JSON, we have doubel-quotes on all the "keys" regardless of their type.
// here, we want to do an XHR HTTP request on the server, which we can make on our own, or we can use pre-build API, that we can use on our frontend.

// here, for getting faks APIs, we will use this website - https://jsonplaceholder.typicode.com/
// HTTP methods - GET (for reading), POST (to create data), PUT (to change existing data to new data), PATCH (to change pre-existing data a little), DELETE (to delete data). These are HTTP methods that we can use on our APIs. 

// here, https://jsonplaceholder.typicode.com/ - this is the path. IT means that till here, the website will be common - after the slash (/), we can add different methods to perform diff tasks. Like here, we are using POST to create data - https://jsonplaceholder.typicode.com/posts

// you can see what you are getting/ or what action you are performing on the website by going to - Inspect -> Network -> reload the page/perform that action -> Header - here, you'll be able to see all the data from the website - its path, request, response, data received, generated, path, URL, response code, etc. and more.
// the data you get from the website is in JSON format. 
// note that, browser by default performs the GET request wehen you visit a website. 
// browser sends requst to URL, the URL sends resposne with the data back to the browser.
// you also get Response Headers - which contains multiple imp data about the website, the data you received etc. 

// JSON - JSON is almost similar to JS objects, but there are some differences. 
// In JS obejcts, there are key:value pairs, and you dont put single or doubel quotes on htem. But in JSON, you put quotes on both the values - the key: value, only if they are strings, if the values are numbers, you dont put the quotes. But in keys, you definately put quotes. And you'll always get JSON values/files with quotes, seperated by comma. 
// for eg. [{}, {}, {}]
// you can use use strings, ints, NULLS, but not methods - in JSON, and other than ints, the key and values need to be in inverted commas - "".
// also, by default, browser performs a GET request when you are working with a website. 

const apiUrl= 'https://jsonplaceholder.typicode.com/posts' // this is our API link, here we will place our requests and we store this link in a variable. We can then use this variable to palce GET, POST, etc. request on the URL. 
const xhr= new XMLHttpRequest()
//console.log(xhr) // xhr http object - but wher will xhr request in the code above - we will use an API here.
 

//step 1 - open method  - it will happen async by the browser.
// open() method takes two paras - the method, and the URL. It will then open and work with the URL using the method mentioned. Also, it will give readyState response codes - from 0 (unopened), 1 (open) to code 4(done). You will get your response only when the readyState is 4.  
// note that, if the URL is wrong, you will get the status code - 404, and you'll have to know about these status codes - some of them atleast - 
	// 1xx- informational response - request received, continuing process
	// 2xx- successful - request received successfully, understood and accepted
	// 3xx- redirection - further action needs to be taken in order to complete request
	// 4xx- client error - request contains bad syntax or cannot be fulfilled
	// 5xx- server error - server failed to fulfil an apparantly valid request

console.log(xhr.readyState) // code 0
xhr.open('GET', apiUrl)
console.log(xhr.readyState) // code 1
xhr.onreadystatechange=function(){
	console.log(xhr.readyState) // code 2/3
	if (xhr.readyState === 4){
		// console.log(xhr.response) //you'll get response when readyState is 4. response will be in JSON
		// console.log(typeof xhr) // response will be in string, but we have to convert/parse it into JS object
		const response = xhr.response
		const data = JSON.parse(response)
		console.log(data) // now, our JSON response is converted into object
	}
}

// this onload function will only work when the readyState is 4 - response receiving
// also, you dont have to write the above function, either use theh above , or this below onload function.
xhr.onload = function(){
	const response = xhr.response
	const data = JSON.parse(response)
}
xhr.send() // will send the request



// XHR error handling - 
const urlN='https://jsonplaceholder.typicode.com/posts'

const xhr=new XMLHttpRequest()

xhr.open('GET', urlN)
xhr.onload = () =>{
	if (xhr.status >= 200 && xhr.status < 300){ // handling error codes using conditions
		const data = JSON.parse(xhr.response)
		console.log(data)
	}
	else{
		console.log('something went wrong!!!')
	}
}

xhr.onerror = () =>{ // this funciton will only run in case of network errors. 
	console.log('network error occured')
}

xhr.send()




// sending two API request for the same website - one after the other
const urlNe='https://jsonplaceholder.typicode.com/posts'

const xhr=new XMLHttpRequest()

xhr.open('GET', urlN)
xhr.onload = () =>{
	if (xhr.status >= 200 && xhr.status < 300){ // handling error codes using conditions
		const data = JSON.parse(xhr.response)
		const id = data[3].id // will give us the data of the object with id 3

		const xhr2 = new XMLHttpRequest()
		const url2 = `${urlNe}/${id}`
		xhr2.open('GET', url2)

		xhr2.onload=()=>{
			const data2=JSON.parse(xhr2.response)
			console.log(data2)
		}

		xhr.send()

	}
	else{
		console.log('something went wrong!!!')
	}
}

xhr.onerror = () =>{ // this funciton will only run in case of network errors. 
	console.log('network error occured')
}

xhr.send()




// 126. Using Promises instead of callback for our XML request/response - 
const urlPr = 'https://jsonplaceholder.typicode.com/posts'

function sendRequest(){
	return new Promise(function(resolve, reject){
		const xhr = new XMLHttpRequest();
		xhr.open(method, url)
		xhr.onload = function(){
			if (xhr.status >= 200 && xhr.status <300){
				resolve(xhr.response)
			}
			else{
				reject(new Error('something went wrong!!!'))
			}
		}

			xhr.onerror=function(){
				reject(new Error('something else went wrong!!'))
			}
			  
		xhr.send()
	})
}

sendRequest('GET', urlPr)// this function call will return a promise
	.then(response =>{
		const data = JSON.parse(response)
		//console.log(data)
		return data
	})
	.then(data=>{ // chaining
		console.log(data[3].id) //getting one singular data from id from the returned data
	})
	.then(id=>{
		const url = `${urlNe}/${id}`
		return sendRequest('GET', url)
	})
	.then(newResponse =>{
		const newData = JSON.parse(newResponse)
		console.log(newData)
	})
	.catch(error =>{
		console.log(error)
	})





// 127. Fetch - 
// fetch basically does all the above Promise thing all just in a single line. 
// if you pass a URL or a variable with a URL into fetch(), it will automatically send a request - getRequest(), to the given URL.
// fetch is an inbuilt function in JS.
//it will return a Promise, if resolved, which you can then use .then() method on it. 
// in .then() you can put response on it, this response has a method called json() which will also return a Promise. 
// fetch will only get rejected when you have a network related issues/errors, other than that, it will always run and fetch you some response. It will also not get rejected in case of 404 error. in case of 404, it will still give you a response, but the response status will be 'false' and status code will be 404.  

const urlFet = 'https://jsonplaceholder.typicode.com/posts'

fetch(urlFet) // with the url - if resolved will give us a Promise
.then(response =>{ // we can then chain .then() method to that promise 
	if (response.ok){
		return response.json() // and on that response, we get json() method which will have the json data we are looking for. This is a promise itself, which can be chained.
	} else { // if this block runs, it will also run our catch() block below and will print this new Error () along with catch()'s own block's code. 
		throw new Error ('something went wrong!!!')
	}
})
.then(data =>{ // we then chain another .then() method on the previous .then() method (which always returns a Promise on its own). Here, data is the returned value from the previous Promise. 
	console.log(data) // and now we print that returned data, and we will get our desired result - the Api response from the url above. 
})
.catch(error =>{
	console.log(error)
})




// 128. POST method -
// post is used to create data/resource and save it to the server.
// JSON.stringigy () will convert the JS object to JSON so that it can be stored to the server in JSON format.
// the data itself will be written inside body of the code - 
// when using POST, fetch() will take two paras - url, and callback method which will have all the data that you want to post - along with the POST method. JSON.stringiggy({...}) method will have the data to be uploaded to server.
// headers - will have the Content type and charset. 

// other than POST, we can also use PATCH, DELETE and stuff using the same below code-style - we just have to change the methods and some of the data. 

const urlFetPo = 'https://jsonplaceholder.typicode.com/posts'

fetch(urlFetPo, {
	method: 'POST',
	body: JSON.stringify({
		title: 'foo',
		body:'bar',
		userId:1,
	}),
	headers:{
		'Content-type': 'application/json; charset=UTF-8' // content type is imp for POST
	},
})
.then(response =>{
	if(response.ok){
		return response.json()
	}
	else{
		// throw new Error ('something went wrong')
	}
})
.then(data =>{ // 
	console.log(data)
})
.catch(error =>{ // will only run in case of network related issues/errors
	console.log(error)
})





// 129. async await - 
// async functions (like the one given below) when run and called, will always give us Promise.  
// also, async functions are basically taken care by the browser. So, it will keep on running in the background while the other code is running. 
// await will wait till a Promise is resolved. Once resolved, it will return a value, which then we can store in a variable to be used later. 
// await on the other hand, will wait for that specific item to finish before it gets to the next line of code. it too will happen in the background.

const newUrl = 'https://jsonplaceholder.typicode.com/posts'

//const asyncFunc =  async ()=>{} - in case of arrow function we write async like this. 

async function getPosts(){
	const newResponse = await fetch(newUrl)
	if (!response.ok){
		throw new Error ('somthing went wrong!!!')
	}

	const newData = await newResponse.json()
	console.log(newResponse)
	console.log(newData)

	return newData // it is returning a Promise, which is returning the above data
}

const returnedData = getPosts()
.then(myData =>{
	console.log(myData)
})
.catch(error=>{
	console.log(error)
})


// console.log(returnedData) // will return a Promise

fetch(newUrl)
.then(response => {
	return response.json()
})
.then(data=>{
	console.log(data)
})




// 130. Modules in JS ES6 - 
// basically, with it, you can split your code into different files - like there's a large functiton that we want to keep in one seperate file. 
// we can then import those files in the file we are working in - but for you to import, you'll have to export the file you want to work with. 
// but also, for any module to import, you'll have to use - type = 'module' - in the JS linking <script> tag in your main html file. Also note that, when you use type = 'module', you dont have to write defer because it will be set and used automatically.

// Named import/exports - can be used with curly braces if named when importing, when exporting, you need to specify which variable you are exporting. 
// default import/exports - which are used one in a file when exporting and can be used without curly braces when importing


// exporting 
// export const firstName1 = 'john' - one way to do it, by placing the export keyword before the variable you are working with.  
// export default - it can be used to export the variables from a file without mentioning which variable we want to export or putting them inside {} braces. 
// also note that, you can use only one - export default - statement in a file. 
// we can also export classes, variables, constants, functions, arrays, objects etc. the same way.

// the export default variable - can be written at the end of the file too - like REACT, and it will work fine. 
// and when importing, we dont have to write the exact name of the variable we exported, we can just use any name/variable name, we will get the same result of what the exported file exported. 

export const firstName1 = 'john'
export {firstName1 as fName} // another way to do it - at the end of the file, just place the variable you want to be exported
// we can also use pseudonym for any long variable name - like - firstName as fname, but you should use in the imported file as the new name
export default class Person{
	constructor(fName, lName, age){
		this.fName = fName
		this.lName = lName
		this.age = age
	}

	info(){
		console.log(this.fName, this.lName, this.age)
	}
} 

// importing 
// when importing, we state the import keyword first, then inside {}, we state the variable we want to import, then from keyword, and then '...file path' - the path of the file from where you want to import the variables. 
//once the importing is done, you can just use the imported variables normally.  
// default exports can have any name, it doesnt matter

import {firstname} from './utils.fname.js'
//import {Person} from './utils.Person.js' // importing Person class normally
import Person, {firstName1} from './utils.Person.js' // importing Person using export default. Also, you can use named imports (which you specified using export const ...=... ) in the same line if they belong to the same file.

console.log(firstname)

const person = new Person ('John', 'Doe', 22) // using imported class
Person.info()
console.log(person)


// -------------------xxxxxxxxxxxx--------------------