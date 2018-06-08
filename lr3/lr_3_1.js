var calculator = {
    read : function() {
    	this.a = prompt("Первое число:", '');
    	this.b = prompt("Второе число:", '');
    },

    sum : function() {
    	this.c = parseInt(this.a) + parseInt(this.b);
    	return this.c;
    },

    mul : function() {
    	this.d = parseInt(this.a) * parseInt(this.b);
    	return this.d;
    }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());