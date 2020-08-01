//challenge -1  age in days



function ageInDays() {
	var birthYear = prompt("what year are you born?");
	var ageInDayss = (2020 - birthYear) * 365;

	var h1 = document.createElement("h1")

	var textAnswer = document.createTextNode(`you are ${ageInDayss} days old`)

	h1.setAttribute('id', 'ageInDays');
	h1.appendChild(textAnswer);
	document.getElementById("flex-box-result").appendChild(h1);

	console.log(ageInDayss)
}


function reset() {
	document.getElementById("ageInDays").remove();
}


//img generator
function generateImg() {
	console.log("jbvdfkh")
	var image = document.createElement("img");
	var div = document.getElementById("flex-image")
	image.src = "static/images/img.jpeg"
	div.appendChild(image)
}


// r p s

function rpsGame(yourChoice) {
	console.log(yourChoice)

	var humanChoice, botChoice;

	humanChoice = yourChoice.id

	botChoice = numberToChoice(randomRpsInt())
	console.log("computer choice", botChoice)

	result = decideWinner(humanChoice, botChoice);

	console.log(result)

	message = finalMessage(result);
	console.log(message)

	rpsFrontEnd(yourChoice.id, botChoice, message)
}

function randomRpsInt() {
	return Math.floor(Math.random() * 3)
}

function numberToChoice(number) {
	return ['rock', 'paper', "scissors"][number]
}

function decideWinner(yourChoice,  computerChoice) {
	var rpsDataBase =  {
		"rock": { "scissors": 1, "rock": 0.5, "paper": 0},
		"paper": { "scissors": 0, "rock": 1, "paper": 0.5},
		"scissors": { "scissors": 0.5, "rock": 0, "paper": 1 } 
	} 

	var yourScore = rpsDataBase[yourChoice][computerChoice];
	var computerScore =  rpsDataBase[computerChoice][yourChoice];

	return [yourScore, computerScore]
}

function finalMessage([yourScore, computerScore]) {
	if(yourScore === 0) {
		return {"message": "you Lost", "color": "red"}
	}else if (yourScore === 0.5) {
		return {"message": "you tied", "color": "yellow"}
	}else {
		return {"message": "you win", "color": "green"}
	}
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
	var imagesDatabase = {
		"rock": document.getElementById("rock").src,
		"paper": document.getElementById("paper").src,
		"scissors" : document.getElementById("scissors").src,
	}


	//remve all the images.
	document.getElementById("rock").remove();
	document.getElementById("paper").remove();
	document.getElementById("scissors").remove();



	var humanDiv = document.createElement('div');
	var botDiv = document.createElement('div');
	var messageDiv = document.createElement('div');

	humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'height=150px width=150px style='box-shadow: 0 10px 50px rgba(37, 50, 233, 1);'>"

	messageDiv.innerHTML = "<h1 style='color:"+finalMessage["color"]+"; font-size: 60px; padding: 30px; '>"+finalMessage["message"]+"</h1>"

	botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "'height=150px width=150px style='box-shadow: 0 10px 50px red;'>"

	document.getElementById("flex-box-rps-div").appendChild(humanDiv)
	document.getElementById("flex-box-rps-div").appendChild(messageDiv)
	document.getElementById("flex-box-rps-div").appendChild(botDiv)

}


//challenge 4: change color for all the buttons

var allButtons = document.getElementsByTagName('button');
console.log(allButtons);


var copyAllButtons = []

for(let i = 0; i < allButtons.length; i++) {
	copyAllButtons.push(allButtons[i].classList[1])
}

console.log(copyAllButtons)

function btnColorChanger(buttonThingy) {
	if(buttonThingy.value === "red"){
		buttonsRed();
	} else if( buttonThingy.value === "green") {
		buttonsGreen();
	} else if( buttonThingy.value === "reset") {
		buttonsColorReset();
	} else if( buttonThingy.value === "random") {
		randomColors();
	}
}


function buttonsRed() {
	for(let i=0; i < allButtons.length; i++){
		allButtons[i].classList.remove(allButtons[i].classList[1])
		allButtons[i].classList.add('btn-danger')
	}
}



function buttonsGreen() {
	for(let i=0; i < allButtons.length; i++){
		allButtons[i].classList.remove(allButtons[i].classList[1])
		allButtons[i].classList.add('btn-success')
	}
}


function buttonsColorReset() {
	for(let i=0; i<allButtons.length; i++){
		allButtons[i].classList.remove(allButtons[i].classList[1]);
		allButtons[i].classList.add(copyAllButtons[i])
	}
}


function randomColors() {

	var choices = ["btn-success", "btn-danger", "btn-primary", "btn-warning"]

	 for(let i=0; i<allButtons.length; i++) {
	 	allButtons[i].classList.remove(allButtons[i].classList[1]);
	 	allButtons[i].classList.add(choices[Math.floor(Math.random() * 4)])
	 }

}