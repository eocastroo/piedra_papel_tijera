function aleatorio(minimo, maximo) {

    var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);

    return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;
var opcionusuario;
var opcionmaquina = aleatorio(0,2);

var opcion = ["piedra","papel","tijera"]

opcionusuario = prompt("Que escojes ? \n piedra 0\n papel 1 \n tijera 2", 0);
 alert("Tu escojiste " + opcion [opcionusuario]);
 alert("Maquina Escoge " + opcion[opcionmaquina]);

 switch ( opcionusuario == piedra) {
     case opcionmaquina == piedra:
         alert("Empataste");
         break;

    case opcionmaquina == papel:
        alert("Perdiste");
        break;

    case opcionmaquina == tijera:
                 alert("Ganaste");
                 break;
 } 
 switch (opcionusuario == papel) {
    case opcionmaquina == papel:
        alert("Empataste");
        break;

        case opcionmaquina == piedra:
            alert("ganaste");
            break;

            case opcionmaquina == tijera:
                alert("Perdiste");
                break;
 }
 switch (opcionusuario == tijera ) {
    case opcionmaquina == tijera:
        alert("Empataste");
        break;

        case opcionmaquina == piedra:
            alert("perdiste");
            break;

            case opcionmaquina == papel:
                alert("Ganaste");
                break;
     
     default:
          alert("Intentalo de nuevo");
         break;
 }
