document.addEventListener("DOMContentLoaded", ()=>{
    //Productos de la tienda
    const productos = [
        {
            id: 1,
            nombre: "Teclado",
            precio: 60,
            imagen: "teclado.jpg",
            tipo: "Teclado",
            especificaciones: {
                switch: "azul",
                tipo: "60%"
            }
        },
        {
            id: 2,
            nombre: "Raton",
            precio: 40,
            imagen: "raton.jpg",
            tipo: "Raton",
            especificaciones: {
                dpi: "3600",
                color: "blanco"
            }
        },
        {
            id: 3,
            nombre: "Monitor",
            precio: 230,
            imagen: "monitor.jpg",
            tipo: "monitor",
            especificaciones: {
                resolucion: "1080p",
                pulgadas: "49"
            }
        },
        {
            id: 4,
            nombre: "Monitor",
            precio: 230,
            imagen: "monitor.jpg",
            tipo: "monitor",
            especificaciones: {
                resolucion: "1080p",
                pulgadas: "27"
            }
        }
        
    ]

    
    let carrito = []    //Carrito de la compra
    const divisa = '€'  //Opcion de cambiar divisa
    const items = document.querySelector("#items")
    const carritoDom = document.querySelector("#carrito")
    const total = document.querySelector("#total")
    const botonVaciar = document.querySelector("#boton-vaciar")
    const miLocalStorage = window.localStorage

    //Funcion que crea los card de los productos de la tienda
    function mostrarProductos(){
        //Por cada producto que hay se crea un elemento distinto
        productos.forEach(producto =>{
            const div = document.createElement("div")
            div.classList.add("card", "col-sm-4")

            const cardBody = document.createElement("div")
            cardBody.classList.add("card-body")

            const cardTitle = document.createElement("h4")
            cardTitle.classList.add("card-title")
            cardTitle.textContent = producto.nombre

            const cardImage = document.createElement("img")
            cardImage.classList.add("img-fluid")
            cardImage.setAttribute("src", "assets/img/"+producto.imagen)

            const cardPrecio = document.createElement("p")
            cardPrecio.classList.add("card-text")
            cardPrecio.textContent = `${producto.precio}${divisa}`

            const cardBoton = document.createElement("button")
            cardBoton.classList.add("btn", "btn-primary")
            cardBoton.textContent = "Añadir al carrito"
            cardBoton.setAttribute("marcador", producto.id)
            cardBoton.addEventListener("click", anyadirProductoalCarrito)

            cardBody.appendChild(cardImage)
            cardBody.appendChild(cardTitle)
            cardBody.appendChild(cardPrecio)
            cardBody.appendChild(cardBoton)
            div.appendChild(cardBody)
            items.appendChild(div)
        })
    }


    function anyadirProductoalCarrito(p){
        carrito.push(p.target.getAttribute("marcador"))
        renderizarCarrito()
        guardarCarritoEnLocalStorage()
    }


    function renderizarCarrito(){
        carritoDom.textContent = ''

        const carritoSinDuplicados = [...new Set (carrito)]

        carritoSinDuplicados.forEach((p)=>{
            const miItem = productos.filter((itemProductos)=>{
                return itemProductos.id ===parseInt(p)
            })

            const numUnidades = carrito.reduce((total, itemId)=>{
                return itemId === p ? total += 1 : total
            },0)
            
            const li = document.createElement("li")
            li.classList.add("list-group-item", "text-right", "mx-2")
            li.textContent = `${numUnidades} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`
            
            const botonBorrar = document.createElement("button")
            botonBorrar.classList.add("btn", "btn-danger", "mx-5")
            botonBorrar.textContent = "X"
            botonBorrar.style.marginLeft = "1rem"
            botonBorrar.dataset.item = p
            botonBorrar.addEventListener("click", borrarItemCarrito)

            li.appendChild(botonBorrar)
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
    }

    function calcularTotal(){
        return carrito.reduce((total, item)=>{
            const i = productos.filter((itemCarrito)=>{
                return itemCarrito.id === parseInt(item)
            })

            return total + i[0].precio
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
    mostrarProductos()
    renderizarCarrito()

})