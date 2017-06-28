var fname = prompt("Enter your first name:");
var lname = prompt("Enter your last name:");
var age = prompt("Enter your age:");
document.getElementById("name").innerHTML = "Your full name is "+fname + " " + lname;
document.getElementById("age").innerHTML = "You are "+ age+" years old!";
console.log("Your full name is " + fname + " " + lname);
console.log("You are "+ age+" years old!");