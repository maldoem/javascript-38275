//desafio clase 4 completo/ este se entrega
function login() {
    const usuar1 = { usuario : "emiliano88", contraseña: "clave1"}
    const usuar2 = { usuario : "ezequiel90", contraseña: "clave2"}
    const usuar3 = { usuario : "camila95", contraseña: "clave3"}

    const listaUsuarios = [usuar1, usuar2, usuar3]
    
    let ingresar = Number(prompt("ingrese su nombre de usuario y contraseña o registrese \n1. Tengo usuario \n2. No tengo usuario"))

    function crearUsuario() {
        let nuevoUsuario = prompt("ingrese su nombre de usuario")
        let nuevaContraseña = prompt("ingrese su nueva clave")
        listaUsuarios.push({usuario : nuevoUsuario, contraseña: nuevaContraseña})
        alert("creaste tu nuevo usuario bajo el nombre de " + nuevoUsuario)
        carrito()
    }  
        if(ingresar == 1){
        let usuarioExistente = prompt("ingrese su nombre de usuario")
        let contraseñaExistente = prompt("ingrese su contraseña")
        for (const datos of listaUsuarios){
    
        if(datos.usuario == usuarioExistente && datos.contraseña == contraseñaExistente){
            alert("bienvenido " + usuarioExistente)
            carrito() //AGREGAR lo demas
        }else{
            alert("datos incorrectos, vuelva a ingresarlos")
            break
        }}}        
        else if(ingresar == 2){
        crearUsuario()
        }           
}
login()

function carrito(){
    function remeras(color, talle, precio){
    this.color = color;
    this.talle = talle;
    this.precio = Number(precio); 
    }
    const art1 = new remeras("gris", "S", 1000)
    const art2 = new remeras("negra", "M", 1100)
    const art3 = new remeras("azul", "L", 1200)
    
    let pedido = Number(prompt(" seleccione que articulo desea comprar \n1 art1. remera gris talle S\n2 art2.remera negra talle  M\n3 art3.remera azul talle L"))
    if( pedido == 1 ){
        alert( " su pedido de remera " + art1.color + " es de un valor de " + art1.precio)
    
    } if( pedido == 2 ){
        alert( " su pedido de remera " + art2.color + " es de un valor de " + art2.precio) 
     
    } if( pedido == 3 ){
        alert( " su pedido de remera " + art3.color + " es de un valor de " + art3.precio)
        
        }if(pedido != 1 || 2 || 3){
            pedidoErroneo = Number(prompt(" quiere realizar su pedido correctamente \n.1 si \n.2 no "))
        }if (pedidoErroneo == 2){
            alert("no vuelva mas")
            
        }else if (pedidoErroneo == 1){
            alert("vuelva a realizar el pedido")
            carrito()
        }
}