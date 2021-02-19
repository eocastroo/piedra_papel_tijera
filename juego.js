function aleatorio(minimo , maximo) {

    var numero = Math.floor(Math.ramdon() * (maximo - minimo + 1) + minimo);

    return numero;
}
var piedra = 0;
var papel = 1;
var tijera = 2;
var opcionusuario ;
var opcionmaquina = (0,2);
var toma  = ["piedra","papel","tijera"];

opcionusuario = prompt("Que opcion tomas ? \n piedra 0 \n papel 1 \n tijera 2", 0 );

alert("Escogites.. " + toma[opcionusuario]);
alert("Maquina..  "  + toma[opcionmaquina]);

if (opcionusuario == piedra){
    
   

    if (opcionmaquina == piedra){

        alert("Empate");

    }
    else if (opcionmaquina == papel){
        
        alert("Perdiste");

    }
    else if (opcionmaquina == tijera){

        alert("Ganaste");

    }
}

if (opcionusuario == papel){
    

    if (opcionmaquina == papel){

        alert("Empate");

    }
    else if (opcionmaquina == piedra){
        
        alert("Ganaste");

    }
    else if (opcionmaquina == tijera){

        alert("Perdiste");

    }
}

if (opcionusuario == tijera){
    

    if (opcionmaquina == tijera){

        alert("Empate");

    }
    else if (opcionmaquina == papel){
        
        alert("Ganaste");

    }
    else if (opcionmaquina == piedra){

        alert("Perdiste");

    }
}
else{
    
 alert("Volvamos a jugar ");
}


