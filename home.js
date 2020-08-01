	
	console.log("hello");
	// alert("dfkgbe")

	// document.getElementById("someText").innerHTML = "dslkvnd";

	// var age = prompt("age?");

	// document.getElementById("someText").innerHTML = age;


	// numbers in js
	var num1 = 10;
	num1--;
	console.log(num1)


// increment by any number

num1 += 10;
console.log(num1)


// function 
function fun() {
	console.log("this is a function")
}

fun()


function hello(name) {
	// var name = prompt("your name?") 
	var result = `hello ${name}`
	console.log(result)
}

// var name = prompt("your Name")

hello(name);
// var num = 0;

// while(num < 100) {
// 	num++
// 	console.log(num)
// }

// for(let num = 0; num <= 100; num++) {
// 	console.log(num)
//

let fruit = "Banana";

// let fruits = "banana\napple"
console.log(fruit.indexOf('nan'))

console.log(fruit.slice(2, 6))


console.log(fruit.replace('ban','123'))

console.log(fruit.toUpperCase())
console.log(fruit.toLowerCase())

console.log(fruit.charAt(3)) // or

console.log(fruit[3])

console.log(fruit.split(',')) //split by a comma
console.log(fruit.split('')) 



let fruits = new Array("fruit1", "fruit2", "fruit3");

// console.log(fruits)


console.log(fruits.toString())

console.log(fruits.join('-'))

console.log( fruits.pop(), fruits)

console.log(fruits.push("fruit4"), fruits)

console.log(fruits.shift())  //remove first element

console.log(fruits.unshift("kiwi"), fruits) // add first elelemt


//adding 2 arrays




let vegetables = ["veg1", "veg2", "veg3"];

let allGro = fruits.concat(vegetables);

console.log(allGro)


 console.log(allGro.slice(1, 4))

 console.log(allGro.reverse())


//sort 

let someNumbers = [1, 3, 2, 5];

// console.log(someNumbers.sort());


console.log(someNumbers.sort((a, b) => (a + b)));  // decending


console.log(someNumbers.sort((a, b) => (a - b)));  // ascending

//pushing elements to empty array

let emptyArray = [];

for(let i = 0; i <= 10; i++) {
	emptyArray.push(i);
}


console.log(emptyArray)
