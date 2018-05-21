function fib(n) {
	var a = 1;
		b = 1;
	for (i = 3; i <= n; i++) {
		c = a + b;
		a = b;
		b = c;
	}
	return b;
}