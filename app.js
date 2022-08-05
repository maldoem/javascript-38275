//desafio clase 4 completo/ este se entrega
let milaPapas = 1000
let polloVerdeo = 1050
let pastas = 900
let coca = 350
let vino = 500
let agua = 550
//let platos = (milaPapas, polloVerdeo, pastas)
//let bebidas = (coca, vino, agua)

function menuCompleto(){
//de acuerdo a la combinacion de pedidos que se seleccione, se aclara el pedido final con su valor
    
        if( platos == "milanesa c/papas" && bebidas == "coca" ){
            return " su pedido de " + platos + " con " + bebidas + " es de un valor de " + (milaPapas + coca)
        
        }else if( platos == "milanesa c/papas" && bebidas == "vino") {
            return " su pedido de " + platos + " con " + bebidas + " es de un valor de " + (milaPapas + vino)
        }else if( platos == "pollo al verdeo" && bebidas == "vino") {
            return " su pedido de " + platos + " con " + bebidas + " es de un valor de " + (polloVerdeo + vino)
        }else if( platos == "pollo al verdeo" && bebidas == "coca") {
            return " su pedido de " + platos + " con " + bebidas + " es de un valor de " + (polloVerdeo + coca)
        }else if (platos == "" || bebidas == ""){
            alert(" realice su pedido correctamente ")
        }
} 

 platos = prompt(" seleccione que plato desea para su cena \n 1. milanesa c/papas \n 2.pollo al verdeo ")
 bebidas = prompt(" seleccione su bebida \n 1.coca \n 2.vino ")
 alert(menuCompleto())
