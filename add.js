////////////////////////////////
/* JS Arrays */
////////////////////////////////

/* var colors = ["Red", "Blue", "Yellow"];  // bu kullanim tarzi tercih edilir.

console.log(colors); */

//----------------------------------------------------------------


/* Spaces and line breaks are not important. A declaration can span multiple lines. */

/* var colors = [
    "Red",
    "Blue",
    "Yellow"
]; */ 

//----------------------------------------------------------------

/* You can also generate an array and assigns values to it in the following example: */

/* var colors = new Array("Red", "Blue", "Yellow"); */

//----------------------------------------------------------------

/* var colors = ["Red", "Blue", "Yellow"];
var name1 = colors[0];
console.log(name1); */

//----------------------------------------------------------------

/* Change an element of the array */

/* var colors = ["Red", "Blue", "Yellow"];
colors[0] ="Green";
console.log(colors); */

//----------------------------------------------------------------

/* var num = new Array(1,2,3);
document.write(num[2]); */

//****************************************************************

/* Arrays are Objects */

/* var name = ["John", "James", 24]; */

/* Objects are using names to control their "members". */

/* var name = {firstName:"John", lastName:"James", age:24}; */

//****************************************************************

/* length property */

/* var name2 = ["John" , "James" , "Oliver" , "Aaron" , "Scott"];
var x = name2.length;          // the length of name is 5

console.log (x); */

//----------------------------------------------------------------

/* var name3 = [];
var x = name3.length;
console.log (x); */ // 0

//****************************************************************

/* concat() method */

/* The concat() method is used to combine two or more arrays. */

/* This method does not modify the current arrays but returns a new array that contains the elements of the joined arrays. */

/* var dogs = ["Bulldog" , "Beagle" , "Rottweiler"];
var cats = ["Ragdoll" , "Sphynx" , "Birman"];
var pets = dogs.concat(cats); 
console.log (pets);
var birds = ["Parrot" , "Owl" , "Finch"];
var pets2 = dogs.concat(cats, birds); 
console.log(pets2); */

//----------------------------------------------------------------

/* var x = ["John", "James"];
var y = ["Aaron", "Oliver"];
var z = ["Scott"]; 
var names = x.concat(y).concat(z);
document.write(names); */

//****************************************************************

/* sort() method */

/* The sort() method sorts arrays alphabetically. */

/* var arr = ["John" , "James" , "Oliver" , "Aaron" , "Scott"];

console.log(arr.sort()); */

//----------------------------------------------------------------

/* var num = ["23","198","34","3","9"];
console.log (num.sort()); */

//****************************************************************

/* push() and pop() Methods */

/* The push() method adds a new element to the end of an array. */

/* var names = ["John", "James", "Oliver", "Aaron", "Scott"]  
names.push("Guile");             // Adds new element to names

console.log (names); */

//----------------------------------------------------------------

/* The pop() method allows you to remove the last element from an array. */

/* var names = ["John", "James", "Oliver", "Aaron", "Scott", "Guile"];  
names.pop();             // Removes last element from names

console.log (names); */

//----------------------------------------------------------------

/* var x = ["John", "Oliver", "Aaron"];
x.push("James");
console.log (x); */

//****************************************************************

/* shift() and unshift() Methods */

/* The shift() method removes the "first element" from an array and returns the string that removed element. */

/* var colors = ["Red", "Yellow", "Green"];
var shifted=colors.shift();
console.log(shifted);   // Red
console.log(colors);    // ["Yellow", "Green"] */

//----------------------------------------------------------------

/* The unshift() method adds a new element to the beginning of an array and returns the new array length. */

/* var colors = ["Red", "Yellow", "Green"];
var x = colors.unshift("Blue");
console.log(colors);      //["Blue", "Red", "Yellow", "Green"]
console.log(x);      //4 */

//----------------------------------------------------------------

/* var colors = ["Red", "Yellow", "Green"];
colors.shift();
document.write(colors); */

//****************************************************************

/* splice() Method */

/* The splice() method is used to add new elements to an array and delete elements from an array. */

/* The first parameter (1) determines the position of the first element to delete and starting position to insert.

The second parameter (2) determines the number of elements to delete.

The remaining parameters ("White", "Pink") determines the new elements to be added. */

/* var colors=["Red" ,"Yellow", "Green", "Blue"];
colors.splice(1, 2, "White", "Pink");

console.log(colors);   // ["Red", "White", "Pink", "Blue"] */

//----------------------------------------------------------------

/* var colors=["Red" ,"Yellow", "Green", "Blue"];
colors.splice(1, 0, "White", "Pink");
console.log(colors); */

//****************************************************************

/* slice() Method */

/* The slice() method slices a piece of an array into a new array. - The original array will not be modified. */

/* The first parameter (1) determines the starting position of the new array. - The second parameter (3) determines the ending //(not included end)// position of the new array. */

/* var colors = ["Red" ,"Yellow", "Green", "Blue"];
var newColors = colors.slice(1, 3);

console.log(colors);          //["Red" ,"Yellow", "Green", "Blue"]
console.log(newColors);   // ["Yellow", "Green"] */

//----------------------------------------------------------------

/* var colors = ["Red" ,"Yellow", "Green", "Blue"];
var newColors = colors.slice(2, 4);
console.log(colors); */

//****************************************************************

/* indexOf() Method */

/* The indexOf() method returns the position of a specified element in an array at the first occurrence */

/* This method returns -1 if the element is not found. */

/* The first parameter ("Green") determines the item to search for.

The second parameter (3) determines the starting position of the search. */

//----------------------------------------------------------------

/* var colors = ["Red" ,"Yellow", "Green", "Blue", "Pink", "Green"];
var x = colors.indexOf("Green", 3);

console.log(x); */

//****************************************************************

/* lastIndexOf() Method */

/* The lastIndexOf() method returns the last index of a specified element in an array and returns -1 if the element is not found. */

/* In this method, the search begins at the started position, or at the end if no starting position is specified, and the search ends at the beginning of the array. */

/* var colors = ["Red" ,"Yellow", "Green", "Blue", "Pink", "Green"];
var x = colors.lastIndexOf("Green", 4);

console.log(x); */

//----------------------------------------------------------------

/* var colors = ["Red" ,"Yellow", "Green", "Blue", "Pink", "Green","Black"];
var x = colors.lastIndexOf("Green", 1);
console.log(x); */

//****************************************************************

/* var x = ["9","25","111","John","James","Aaron"];
console.log (x.sort()); */

//----------------------------------------------------------------

/* var colors = ["Red", "Yellow", "Green"];
colors.push("Red");
colors.shift();
document.write(colors); */

//----------------------------------------------------------------

/* var colors = ["Red", "Green", "Yellow", "Green" , "Blue", "Green", "Pink", "Green", "Black", "Green"];
var x = colors.lastIndexOf("Green", 8);
console.log(x); */
