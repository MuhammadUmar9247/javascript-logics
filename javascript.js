                                     //  User Input & conditional Statement


 //  question number 01

// var city = prompt("Which City To Belong!");

// if(city === "karachi"){
//     console.log("Wellcome To City of light");
// }else{
//     console.log("If you are belong to karachi then i will entertain!");
// }

 //  question number 02

//  var gender = prompt("What is your gender");

//  if(gender === "Male"){
//     console.log("Good Morning Sir!")
//  }else if(gender === "Female"){
//     console.log("Good Morning Maam'")
//  }


 //  question number 03

//  var color = prompt("Enter signal color (red, yellow, green):");

// color = color.toLowerCase(); // fix capital letter problem

// if (color === "red") {
//     console.log("Must Stop");
// }
// else if (color === "yellow") {
//     console.log("Ready to move");
// }
// else if (color === "green") {
//     console.log("Move now");
// }
// else {
//     console.log("Invalid color");
// }


 //  question number 04


// var fuel = prompt("Enter remaining fuel in litres:");

// if (fuel < 0.25) {
//     console.log("Please refill the fuel in your car");
// }


 //  question number 05

//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// if("car" < "cat"){
// alert("car is smaller than cat");
// }

 //  question number 06

//  var totalMarks = prompt("Enter total marks:");
// var s1 = prompt("Enter subject 1 marks:");
// var s2 = prompt("Enter subject 2 marks:");
// var s3 = prompt("Enter subject 3 marks:");

// totalMarks = Number(totalMarks);
// s1 = Number(s1);
// s2 = Number(s2);
// s3 = Number(s3);

// var obtained = s1 + s2 + s3;
// var percentage = (obtained / totalMarks) * 100;

// var grade;
// var remarks;

// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// } else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentage >= 60) {
//     grade = "B";
//     remarks = "Improve";
// } else {
//     grade = "Fail";
//     remarks = "Sorry";
// }

// console.log("Total Marks: " + totalMarks);
// console.log("Marks Obtained: " + obtained);
// console.log("Percentage: " + percentage + "%");
// console.log("Grade: " + grade);
// console.log("Remarks: " + remarks);


 //  question number 07

//  var secret = 5;     

// var user = prompt("Guess a number 1 to 10");

// if (user == secret) {
//     alert("Bingo! Correct answer");
// }
// else if (user == secret - 1) {
//     alert("Close enough to the correct answer");
// }


 //  question number 08

//  var num = prompt("Enter a number:");
// num = Number(num);

// if (num % 3 === 0) {
//     alert(num + " is divisible by 3");
// } else {
//     alert(num + " is not divisible by 3");
// }


//  //  question number 09

//  var num = prompt("Enter a number:");
// num = Number(num);

// if (num % 2 === 0) {
//     alert(num + " is even");
// } else {
//     alert(num + " is odd");
// }


//  //  question number 10

//  var temp = prompt("Enter temperature:");
// temp = Number(temp);

// if (temp > 40) {
//     alert("It is too hot outside.");
// } else if (temp > 30) {
//     alert("The weather today is Normal.");
// } else if (temp > 20) {
//     alert("Today's weather is cool.");
// } else if (temp > 10) {
//     alert("OMG! Today's weather is so cool.");
// } else {
//     alert("It's really cold today!");
// }


//  //  question number 11

//  var num1 = prompt("Enter first number:");
// num1 = Number(num1);

// var num2 = prompt("Enter second number:");
// num2 = Number(num2);

// var op = prompt("Enter operation (+, -, *, /, %)");

// if (op === "+") {
//     alert("Result: " + (num1 + num2));
// } else if (op === "-") {
//     alert("Result: " + (num1 - num2));
// } else if (op === "*") {
//     alert("Result: " + (num1 * num2));
// } else if (op === "/") {
//     alert("Result: " + (num1 / num2));
// } else if (op === "%") {
//     alert("Result: " + (num1 % num2));
// } else {
//     alert("Invalid operation");
// }



                                     //  IF.. ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS



 //  //  question number 1

//  var char = prompt("Enter a character:");

// // Check numbers manually
// if (char == '0' || char == '1' || char == '2' || char == '3' || char == '4' || char == '5' || char == '6' || char == '7' || char == '8' || char == '9') {
//     alert("It is a number");
// } 
// // Check uppercase letters manually
// else if (char == 'A' || char == 'B' || char == 'C' || char == 'D' || char == 'E' || char == 'F' || char == 'G' || char == 'H' || char == 'I' || char == 'J' || char == 'K' || char == 'L' || char == 'M' || char == 'N' || char == 'O' || char == 'P' || char == 'Q' || char == 'R' || char == 'S' || char == 'T' || char == 'U' || char == 'V' || char == 'W' || char == 'X' || char == 'Y' || char == 'Z') {
//     alert("It is an uppercase letter");
// } 
// // Check lowercase letters manually
// else if (char == 'a' || char == 'b' || char == 'c' || char == 'd' || char == 'e' || char == 'f' || char == 'g' || char == 'h' || char == 'i' || char == 'j' || char == 'k' || char == 'l' || char == 'm' || char == 'n' || char == 'o' || char == 'p' || char == 'q' || char == 'r' || char == 's' || char == 't' || char == 'u' || char == 'v' || char == 'w' || char == 'x' || char == 'y' || char == 'z') {
//     alert("It is a lowercase letter");
// } 
// else {
//     alert("It is a special character");
// }


//   //  //  question number 2

//   var num1 = prompt("Enter first number:");
// var num2 = prompt("Enter second number:");

// if (num1 > num2) {
//     alert(num1 + " is larger");
// } 
// else if (num2 > num1) {
//     alert(num2 + " is larger");
// } 
// else {
//     alert("Both numbers are equal");
// }


//    //  //  question number 3

//    var num = prompt("Enter a number:");

// if (num > 0) {
//     alert("Number is positive");
// } 
// else if (num < 0) {
//     alert("Number is negative");
// } 
// else {
//     alert("Number is zero");
// }


//     //  //  question number 4

//     var char = prompt("Enter a character:");

// // Convert to lowercase for easy comparison
// char = char.toLowerCase();

// if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
//     alert("It is a vowel");
// } 
// else {
//     alert("It is not a vowel");
// }


//      //  //  question number 5

//      var correctPassword = "1234";
// var userPassword = prompt("Enter your password:");

// if (userPassword == "") {
//     alert("Please enter your password");
// } 
// else if (userPassword == correctPassword) {
//     alert("Correct! Password matches");
// } 
// else {
//     alert("Incorrect password");
// }


//       //  //  question number 6

//       var hour = 13;
// var greeting;

// if (hour < 18) {
//     greeting = "Good day";
// } 
// else {
//     greeting = "Good evening";
// }

// alert(greeting);


                                    