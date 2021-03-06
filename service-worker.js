
self.importScripts('idb.js');
self.importScripts('appdb.js');


var cacheOn = false;
var cacheName = 'no-model';


const swVersion = '20';

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
	event.waitUntil(
		getCacheStatus().then(function (data) {
			console.log(`sw cache status: ${data.cacheOn} ${data.cacheName}`);
		})
	);
});

self.addEventListener('fetch', function (event) {
	console.log('fetch event');
	if (idb) {
		console.log('sw: idb defined');
	} else {
		console.log('sw: idb not defined');
	}
});


self.addEventListener('push', function (event) {
	console.log('sw: push');
	event.waitUntil(
		getCacheStatus().then(function (data) {
			console.log(`sw cache status: ${data}`);
		})
	);
});


self.addEventListener('message', function (event) {
	console.log('from message event in service worker');
	console.log(`command: ${event.data.command} cacheOn: ${event.data.data.cacheOn} ${event.data.data.cacheName}`);
});





// setInterval(() => {
// 	getCacheStatus().then(function (data) {
// 		cacheOn = data.cacheOn;
// 		cacheName = data.cacheName;
// 		console.log(`caching status polled: ${cacheName}: ${cacheOn}`);
// 	})
// }, 1000);


