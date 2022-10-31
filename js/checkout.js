const recuperarCarrito = () => {
    if (localStorage.getItem("carrito")) {
        let carritoRecuperado = JSON.parse(localStorage.getItem("carrito"))
        carritoRecuperado.forEach(producto => carrito.push(producto))
    }
    else {
        console.warn("No se encontró un carrito previamente guardado.")
    }
}

const mostrarCarrito = ()=> {
    let tablaCheckout = ""
    const checkout__tbody = document.querySelector("tbody.checkout__tbody")
    carrito.forEach(producto => {
        tablaCheckout += `<tr class="checkout__td">
                            <td class="checkout__td"><img src="./img/${producto.imagen}.jpg" alt="${producto.imagen}" class="checkout__imagen"></td>
                            <td>${producto.nombre}</td>
                            <td class="checkout__td">$ ${producto.precio}</td>
                            <td class="checkout__td"><img src="./img/tacho.png" alt="tacho" class="checkout__tacho"></td>
                        </tr>`
    })
    checkout__tbody.innerHTML = tablaCheckout
}

//SE RECUPERA EL CARRITO AL CARGAR INDEX.HTML
recuperarCarrito()

//SE MUESTRAN LOS PRODUCTOS EN LA TABLA DE CHECKOUT.HTML
mostrarCarrito()
