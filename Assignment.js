//Write a program to print ‘hello world’
//1.In Web Browser Developer tool console.
     
console.log('Hello world');

//2.	In HTML file inside script tag.

  <html >
<head></head>
<body>
   <script>
   console.log('Hello world');
   </script>
</body>
</html>  

//3.Include external JS file in a HTML file using script file.
<html >
<head></head>
<body>
   <script src="index.js">
   </script>
</body>
</html>

//index.js

console.log('Hello world');

//Variables, Data-types and operators
//1.	Declare a variable and test variable name rules and log the variable value.

//Always variable must be letter or underscore(_)
var _= 'hello world';
console.log(_);

var a = 'hello world';
console.log(a);

//And case sensitive
 var Name= 'hello world';
console.log(Name);

var Js= 'hello world';
console.log(Js);

//2.	Comment Javascript code (single and multi-line comment).

multiline
/*var name = 'hello world';
console.log(name);*/

singleline
//var name= 'hello world';
console.log(name);

//3.	Store values using assignment operator.
   //Create to two variables ‘a’ and ‘b’
   //Assign variable a with value 5
   //Assign the value of a to b

var a;
var b;

a = 5;
b = a;
console.log(b);

// 4.Add two numbers using plus operator.

var a=15;
var b=20;
var c;
c = a+b;
console.log(c);

console.log(10+25);

// 5.Subtract One number from another

  var sub = 30-15;
  console.log(sub);

//6.Multiply two numbers

 var mul =10*15;
console.log(mul);

console.log(10*15);

//7.Divide one number by other
 
  var div =30/5;
  console.log(div);

//8.	Increment a number using both pre and post increment.

//pre
var a = 10;
++a;
console.log(a);
//output = 11

//post
var b = 10;
b++;
console.log(b);
//output = 10

//9.	What will be the output of the following program.

var i = 4;
var j = 21;
var k = ++i * 7 +2 - j--;
console.log(k)
//output = 16

//10.	Write a program to get remainder of 17 divided by 3.

var a = 17;
var b = 3;
var remainder;
remainder = 17%3;
console.log(remainder);
//output = 2

//11.	Declare a string variable and log the type of of variable.

var name = 'bharath'
console.log(typeof name);
// output= "string"

//12.	Print a string “ Alan said, “Peter is learning Javascript” ”(ignore first and last quote) use escape character.



//13.Concat two strings using plus operator.

var a = 'Hello';
var b = 'World';
console.log(a+b);
// output = "Hello World"

//14.Concat two strings using plus equal (+=) operator.

 var a = 'Hello';
 var b = 'World'
 a += b;
console.log(a);
// output = "Hello World"


//15.	Append a number variable to string

// 16.Store multiples values in one variable using JS array.

var a = [10,'bharath',true];

console.log(a);
//output [10,"bharath",true]

// 17.Verify a variable is an array using isArray() method.

var arr = [1,2,3];
console.log(Array.isArray(arr));
//output true

// 18.Find the length of an array

var arr = [1,2,3,4,5,6];
console.log(arr.length);
// output 6

// 19.Create an array with five elements and access the 3rd element using indexes.


// 20.Create an array with 10 elements and then update the 5th and 6th position with new values using index.



// 21.Add a element to an existing array using push() method.

var arr = [1,2,3];
arr.push(4)
console.log(arr);
//output  [1,2,3,4]
