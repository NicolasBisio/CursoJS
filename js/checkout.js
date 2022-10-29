const mostrarCarrito = () => {
    let tablaCheckout = ""
    const checkout__tbody = document.querySelector("tbody.checkout__tbody")
    carrito.forEach(producto => {
        tablaCheckout += `<tr>
                            <td></td>
                            <td>${producto.nombre}</td>
                            <td>${producto.precio}</td>
                        </tr>`
    })
    checkout__tbody.innerHTML = tablaCheckout
}

/* //SE MUESTRAN LOS PRODUCTOS EN LA TABLA DE CHECKOUT.HTML
mostrarCarrito() */
