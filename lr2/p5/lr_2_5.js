function factorial(n) {
	if (n == 1) {
		return 1;
	} else {
		return (parseInt(n) * factorial(n - 1));
	}
}