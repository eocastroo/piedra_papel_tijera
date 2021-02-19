 function aleatorio(minimo, maximo) {
     var numero = Math.floor(Math.random() * (maximo - minimo + 1 ) + minimo );
     return numero;
 }

var piedra = 0;
var papel = 1;
var tijera = 2;
var opcionusuario;
var opcionmaquina = (0,2);
var opcion = ["piedra", "papel", "tijera"];

opcionusuario = prompt("Que eliges \n piedra 0 \n papel 1 \n tijera 2", 0);
 alert("escogiste " + opcion [opcionusuario]);
 alert("maquina  " +   opcion [opcionmaquina]);

 if (opcionusuario == piedra){

     if (opcionmaquina == piedra){ 

         alert("Empate");

     }
     else if(opcionmaquina == papel){
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
     else if(opcionmaquina == piedra){

         alert("Ganaste");
     }
     else if(opcionmaquina == tijera){
         alert("Perdiste");

     }

 }
 if (opcionusuario == tijera){

    if (opcionmaquina == tijera){ 

        alert("Empate");

    }
    else if(opcionmaquina == piedra){

        alert("Perdiste");
    }
    else if(opcionmaquina == papel){

        alert("Ganaste");

    }

 }
 else {
     Alert ("Volver a empezar el juego ");
 }
