
document.getElementById('D1-on').addEventListener('click', function () {
	var url = "https://monker.000webhostapp.com/api/led/update.php?id=1&status=on";
	$.getJSON(url, function (data) {
		console.log(data);
	});
});

document.getElementById('D1-off').addEventListener('click', function () {
	var url = "https://monker.000webhostapp.com/api/led/update.php?id=1&status=off";
	$.getJSON(url, function (data) {
		console.log(data);
	});
});


document.getElementById('D2-on').addEventListener('click', function () {
	var url = "https://monker.000webhostapp.com/api/led/update.php?id=2&status=on";
	$.getJSON(url, function (data) {
		console.log(data);
	});
});

document.getElementById('D2-off').addEventListener('click', function () {
	var url = "https://monker.000webhostapp.com/api/led/update.php?id=2&status=off";
	$.getJSON(url, function (data) {
		console.log(data);
	});
});


document.getElementById('D3-on').addEventListener('click', function () {
	var url = "https://monker.000webhostapp.com/api/led/update.php?id=3&status=on";
	$.getJSON(url, function (data) {
		console.log(data);
	});
});

document.getElementById('D3-off').addEventListener('click', function () {
	var url = "https://monker.000webhostapp.com/api/led/update.php?id=3&status=off";
	$.getJSON(url, function (data) {
		console.log(data);
	});
});
