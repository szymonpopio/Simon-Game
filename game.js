
arrayColors = ["blue", "red", "yellow", "green"];
colorArray = [];

function nextSequence() {
	let randomColor = Math.floor(Math.random() * 4);

	let chosenColor = arrayColors[randomColor];

	colorArray.push(chosenColor);

	$("#" + chosenColor).fadeIn(100).fadeOut(100).fadeOut(100);

	let sound = new Audio("sound/" + chosenColor + "mp3");
	Audio.play();
}