var counter = 0;
var a = 0;
var add = function(valueToAdd){
        a += valueToAdd;
        b = a * 0.12
        c = a + b
        document.getElementById('Subtotal').innerHTML = a;
        document.getElementById('Tax').innerHTML = b;
        document.getElementById('Total').innerHTML = c;
		}

var reset= function(){
    a = 0;
    b = 0;
    c = 0;
    document.getElementById('Subtotal').innerHTML = a;
    document.getElementById('Tax').innerHTML = b;
    document.getElementById('Total').innerHTML = c;
    }



