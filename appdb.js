
var dbPromise = idb.open('app-indexeddb', 2, function (upgradeDb) {
	// we don't want break statements so that switch just keeps
	// going through the subsequent cases if more than one version
	// behind.
	switch(upgradeDb.oldVersion) {
		case 0:
			// a place holder so that the switch block will
			// execute when the database is first created
		case 1:
			console.log('creating app-settings object store');
			var store = upgradeDb.createObjectStore('settings', { keyPath: 'id' });
			store.add(createCacheDataObject(false, 'nomodel'));
	}
});


function createCacheDataObject(cacheOn, cacheName) {
	return {
		id: 'cache-settings',
		cacheOn: cacheOn,
		cacheName: cacheName
	};
}

function setCacheStatus(cacheOn, cacheName) {
	return dbPromise.then(function (db) {
		var tx = db.transaction('settings', 'readwrite');
		var store = tx.objectStore('settings');
		var settings = createCacheDataObject(cacheOn, cacheName);
		return store.put(settings).catch(function (e) {
			tx.abort();
			console.log(e);
		}).then(function () {
			console.log('settings updated');
		})
	});
}

function getCacheStatus() {
	return dbPromise.then(function (db) {
		var tx = db.transaction('settings', 'readonly');
		var store = tx.objectStore('settings');
		return store.get('cache-settings');
	})
}



