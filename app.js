let comprar = document.getElementById('comprar')

function seleccionColor(){
    let color = document.getElementById('color').value
    let talle = document.getElementById('talle').value
    let small = document.getElementById('small').value
    let medium = document.getElementById('medium').value
    let large = document.getElementById('large').value

    if(talle == small){
        document.getElementById('total').innerHTML = "Usted selecciono la remera " + color + " de talle " + talle + " y Un valor de $1000"
    }else if (talle == medium){
        document.getElementById('total').innerHTML = "Usted selecciono la remera " + color + " de talle " + talle + " y un valor de $1100"
    }else if(talle == large){
        document.getElementById('total').innerHTML = "Usted selecciono la remera " + color + " de talle " + talle + " y un valor de $1200"
    }
    
}
comprar.addEventListener('click', seleccionColor)