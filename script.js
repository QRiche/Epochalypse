function getCurrentTime() {
	unixNode = document.getElementById("locale-unix");
	localeNode = document.getElementById("locale");
	utcUnixNode = document.getElementById("utc-unix");
	utcNode = document.getElementById("utc");

	localePassedNode = document.getElementById("locale-passed");
	utcPassedNode = document.getElementById("utc-passed");

	setInterval(() => {
		const date = new Date();

		// Calculates the offset in seconds, getTimezoneOffset() returns the offset in minutes
		// console.log(date.getTimezoneOffset() * 60);
		unixNode.innerHTML = Math.floor(date.getTime() / 1000) - date.getTimezoneOffset() * 60;

		localeNode.innerHTML = date.toLocaleString();

		// FIXME: This might not be accurate
		utcUnixNode.innerHTML = Math.floor(Date.parse(date.toISOString()) / 1000);
		// console.log(Date.parse(date.toUTCString()) / 1000);

		utcNode.innerHTML = date.toUTCString();

		if (checkEpoch(unixNode.innerHTML)) {
			localePassedNode.innerHTML = "Yes";
		}
		else {
			localePassedNode.innerHTML = "No";
		}
		if (checkEpoch(utcUnixNode.innerHTML)) {
			utcPassedNode.innerHTML = "Yes";
		}
		else {
			utcPassedNode.innerHTML = "No";
		}

	}, 1000);
}

function checkEpoch(epoch) {
	const overflow = 2147483647;
	if (epoch >= overflow) {
		return true;
	}
}

