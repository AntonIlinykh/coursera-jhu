function outputGreeting() {
	
	var name = document.querySelector("#name-value").value;
	var greeting = "<h2>Hello " + name + "!</h2>";
	document.querySelector("#output").innerHTML = greeting;
	if (name === 'student') {
		document.querySelector("h1").textContent += " & Lovin' It!";
	}
	
}

function catOutput() {
	var password = document.querySelector("#password").value;
	if (password === "мяу" || password === "Мяу") {
		var catImg = "<img src=" + "http://i62.beon.ru/89/53/2175389/50/74569550/x_4157f621.jpeg" + ">";
		document.querySelector("#cat-container").innerHTML = catImg;
	} else {
		document.querySelector("#cat-container").innerHTML = "Попробуй ещё раз";
	}
}

var sx = document.getElementById('sx');
var sy = document.getElementById('sy');
var px = document.getElementById('px');
var py = document.getElementById('py');
var cx = document.getElementById('cx');
var cy = document.getElementById('cy');

function showPosition(e) {
	sx.value = e.screenX;
	sy.value = e.screenY;
	px.value = e.pageX;
	py.value = e.pageY;
	cx.value = e.clientX;
	cy.value = e.clientY;
}

var el = document.getElementById('body');
el.addEventListener('mousemove', showPosition, false);

var keyPlace = document.getElementById('body');
keyPlace.addEventListener('keypress', writeKey, false);

function writeKey(e) {
	var key = e.keyCode;
	var keyValue = document.getElementById('key');
	keyValue.textContent = key;
}