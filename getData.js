function getData(endpoint, callback = () => null) {
	return GM.xmlHttpRequest({
		method: "GET",
		headers: { accept: "application/json" },
		url: endpoint,
		onload: ({ responseText: data }) => {
			data = JSON.parse(data);
			callback(data);
		},
		onabort: (ex) => console.error("[ABORT] Oh no, something went wrong", ex),
		onerror: (ex) => console.error("[ERROR] Oh no, something went wrong", ex),
	});
}

// Example
// Obtain data from teh endpoint, then run the callback function
getData("https://icanhazdadjoke.com", showJoke);

function showJoke(data) {
	const { joke } = data;
	console.log(joke);
}
