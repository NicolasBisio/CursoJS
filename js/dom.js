const container = document.querySelector("div.container")

const activarBotonesAdd = () => {
    const botonesAdd = document.querySelectorAll(".button.button-outline")
    botonesAdd.forEach(btn => {
        btn.addEventListener("click", () => {
            agregarAlCarrito(btn.id)
        })
    })
}

const cargarProductos = () => {
    container.innerHTML = ""
    productos.forEach(producto => {
        container.innerHTML += retornoCard(producto)
    })
    activarBotonesAdd()
}

const agregarAlCarrito = (amigurumis) => {
    let resultado = productos.find(prod => prod.nombre === amigurumis)
    if (resultado !== undefined) {
        carrito.push(resultado)
        guardarCarrito()
    }
}

const guardarCarrito = () => {
    carrito.length !== 0 && localStorage.setItem("carrito", JSON.stringify(carrito))
}

const recuperarCarrito = () => {
    if (localStorage.getItem("carrito")) {
        let carritoRecuperado = JSON.parse(localStorage.getItem("carrito"))
        carritoRecuperado.forEach(producto => carrito.push(producto))
    }
    else {
        console.warn("No se encontró un carrito previamente guardado.")
    }
}


//SE RECUPERA EL CARRITO AL CARGAR INDEX.HTML
recuperarCarrito()

//SE CARGAN LOS PRODUCTOS EN EL INDEX.HTML
cargarProductos()
