var b = 0;

for (i = 2, i<=10, i++) {


    for (a = 1, a < i, a++) {
        b = i % a;
        if (b = 0) {
        	break;
        }
    }


    if (b != 0) {
        console.log (i);
    }
}