//James McGorty
//3/18/14
//group3 movie ticket price

var age = prompt("please enter your age" ,"");
var movieTime = prompt("please enter the time of your movie" ,"");

var seniorAge = 55;
var kidAge = 10;
var movTimeThree = 3;
var movTimeFive = 5;

//if your age is 55 or older or 10 and younger you get the dicount price if not you get the actualy price and if your movie starts between 3 and 5 then  you get the discount price if not you dont

var discount = false;
if (age <= kidAge || age >= seniorAge)
	discount = true;
else if (movieTime >= movTimeThree && movieTime <= movTimeFive)
	discount = true;
	
	
if (discount)
	console.log("the ticket price is $7.00");
else
	console.log("the ticket price is $12.00");




	