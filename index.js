
//self.importScripts('idb.js');


document.getElementById('btnmessage').addEventListener('click', function (e) {
	if (typeof(idb) !== 'undefined') {
		console.log('idb defined');
	} else {
		console.log('idb NOT defined');
	}
});


document.getElementById('btnfetch').addEventListener('click', function (e) {
	fetch('https://www.google.ca').then(function (response) {
		console.log(response);
	});
});