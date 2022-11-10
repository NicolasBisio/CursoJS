const recuperarCarrito = () => {
    if (localStorage.getItem("carrito")) {
        let carritoRecuperado = JSON.parse(localStorage.getItem("carrito"))
        carritoRecuperado.forEach(producto => carrito.push(producto))
    }
    else {
        console.warn("No se encontró un carrito previamente guardado.")
    }
}

const mostrarCarrito = () => {
    let tablaCheckout = ""
    const checkout__tbody = document.querySelector("tbody.checkout__tbody")
    carrito.forEach(producto => {
        tablaCheckout += `<tr>
                            <td><img src="./img/${producto.imagen}.jpg" alt="${producto.imagen}" class="checkout__imagen"></td>
                            <td class="checkout__columna--nombre">${producto.nombre}</td>
                            <td>$ ${producto.precio}</td>
                            <td><img src="./img/tacho.png" alt="delete" class="checkout__delete" id="${producto.nombre}" title="Borrar producto"></td>
                        </tr>`
    })
    checkout__tbody.innerHTML = tablaCheckout

    let totalCarrito = carrito.reduce((acc, producto) => acc + producto.precio, 0)
    checkout__tbody.innerHTML += `<tr>
                                <th></th>
                                <th>TOTAL</th>
                                <th>$ ${totalCarrito}</th>
                                <th><img src="./img/tacho.png" alt="delete" class="checkout__deleteall" title="Borrar todo"></th>
                            </tr>`
    activarBotonesDelete()
    activarBotonDeleteAll()
}

const activarBotonesDelete = () => {
    const botonesDelete = document.querySelectorAll(".checkout__delete")
    botonesDelete.forEach(btn => {
        btn.addEventListener("click", (e) => {
            let aEliminar = carrito.findIndex(producto => producto.nombre === e.target.id)
            carrito.splice(aEliminar, 1)
            localStorage.setItem("carrito", JSON.stringify(carrito))
            mostrarCarrito()
        })
    })
}

const activarBotonDeleteAll = () => {
    const botonDeleteAll = document.querySelector(".checkout__deleteall")
    botonDeleteAll.addEventListener("click", ()=> {
        let productosCarrito = carrito.length
        carrito.splice(0, productosCarrito)
        localStorage.setItem("carrito", JSON.stringify(carrito))
        mostrarCarrito()
    })


}


//SE RECUPERA EL CARRITO AL CARGAR INDEX.HTML
recuperarCarrito()

//SE MUESTRAN LOS PRODUCTOS EN LA TABLA DE CHECKOUT.HTML
/* carrito.length > 0 &&  */
mostrarCarrito()
