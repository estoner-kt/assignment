
//        2.	Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.
//15 				// numeric literal 
//"My first assigment" 			// string literal 
//false 				// Boolean literal 
//null 				// literal null value 

//3.	Give me two examples of complex/variable expressions.

//var x; 
//var aSecondExpression = Math.PI * radius * radius;


//4.	Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation to accomplish this task.
//var firstName; 
//var lastName; 
//var strAdress; 
//var zipCode; 
//var yourAge; 
//var refferalSource; 
//var mayWeContactYou;



//5.	Take the 9 variables that you created above and demonstrate 3 methods for declaring and assigning values to those variables.
//var firstName = "Kate"; 
//var lastName = "Stoner"; 
//var strAdress = "San Diego"; 
//var zipCode = "92111"; 
//var yourAge = "26"; 
//var refferalSource = "what is that"; 
//var mayWeContactYou "please no";

//6.	Create 3 variables. For the first variable, add a number and a string and use console.log to display the coerced result. For the second variable, add a Boolean and a string and display the coerced result. For the third variable, add a number and a Boolean and display the coerced result. 


//var x = "16"; 
//var y = "10"; 
//var fistName = "Kate"; 
//
//window.console.log("5"+x);
//window.console.log("false"+y);
//window.console.log("2"+true);


//7.	Demonstrate your knowledge of hoisting. Write a program that returns undefined within the console window because of hoisting.
//var x;
//x = "10"
//window.console.log(x);


//8.	Is the following string literal valid? If not, how would you fix it?

// NOT CORRECT, ADD \\  and changed singe quotes into double. 


//var someString = "Who once said, \"Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.\"";
//console.log(someString);

// 9.	Create a variable that produces a null value in the console window. Also, create a variable that produces an undefined value in the console window.
//
//var x = "null";
//var y ;
//
//window.console.log(x);  
//window.console.log(y);

//10.	Use the typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.

//window.console.log(typeof "kate")  ;    
//window.console.log (typeof 10);
//window.console.log (typeof false);
//window.console.log (typeof [10,20,30,40]) ;
//window.console.log (typeof myname);

//11.	Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows: 
//
//Hello Zak Ruvalcaba, welcome to the JavaScript class!


//var x = "Hello Kate Stoner"; 
//var y = "welcome to the Javascript class"; 
//window.alert(x +", " +y);


//12.	Declare a variable called name and set it equal to your name. Then, substitute your name in the previous alert string with the variable instead.

//var name = "Kate"; 
//var y = "welcome to the Javascript class"; 
//window.alert("Hello " +  name + ", " + y);

//13.	Declare a variable called course and set it equal to “JavaScript”. Then, rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.

//var course = "JavaScript"; 
//var name = "Kate";
//var hello = "Hello";
//var welcome = "welcome to the";
//
//window.alert(hello + " " + name + ", " + welcome +course);


//14.	Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:
//
//Hello Zak Ruvalcaba.
//Welcome to the JavaScript class!
//
//var course = "JavaScript"; 
//var name = "Kate";
//var hello = "Hello";
//var welcome = "Welcome to the";

//window.alert("Hello Kate\nWlcome");


//15.	Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable. 

//var name = prompt("What is your name");


//16.	Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.

//var course = prompt("What class are you taking?");


//17.	Assign the value 10 to x on a new line. Assign the value 20 to y on a new line. Display the sum of those two numbers in the console window. 

//var x = 10;
//var y = 20;
//console.log(x+y);
//


//18.	Declare a variable called x and assign it a value of 20. Next, add and assign 20 to that variable and display the result in the console window. The result should be 40.

//var x = 20; 
//
//console.log(x+=x);


//19.	Declare a variable called x and assign it a value of 20. Next, multiply and assign 5 to that variable and display the result in the console window. The result should be 100.

//var x = 20; 
//console.log(x*=5);


//20.	Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3. Next, divide and assign 1 to that variable and display the result in the console window. The result should be 2. If you got 6.66 try again.

//var x = 20/3; 
//console.log(x/=1);

//
//21.	Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.

//var world = 10;
//var kate = 100500;
//
//console.log(world<kate);


//22.	Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.


//var summer = 100;
//var winter = 60;
//console.log(summer == winter);

//23.	Use the new operator to create a new Object called “widget”. Within the console window, use the typeof operator to display the type of variable widget is.

//
//var x = ["widget"]; 
//console.log(typeof x);

//24.	Using the instanceof operator, write an application that returns true within the console window if the widget variable is an instance of an object.

//var x = "Kate";
//console.log(x instanceof String);



//25.	Without modifying the variable declaration and assignment, rewrite the previous application so that it returns false.

//var x = "Kate";
//console.log(x instanceof String);

