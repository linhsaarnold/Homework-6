var counter = 0;
var a = 0;
var add = function(valueToAdd){
        a += valueToAdd;
        document.getElementById('Total').innerHTML = a;
		}

var reset= function(){
    a = 0;
    document.getElementById('Total').innerHTML = a;
    }

