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