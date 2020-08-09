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
			var waitForIt = new Audio("sounds/waitForIt.mp3");
			waitForIt.play();
			break;
		case "imAwesome sound":
			var imAwesome = new Audio("sounds/imAwesome.mp3");
			imAwesome.play();
			break;
		case "challengeAccepted sound":
			var challengeAccepted = new Audio("/sounds/challengeAccepted.mp3");
			challengeAccepted.play();
			break;
		case "selfFive sound":
			var selfFive = new Audio("/sounds/selfFive.mp3");
			selfFive.play();
			break;
		case "suitUp sound":
			var suitUp = new Audio("/sounds/suitUp.mp3");
			suitUp.play();
			break;
		case "trueStory sound":
			var trueStory = new Audio("/sounds/trueStory.mp3");
			trueStory.play();
			break;
		case "patentPending sound":
			var patentPending = new Audio("/sounds/patentPending.mp3");
			patentPending.play();
			break;
		case "legendary sound":
			var legendary = new Audio("/sounds/legendary.mp3");
			legendary.play();
			break;
		case "haveYouMet sound":
			var haveYouMet = new Audio("/sounds/haveYouMet.mp3");
			haveYouMet.play();
			break;

		default: console.log("Ive been clicked.");

	}
}