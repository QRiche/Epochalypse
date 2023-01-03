function getCurrentTime() {
	unixNode = document.getElementById("locale-unix");
	localeNode = document.getElementById("locale");
	utcUnixNode = document.getElementById("utc-unix");
	utcNode = document.getElementById("utc");
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
	}, 1000);
}
