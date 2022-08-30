

let agregarCarri = document.getElementById('agregarCarri')
let agregarCarriP = document.getElementById('agregarCarriP')
let color

function seleccionColor(){
    color = document.getElementById('color').value
    let talle = document.getElementById('talle').value
    let small = document.getElementById('small').value
    let medium = document.getElementById('medium').value
    let large = document.getElementById('large').value

    if(talle == small){
       total = `_Remera ${color}, talle ${talle} : valor de $1000`
    }else if (talle == medium){
        total = `_Remera ${color}, talle ${talle}: valor de $1100`
    }else if(talle == large){
        total = `_Remera ${color}, talle ${talle}: valor de $1200`
    }
    //traigo el id del div al cual le quiero crear el hijo
    let finalizada = document.getElementById('finalizada')
    //creo el hijo
    let parrafo = document.createElement('p')
    //le asigno al hijo, el contenido
    parrafo.innerHTML = total
    //le asigno una clase para poder darle estilo
    parrafo.classList.add("parraJs")
    //le aviso al padre que le cree el hijo
    finalizada.appendChild(parrafo)
    //creo el boton borrar(HIJO), para la accion de los items agregados al carrito
    let btnBorrar = document.createElement('button')
    //le asigno el contenido
    btnBorrar.innerHTML = 'X' 
    //le aviso al padre que le cree un hijo
    parrafo.appendChild(btnBorrar)

    localStorage.setItem(`parrafo`, JSON.stringify(total))
    //creo la funcion eliminar item del carrito
    function eliminarItem(){
        parrafo.remove()
    }
    btnBorrar.addEventListener('click', eliminarItem)
}


////////////////////////////////////////////

function seleccionPantalon(){
    let colorP = document.getElementById('colorPants').value
    let talleP = document.getElementById('tallePants').value
    let t40 = document.getElementById('t40').value
    let t42 = document.getElementById('t42').value
    let t44 = document.getElementById('t44').value
    
    if(talleP == t40){
       totalP = `_Pantalon ${colorP}, talle ${talleP}: valor de $1500`
    }else if (talleP == t42){
        totalP = `_Pantalon ${colorP}, talle ${talleP}: valor de $1600`
    }else if(talleP == t44){
        totalP = `_Pantalon ${colorP}, talle ${talleP}: valor de $1700`
    }

    let finalizada = document.getElementById('finalizada')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = totalP
    parrafo.classList.add("parraJs")

    finalizada.appendChild(parrafo)

    let btnBorrar = document.createElement('button')
    btnBorrar.innerHTML = 'X' 
    parrafo.appendChild(btnBorrar)

    localStorage.setItem(`parrafoP`, JSON.stringify(totalP))
    localStorage.getItem(`parrafoP`, JSON.stringify(totalP))

    function eliminarItem(){
        parrafo.remove()
    }
    btnBorrar.addEventListener('click', eliminarItem)

    function resultado(){

    }
    
}

agregarCarri.addEventListener('click', seleccionColor)
agregarCarriP.addEventListener('click', seleccionPantalon)



