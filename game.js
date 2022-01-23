
arrayColors = ["blue", "red", "yellow", "green"];
colorArray = [];
clickedPattern = [];

$(".btn").click(function() {
	let userChosenColor = $(this).attr("id");
	clickedPattern.push(userChosenColor);

	playSound(userChosenColor);
});

function nextSequence() {
	let randomColor = Math.floor(Math.random() * 4);
	let chosenColor = arrayColors[randomColor];

	colorArray.push(chosenColor);
	$("#" + chosenColor).fadeIn(100).fadeOut(100).fadeOut(100);
}

function playSound(name) {
	let chosenSound = new Audio("sounds/" + name + ".mp3");
	chosenSound.play(chosenSound);
}