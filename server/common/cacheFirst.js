const cacheFirst = (req, res, context) => {
	var instance = cache.get(context.criteria);
	if (instance) {
		// keep a reference to the instance and skip the fetch
		context.instance = instance;
		return context.skip;
	} else {
		// cache miss; we continue on
		return context.continue;
	}
}
module.exports = cacheFirst;