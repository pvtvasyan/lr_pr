arr = [];
var a = 1; 
while (a <= 100) {
    arr.push(a++);
}

for (i = 1; i <= 100; i++) {
	for (j = i+1; j <= 100;j++) {
		if (arr[j] % arr [i] == 0) {
			delete arr[j];
		}
	}
}

var b = 0;
for (i = 1; i <=100; i++){
	if (parseInt(arr[i]) > 0) {
		b += parseInt(arr[i]);
	}
}
alert(b);