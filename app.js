const contProductos = document.getElementById('contProductos')
const modalProdPadre = document.getElementById('modalProdPadre')
let notificacion = document.querySelector('.notificacion')
const btnVaciar = document.getElementById('vaciarCarrito')
const total = document.getElementById('total')
let carrito = []

document.addEventListener('DOMContentLoaded', () =>{
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        carritoAct()
    }
})

btnVaciar.addEventListener('click', ()=>{
    carrito.length = 0
    carritoAct()
})

fetch('productos.json')
        .then((response) =>response.json())
        .then((productos) =>
         productos.forEach((producto) =>{
            const div = document.createElement("div")
            div.classList.add('product')
            div.innerHTML=`
            <img src=${producto.imagen} class="imagen">
            <div class="divProd">
                <h3>${producto.nombre} </h3>
                <h4> $${producto.precio}</h4>
                <button id="agregar${producto.id}" class="btnAgregar" <iconify-icon icon="carbon:add-filled" style="color: orange;" width="20" height="20"></iconify-icon> Add</button>
            </div>
            
            `  
            contProductos.appendChild(div)

            const btn = document.getElementById(`agregar${producto.id}`)
            btn.addEventListener('click', ()=>{
                agregarAlCarrito(producto.id)
                
                
            })
           
        })
        )

        //creo una funcion que agregue al carrito
        const agregarAlCarrito = (prodId) => {
            const existe = carrito.some (prod => prod.id === prodId)
            if (existe){
                const prod = carrito.map(prod =>{
                    if(prod.id === prodId){
                        prod.cantidad++
                    }
                })
            }else{
                const item = productos.find((prod) => prod.id === prodId)
                carrito.push(item)
                
                console.log(carrito)
            }
        carritoAct()
        }

        const carritoDelete = (prodId) => {
            const item = carrito.find((prod) => prod.id === prodId)
            const indice = carrito.indexOf(item)
            carrito.splice(indice,1)
            carritoAct()
            
        }

        const carritoAct = () =>{
            modalProdPadre.innerHTML = ""

            carrito.forEach((prod) => {
                const div = document.createElement('div')
                div.className = ('modalProd')
                div.innerHTML =`
                <img src=${prod.imagen} class="imagen">
                <p>${prod.nombre}</p>
                <p>Precio :  ${prod.precio*prod.cantidad}</p>
                <p>Cantidad: <span id="cant">${prod.cantidad}</span></p>
                <button onclick= "carritoDelete(${prod.id})" class="btnDelete">X</button>
                `
                modalProdPadre.appendChild(div)

                localStorage.setItem('carrito', JSON.stringify(carrito))
            })
            notificacion.innerText = carrito.length
            total.innerText = carrito.reduce((acc, prod) => acc + prod.precio*prod.cantidad, 0)
        }

        

        

        
        
      


