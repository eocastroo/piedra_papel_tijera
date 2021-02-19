function aleatorio(minimo, maximo ) {
    var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    return numero;
}
var piedra = 0;
var papel = 1;
var tijera = 2;
var opcionusuario;
var opcionmaquina = aleatorio(0,2);
var usuario = ["piedra","papel","tijera"];

opcionusuario = prompt("Que opcion tomas ?\n piedra 0 \n papel 1 \n tijera 2 ", 0);

alert ("Escojiste " + usuario [opcionusuario]);
alert(" Maquina " + usuario [opcionmaquina]);

if(opcionusuario == piedra){

    if(opcionmaquina == piedra ){
      
        alert("Empate");
    }
    else if (opcionmaquina == papel){
       
        alert("perdiste");
    }
    else if(opcionmaquina == tijera){

        alert("ganaste");
    }

}

else if(opcionusuario == papel){

    if(opcionmaquina == piedra ){
      
        alert("ganaste ");
    }
    else if (opcionmaquina == papel){
       
        alert("empate");
    }
    else if(opcionmaquina == tijera){

        alert("perdiste");
    }

}
else if(opcionusuario == tijera){

    if(opcionmaquina == piedra ){
      
        alert("perdiste");
    }
    else if (opcionmaquina == papel){
       
        alert("ganaste");
    }
    else if(opcionmaquina == tijera){

        alert("empataste");
    }

}



