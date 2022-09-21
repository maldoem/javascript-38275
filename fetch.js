const desafet = document.getElementById('desafet')
const finalizada = document.getElementById('finalizada')

function desafio(){
    fetch('prodfetch.json')
            .then((response) =>response.json())
            .then((data) => data.forEach((info) =>{
                const productos = document.createElement("div")
                productos.classList.add('produc')
                productos.innerHTML=`
                <h3>${info.art} ${info.tipo}</h3>
                <img src="${info.image}" class="imagen">
                <h4> $${info.precio}</h4>
                `  
                finalizada.appendChild(productos)          
            }))
}
desafet.addEventListener('click', desafio)
    