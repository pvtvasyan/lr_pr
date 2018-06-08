function Calculator() {
    this.read = function() {
    	this.a = prompt("Первое число:", '');
    	this.b = prompt("Второе число:", '');
    };

    this.sum = function() {
    	this.c = parseInt(this.a) + parseInt(this.b);
    	return this.c;
    };

    this.mul = function() {
    	this.d = parseInt(this.a) * parseInt(this.b);
    	return this.d;
    };
}

var calculator = new Calculator();
calculator.read();
alert(calculator.sum());
alert(calculator.mul());