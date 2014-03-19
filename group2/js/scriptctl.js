// JavaScript Document
//James McGorty
//3/18/14
//group2 check the login

var username = prompt("please enter your username" ,"");
var password = prompt("please enter your password" ,"");

var userName = "fullsailuser";
var passWord = "fullsail";


// Check the login credentials
if (username == userName && password == passWord)
	document.write("Welcome " + userName);
else
{
	if (username != userName)
		console.log("User not found. Try again");
	else if (username == userName && password != passWord)
		alert("Password does not match our records");
}