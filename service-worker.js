
self.importScripts('idb.js');


const swVersion = '02';

self.addEventListener('install', function (event) {
	console.log('install event');
	if (idb) {
		console.log('sw: idb defined');
	} else {
		console.log('sw: idb not defined');
	}
});


self.addEventListener('activate', function (event) {
	console.log('activate event');
});

self.addEventListener('fetch', function (event) {
	console.log('fetch event');
	if (idb) {
		console.log('sw: idb defined');
	} else {
		console.log('sw: idb not defined');
	}
});