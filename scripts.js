var snellenSizes = [150, 75, 52.5, 37.5, 30, 22.5, 18.75, 15, 11.25, 7.5, 5.25];
var snellenRows = [1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 9];
var snellenRowCount = 11;

function generateChart() {
	var maxSize = document.getElementById("maxSizeInput").value;
	var minSize = document.getElementById("minSizeInput").value;
	var numRows = document.getElementById("numLinesInput").value;
	var charsPerRow = [document.getElementById("charsPerLineInput").value];
	var snellenMode = document.getElementById("snellenCheckbox").checked;

	if (snellenMode) {
		numRows = snellenRowCount;
		charsPerRow = snellenRows;
	}
	var tempHTML = "";
	for (var row = 0; row < numRows; row++) {
		var size = (maxSize - (row * (maxSize - minSize) / (numRows - 1)));
		if (snellenMode) {
			size = snellenSizes[row];
		}
		tempHTML += "<div class=\"rowDiv\"><div class=\"leftDiv\"></div>\n<p class=\"centerP\" style=\"font-size:" + size + "px;\">" + generateRandomString(charsPerRow[row * snellenMode], snellenMode) + "</p>\n";
		tempHTML += "<div class=\"rightDiv\"><p>" + (row + 1) + " - " + (Math.round(size* 100) / 100) + "</p></div></div>\n";
	}
	document.getElementById("chart").innerHTML = tempHTML;
}

function generateRandomString(length, snellen) {
	console.log(snellen);
	var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	if (snellen) {
		characters = "CDEFLNOPTZ"
	}
	var randomString = "";
	for (var i = 0; i < length; i++) {
		randomString += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return randomString;
}

function invertColors(dark) {
	if (dark == 1) {
		document.body.style.backgroundColor = "#000000";
		document.body.style.color = "#FFFFFF";
		document.getElementById("sidemenu").style.backgroundColor = "#333333";
	} else if (!dark) {
		document.body.style.backgroundColor = "#FFFFFF";
		document.body.style.color = "#000000";
		document.getElementById("sidemenu").style.backgroundColor = "#AAAAAA";
	}
}

function openNav() {
	document.getElementById("sidemenu").style.left = "0px";
}

function closeNav() {
	document.getElementById("sidemenu").style.left = "-304px";
}

/*
	Snellen mode has the following properties:
	- Letters used: C, D, E, F, L, N, O, P, T, Z
	- Rows: 11
	- Characters per row: 1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 9
	- Relative sizes: 200, 100, 70, 50, 40, 30, 25, 20, 15, 10, 7
	100, 50, 35, 25, 20, 15, 12.5, 10, 7.5, 5, 3.5
*/