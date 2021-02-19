function aleatorio(minimo, maximo) {
    var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    return numero;
    
}

var piedra = 0;
var papel = 1;
var tijera = 2;
var opcionusuario;
var opcionmaquina = aleatorio(0,2);
var opcion = ["piedra", "papel", "tijera"];

opcionusuario = prompt("que opcion eliges?\n piedra 0 \n papel 1 \n tijera 2", 0);

alert ("Tu elegiste " + opcion [opcionusuario]);
alert("computadora " + opcion  [opcionmaquina]);

if (opcionusuario == piedra){

    if(opcionmaquina == piedra){

        alert("Estamos en empate");
    }

    else if (opcionmaquina == papel){

        alert("Has Ganado chaval ¡¡");
        
    }else if (opcionmaquina == tijera){

        alert("Has perdido :(");
    }

} else if (opcionusuario == papel){

    if(opcionmaquina == papel){

        alert("Estamos en empate");
    }
    else if (opcionmaquina == piedra){

        alert("Has Ganado chaval ¡¡");

    }else if (opcionmaquina == tijera){

        alert("Has perdido :(");
    }
}
else if (opcionusuario == tijera){

    if(opcionmaquina == tijera){
        alert("Estamos en empate");
    }
    else if (opcionmaquina == papel){
        alert("Has Ganado chaval ¡¡");
    }else if (opcionmaquina == piedra){
        alert("Has perdido :(");
    }

}
else {
   alert("volvemos a juagar ");
}



