var count = 60 * 5;
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;

//
$(document).ready(function () {
	$("#questionPage").hide();
	$("#scorePage").hide();
	$("#finalImage").hide();

	window.scrollTo(0, 500);

	$("#startButton").on("click", function () {
		
		// TIMER //
		var fiveMinutes = 60 * 5,
			display = document.querySelector('#time');
		startTimer(fiveMinutes, display);

		function startTimer(duration, display) {


			var timer = duration, minutes, seconds;
			setInterval(function () {
				minutes = parseInt(timer / 60, 10)
				seconds = parseInt(timer % 60, 10);

				minutes = minutes < 10 ? "0" + minutes : minutes;
				seconds = seconds < 10 ? "0" + seconds : seconds;
				display.textContent = minutes + ":" + seconds;
				if (--timer < 0) {
					timer = duration;
				}
			}, 1000);
		}

		$("#startPage").hide();
		$("#firstImage").hide();
		$("#questionPage").show();
		startCountdown();
		return;
	});

	// Countdown Timer
	function countdown() {
		count--;

		$('#timer_number').html(count + " Seconds");
		$("#doneButton").on("click", function () {
			count = 0;
			return;
		});

		if (count == -1) {
			timeUp();
			$("#questionPage").hide();

		}
	}



	function startCountdown() {
		setInterval(countdown, 1000);
	}
	function timeUp() {

		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();
		var Q6 = $('input:radio[name="q6"]:checked').val();
		var Q7 = $('input:radio[name="q7"]:checked').val();
		var Q8 = $('input:radio[name="q8"]:checked').val();
		var Q9 = $('input:radio[name="q9"]:checked').val();
		var Q10 = $('input:radio[name="q10"]:checked').val();
		var Q11 = $('input:radio[name="q11"]:checked').val();
		var Q12 = $('input:radio[name="q12"]:checked').val();


		// Question 1
		if (Q1 == undefined) {
			unansweredCount++;
		}
		else if (Q1 == "The greatest speed a falling object is capable of reaching.") {
			correctCount++;
		}
		else {
			wrongCount++;
		}

		// Question 2
		if (Q2 == undefined) {
			unansweredCount++;
		}
		else if (Q2 == "Joe Kittinger") {
			correctCount++;
		}
		else {
			wrongCount++;
		}

		// Question 3
		if (Q3 == undefined) {
			unansweredCount++;
		}
		else if (Q3 == "The Drop Zone") {
			correctCount++;
		}
		else {
			wrongCount++;
		}

		// Question 4
		if (Q4 == undefined) {
			unansweredCount++;
		}
		else if (Q4 == "2") {
			correctCount++;
		}
		else {
			wrongCount++;
		}

		// Question 5
		if (Q5 == undefined) {
			unansweredCount++;
		}
		else if (Q5 == "USPA") {
			correctCount++;
		}
		else {
			wrongCount++;
		}

		// Question 6
		if (Q6 == undefined) {
			unansweredCount++;
		}
		else if (Q6 == "Skydive Arizona, AZ") {
			correctCount++;
		}
		else {
			wrongCount++;
		}

		// Question 7
		if (Q7 == undefined) {
			unansweredCount++;
		}
		else if (Q7 == "Tandem Skydiving") {
			correctCount++;
		}
		else {
			wrongCount++;
		}

		// Question 8
		if (Q8 == undefined) {
			unansweredCount++;
		}
		else if (Q8 == "1000-7000lbs") {
			correctCount++;
		}
		else {
			wrongCount++;
		}

		// Question 9
		if (Q9 == undefined) {
			unansweredCount++;
		}
		else if (Q9 == "Both A and B") {
			correctCount++;
		}
		else {
			wrongCount++;
		}

		// Question 10
		if (Q10 == undefined) {
			unansweredCount++;
		}
		else if (Q10 == "500") {
			correctCount++;
		}
		else {
			wrongCount++;
		}

		// Question 11
		if (Q11 == undefined) {
			unansweredCount++;
		}
		else if (Q11 == "A lower altitude jump.") {
			correctCount++;
		}
		else {
			wrongCount++;
		}

		// Question 12
		if (Q12 == undefined) {
			unansweredCount++;
		}
		else if (Q12 == "Zero. Even skydivers think bungee jumping is a bad idea.") {
			correctCount++;
		}
		else {
			wrongCount++;
		}

		// Final Page
		$('#correct_answers').html(correctCount);
		$('#wrong_answers').html(wrongCount);
		$('#unanswered').html(unansweredCount);
		$("#scorePage").show();
		$("#finalImage").show();
		window.scrollTo(0, 550);
	}
});