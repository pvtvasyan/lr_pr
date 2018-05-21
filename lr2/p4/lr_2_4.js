//цикл выполняется n раз
function sumTo(n) {
	var a = 0;
	for (i = 1; i =< n; i++) {
		a = a + i;
	}
	return a;
}


//самая медленная — вся функция выполняется n раз
//ограничение на размер стека — ограничение в самом браузере, которое определяет, что при использовании рекурсии можно углубиться на определенное количество уровней. 
//100000 превышает это количество. количество уровней варьируется в зависимости от браузера.
function sumTo(n) {
	if (n == 1) {
		return 1;
	} else {
		return (parseInt(n) + sumTo(n - 1));
	}
}


//самая быстрая — выполнение 1 формулы
function sumTo(n) {
	n = parseInt(n);
	return n * (n + 1) / 2;
}