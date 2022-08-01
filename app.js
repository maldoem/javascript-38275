//desafio clase-3

let cantidadPersonas
let platoPrincipal
let bebidas

do {
    cantidadPersonas = Number(prompt("ingresa cantidad de personas"))
    platoPrincipal = prompt("elija su menu \n milanesa c/papas \n fideos c/bolognesa \n pollo al verdeo")
    bebidas = prompt("elija sus bebidas \n coca cola \n pepsi \n agua")
    if (cantidadPersonas != "" && platoPrincipal != "" && bebidas != "") {
        alert(" su pedido para " + cantidadPersonas + " personas, de " + platoPrincipal + " con " + bebidas + " estara listo en 10 minutos")
    break;
    } else if (cantidadPersonas == "") {
        alert (" pedido incompleto, vuelva a realizarlo")
    } else if (platoPrincipal != "string") {
        alert (" pedido imcompleto, vuelva a realizarlo")
    }
} while (cantidadPersonas == "" || platoPrincipal == "" || bebidas == "");

