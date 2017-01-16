function chunk(array, process, context) {
	setTimeout(function() {
		var item = array.shift();
		process.call(context,item);

		if (array.leng > 0) {
			setTimeout(arguments.callee, 100)
		}
	}, 100);
}