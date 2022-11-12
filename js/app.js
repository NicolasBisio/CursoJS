const URL = "https://636e8c97bb9cf402c804b356.mockapi.io/Amigurumis"
const container = document.querySelector("div.container")



const activarBotonesAdd = () => {
    const botonesAdd = document.querySelectorAll(".btnAgregar")
    botonesAdd.forEach(btn => {
        btn.addEventListener("click", () => {
            agregarAlCarrito(btn.id)
        })
    })
}

const cargarTarjetas = async () => {
    let generarHTML = ""
    let activarBtn = true

    try {
        const respuesta = await fetch(URL)
        productos = await respuesta.json()
        productos.forEach(producto => generarHTML += retornoCard(producto))
    } catch (error) {
        generarHTML = devuelveError()
        activarBtn = false
    } finally {
        container.innerHTML = generarHTML
        activarBtn && activarBotonesAdd()
    }
}

const toast = (mensaje) => {
    Toastify({
        text: mensaje,
        duration: 2500,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
    }).showToast();
}

const agregarAlCarrito = (amigurumis) => {
    let resultado = productos.find(prod => prod.nombre === amigurumis)
    if (resultado !== undefined) {
        carrito.push(resultado)
        guardarCarrito()
        toast(`Agregaste ${amigurumis} al carrito`)
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
cargarTarjetas()
