var numRows = 11;
var maxSize = 100;
var minSize = 16

function generateChart() {
	maxSize = document.getElementById("maxSizeInput").value;
	minSize = document.getElementById("minSizeInput").value;
	var tempHTML = "";
	for (var row = 0; row < numRows; row++) {
		var size = (maxSize - (row * (maxSize - minSize) / (numRows - 1)));
		tempHTML += "<p style=\"line-height: 40%;\"><span style=\"font-size:" + size + "%;\">" + generateRandomString(5) + "</span>\n";
		tempHTML += "<span style=\"float:right;font-size:40px;font-family:Arial\">" + (row + 1) + " - " + (Math.round(size* 100) / 100) + "</span></p>";
	}
	document.getElementById("chart").innerHTML = tempHTML;
}

function generateRandomString(length) {
	var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	var randomString = "";
	for (var i = 0; i < length; i++) {
		randomString += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return randomString;
}

function invertColors(dark) {
	console.log(dark);
	if (dark == 1) {
		document.body.style.backgroundColor = "#000000";
		document.body.style.color = "#ffffff";
	} else if (!dark) {
		document.body.style.backgroundColor = "#ffffff";
		document.body.style.color = "#000000";
	}
}