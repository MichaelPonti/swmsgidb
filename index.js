
//self.importScripts('idb.js');


document.getElementById('btnmessage').addEventListener('click', function (e) {
	if (typeof(idb) !== 'undefined') {
		console.log('idb defined');
	} else {
		console.log('idb NOT defined');
	}
});


document.getElementById('btnfetch').addEventListener('click', function (e) {
});


document.getElementById('btnSetCache').addEventListener('click', function (e) {
	setCacheStatus(true, 'modelyo');
});


document.getElementById('btnGetCache').addEventListener('click', function (e) {
	getCacheStatus().then(function (data) {
		console.log(data);
	});
});