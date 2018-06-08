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
			return "Слишком много значений. Пример: \"3 + 7\""; 
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
alert(calc.calculate("3 + 7")); // выдаст 10



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

var res = powerCalc.calculate("2 ** 3"); 
alert(res); // выдаст 8