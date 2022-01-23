arrayColors = ["blue", "red", "yellow", "green"];
colorArray = [];
clickedPattern = [];

let started = false;
let level = 0;

$(document).keypress(function() {
  if (!started) {
  
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {
	let userChosenColor = $(this).attr("id");
	clickedPattern.push(userChosenColor);

	playSound(userChosenColor);
	animatePress(userChosenColor);

	checkAnswer(clickedPattern.length-1);
});

function checkAnswer(currentLevel) {
	if (colorArray[currentLevel] === clickedPattern[currentLevel]) {
		if (clickedPattern.length === colorArray.length) {
			setTimeout(function () {
				nextSequence();
			}, 1000);
		}
	} else {
		playSound("wrong");
		$("body").addClass("game-over");
		$("#level-title").text("Game Over, Press Any Key to Restart");

		setTimeout(function () {
			$("body").removeClass("game-over");
		}, 200);

		startOver();
	}
}

function nextSequence() {
	clickedPattern = [];

	level++;
	$("#level-title").text("Level " + level);

	let randomColor = Math.floor(Math.random() * 4);
	let chosenColor = arrayColors[randomColor];

	colorArray.push(chosenColor);
	$("#" + chosenColor).fadeIn(100).fadeOut(100).fadeOut(100);
	playSound(chosenColor);
}

function playSound(name) {
	let chosenSound = new Audio("sounds/" + name + ".mp3");
	chosenSound.play(chosenSound);
}

function animatePress(currentColor) {
	$("#" + currentColor).addClass("pressed");

	setTimeout(function () {
	  $("#" + currentColor).removeClass("pressed");
	}, 100);
}

function startOver() {
	level = 0;
	gamePattern = [];
	started = false;
  }