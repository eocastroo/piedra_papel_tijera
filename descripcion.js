var piedra = 0;
var papel = 1;
var tijera = 2;
var opcusuario;
var opcmaquina = papel;

opcusuario = prompt("que opcion tomas ? \n piedra 0  \n papel 1 \n tijea 2 ", 0);

function juego(opcusuario,opcmaquina){
    
}

if (opcusuario == piedra){
    alert("escojiste piedra");

    if(opcmaquina == piedra){
        alert("Empate");
    }

    else if (opcmaquina == papel){

        alert("Perdiste");
    }
    else if(opcmaquina == tijera){
        alert("ganaste");
    }

}

else if (opcusuario == papel){

    alert("escojiste papel");

    if(opcmaquina == piedra){
        alert("ganaste");
    }

    else if (opcmaquina == papel){
        alert("empate");
    }
    else if(opcmaquina == tijera){
        alert("ganaste");
    }

}
else if (opcusuario == tijera){

    alert("escojiste piedra");

    if(opcmaquina == piedra){

        alert("perdiste");
    }

    else if (opcmaquina == papel){

        alert("ganaste");
    }
    else if(opcmaquina == tijera){
        alert("empate");
    }
}
    else {
        alert("vover a jugar");
    }