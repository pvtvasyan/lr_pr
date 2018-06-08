function sum(a) {
	var summ = a;

	function f(b) {
		summ += b;
		return f;
	}

	f.toString = function() {
		return summ;
	};

	return f;
}