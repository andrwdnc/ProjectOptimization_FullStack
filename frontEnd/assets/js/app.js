
const url = "http://localhost:3000/api/v1/product/"
const config = {
    method: "GET",
    headers:{
        Accept:"application/json", "Content-Type": "application/json"
    }
}


async function fetchData(){
    const response = await fetch(url,config)
    .then((res)=> res.json())
    .then((data)=>{
        const products = data.products

        let carrito = []    //Carrito de la compra
        const divisa = '€'  //Opcion de cambiar divisa
        const items = document.querySelector("#items")
        const carritoDom = document.querySelector("#carrito")
        const total = document.querySelector("#total")
        const botonVaciar = document.querySelector("#boton-vaciar")
        const miLocalStorage = window.localStorage


        for(let product of products){
            const div = document.createElement("div")
            div.classList.add("card", "col-3")

            const cardBody = document.createElement("div")
            cardBody.classList.add("card-body")

            const cardTitle = document.createElement("h5")
            cardTitle.classList.add("card-title")
            cardTitle.textContent = product.name

            const cardImage = document.createElement("img")
            cardImage.classList.add("img-fluid")
            cardImage.setAttribute("src", "assets/img/"+product.img)

            const cardPrecio = document.createElement("p")
            cardPrecio.classList.add("card-text")
            cardPrecio.textContent = `${product.price}${divisa}`

            const cardBoton = document.createElement("button")
            cardBoton.classList.add("btn", "btn-primary")
            cardBoton.textContent = "Añadir al carrito"
            cardBoton.setAttribute("marcador", product._id)
            cardBoton.addEventListener("click", anyadirProductoalCarrito)

            cardBody.appendChild(cardTitle)
            cardBody.appendChild(cardImage)
            cardBody.appendChild(cardPrecio)
            cardBody.appendChild(cardBoton)
            div.appendChild(cardBody)
            items.appendChild(div)
        }
        function anyadirProductoalCarrito(p){
            carrito.push(p.target.getAttribute("marcador"))
            renderizarCarrito()
            guardarCarritoEnLocalStorage()
        }
        
        function renderizarCarrito(){
            carritoDom.textContent = ''
            
            const carritoSinDuplicados = [... new Set (carrito)]
            
            carritoSinDuplicados.forEach((p)=>{
                const miItem = products.filter((itemProductos)=>{
                    
                    return itemProductos._id === p
                })
                const numUnidades = carrito.reduce((total, itemId)=>{
                    
                    return itemId === p ? total += 1 : total
                },0)

                const parrafo = document.createElement("p")
                parrafo.textContent = `${numUnidades} x ${miItem[0].name}`
                

                const h5 = document.createElement("h5")
                h5.textContent = `${miItem[0].price}${divisa}`

                const row = document.createElement("div")
                row.classList.add("row")
            
                const li = document.createElement("li")
                li.classList.add("list-group-item", "text-right", "mx-2")
                
                const div = document.createElement("div")
                div.classList.add("col-8")
                
                const reducir = document.createElement("button")
                reducir.classList.add("boton-carrito","col-2","btn", "btn-danger")
                reducir.textContent= "-"
                reducir.dataset.item = p
                reducir.addEventListener("click", reducirCarrito)
                
                const botonBorrar = document.createElement("button")
                botonBorrar.classList.add("boton-carrito","col-2","btn", "btn-danger")
                botonBorrar.textContent = "X"
                botonBorrar.dataset.item = p
                botonBorrar.addEventListener("click", borrarItemCarrito)

                div.appendChild(parrafo)
                div.appendChild(h5)
                row.appendChild(div)
                row.appendChild(botonBorrar)
                row.appendChild(reducir)
                li.appendChild(row)
                carritoDom.appendChild(li)
            })
            total.textContent = calcularTotal()
        }

        function borrarItemCarrito(p){
            const id = p.target.dataset.item
            carrito = carrito.filter((carritoId)=>{
                return carritoId !== id
            })
            renderizarCarrito()
            guardarCarritoEnLocalStorage()
        }

        function reducirCarrito(p){
            const id = p.target.dataset.item
            for(var i = carrito.length -1; i>=0; i--){
                if(carrito[i] === id){
                    carrito.splice(i, 1)
                    break
                }
            }
            
            console.log(carrito)
            renderizarCarrito()
            guardarCarritoEnLocalStorage()
        }
    
        function calcularTotal(){
            return carrito.reduce((total, item)=>{
                const i = products.filter((itemCarrito)=>{
                    return itemCarrito._id === item
                })
                return total + i[0].price
            },0).toFixed(2)
        }
    
        function vaciarCarrito(){
            carrito = []
            renderizarCarrito()
            localStorage.clear()
        }
    
        //Almacena los elementos del carrito en el LocalStorage
        function guardarCarritoEnLocalStorage () {
            miLocalStorage.setItem('carrito', JSON.stringify(carrito));
        }
    
        function cargarCarritoDeLocalStorage () {
            // ¿Existe un carrito previo guardado en LocalStorage?
            if (miLocalStorage.getItem('carrito') !== null) {
                // Carga la información
                carrito = JSON.parse(miLocalStorage.getItem('carrito'));
            }
        }

        botonVaciar.addEventListener("click", vaciarCarrito)
        cargarCarritoDeLocalStorage()
        renderizarCarrito()
    })
    .catch((err)=>console.log(err))

}


fetchData()
