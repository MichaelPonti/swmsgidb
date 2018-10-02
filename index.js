
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
	var cacheName = document.getElementById('cacheName').value;
	setCacheStatus(true, cacheName);
});


document.getElementById('btnGetCache').addEventListener('click', function (e) {
	getCacheStatus().then(function (data) {
		console.log(data);
	});
});


console.log(`isAndroid: ${MobileEsp.isAndroid}`);
console.log(`isiPhone: ${MobileEsp.isIphone}`);

document.getElementById('btnMessage').addEventListener('click', function (e) {
	var cacheName = document.getElementById('cacheName').value;
	navigator.serviceWorker.controller.postMessage({ command: 'cache', data: { cacheOn: true, cacheName: cacheName }});
});