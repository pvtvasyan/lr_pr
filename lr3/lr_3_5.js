function Calculator() { 
	var actions = { 
		"+": function(a, b) { 
			return a + b; 
		}, 
		"-": function(a, b) { 
			return a - b; 
		} 
	} 

		this.calculate = function(str) { 

			var arr = str.split(' '); 

			if(arr.length > 3) 
			return "Слишком много значений"; 
				for(act in actions) { 
				if(act == arr[1]) 
					return actions[act](parseInt(arr[0]), parseInt(arr[2])); 
				} 
		return "Оператор не зарегестрирован"; 
		} 


		this.addMethod = function(name, func) { 
			actions[name] = func; 
		} 
} 


var calc = new Calculator;
alert(calc.calculate("1 + 4"));


var powerCalc = new Calculator; 

	powerCalc.addMethod("*", function(a, b) { 
		return a * b; 
	}); 
	powerCalc.addMethod("/", function(a, b) { 
		return a / b; 
	}); 
	powerCalc.addMethod("**", function(a, b) { 
		return Math.pow(a, b); 
	}); 

var calc2 = powerCalc.calculate("3 ** 4"); 
alert(calc2);