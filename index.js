var numberOfButtons = document.querySelectorAll(".sound").length;

for (var i = 0; i < numberOfButtons; i++) {
	document.querySelectorAll(".sound")[i].addEventListener("click", function () {
		var buttonInnerHTML = this.className;
		makeSound(buttonInnerHTML);
	});
}
function makeSound(buttonInnerHTML) {
	switch (buttonInnerHTML) {
		case "waitForIt sound":
			var waitForIt = new Audio("/waitForIt.mp3");
			waitForIt.play();
			break;
		case "imAwesome sound":
			var imAwesome = new Audio("/imAwesome.mp3");
			imAwesome.play();
			break;
		case "challengeAccepted sound":
			var challengeAccepted = new Audio("/challengeAccepted.mp3");
			challengeAccepted.play();
			break;
		case "selfFive sound":
			var selfFive = new Audio("/selfFive.mp3");
			selfFive.play();
			break;
		case "suitUp sound":
			var suitUp = new Audio("/suitUp.mp3");
			suitUp.play();
			break;
		case "trueStory sound":
			var trueStory = new Audio("/trueStory.mp3");
			trueStory.play();
			break;
		case "patentPending sound":
			var patentPending = new Audio("/patentPending.mp3");
			patentPending.play();
			break;
		case "legendary sound":
			var legendary = new Audio("/legendary.mp3");
			legendary.play();
			break;
		case "haveYouMet sound":
			var haveYouMet = new Audio("/haveYouMet.mp3");
			haveYouMet.play();
			break;

		default: console.log("Ive been clicked.");

	}
}
