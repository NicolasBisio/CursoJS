const btnComprar = document.querySelector(".btn.btn__comprar")

const cargando = () => `<img src="./img/loading.gif" class="imagen__carga" alt="cargando" title="Confirmando su compra">`

const mensajeCompra = (titulo, textoBoton, icono) => {
    return Swal.fire({
        title: titulo,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
        icon: icono,
        confirmButtonText: textoBoton
    })
}

const carritoVacio = () => {
    mensajeCompra("Por favor, agregar al carrito al menos un amigurumi.", "Ir a comprar", "warning")
}

const compraExitosa = () => {
    btnComprar.innerHTML = cargando()
    new Compra()
}

btnComprar.addEventListener("click", () => carrito.length > 0 ? compraExitosa() : carritoVacio())

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
    btnDeleteOn()
    btnDeleteAllOn()
}

const btnDeleteOn = () => {
    const btnDelete = document.querySelectorAll(".checkout__delete")
    btnDelete.forEach(btn => {
        btn.addEventListener("click", (e) => {
            let aEliminar = carrito.findIndex(producto => producto.nombre === e.target.id)
            carrito.splice(aEliminar, 1)
            localStorage.setItem("carrito", JSON.stringify(carrito))
            mostrarCarrito()
        })
    })
}

const btnDeleteAllOn = () => {
    const btnDeleteAll = document.querySelector(".checkout__deleteall")
    btnDeleteAll.addEventListener("click", () => {
        let productosCarrito = carrito.length
        carrito.splice(0, productosCarrito)
        localStorage.setItem("carrito", JSON.stringify(carrito))
        mostrarCarrito()
    })
}

recuperarCarrito()
mostrarCarrito()