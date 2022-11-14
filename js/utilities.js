let productos = []
const carrito = []

const retornoCard = ({ imagen, nombre, precio }) => {
    return `<div class="card">
                <div class=""><img src="./img/${imagen}.jpg" alt="${imagen}" class="card__imagen" title="${nombre}"></div>
                <div class="card-name">${nombre}</div>
                <div class="card-price">$ ${precio}</div>
                <div class="boton card-button">
                    <button class="btnAgregar" id="${nombre}" title="Pulsa para agregar '${nombre}' al carrito">Agregar</button>
                </div>
            </div>`
}

const devuelveError = () => {
    return `<div class="index__error">
                <div class=""><img src="./img/error.jpg" alt="error" title="Oops!"></div>
                <div class="index__error--titulo">Hemos tenido un inconveniente para cargar los amigurumis</div>
                <div class="index__error--subtitulo">Por favor, aguarde unos instantes e intente nuevamente</div>
                <div class="boton card-button">
                    <a href="index.html"><button class="btn">Intentar de nuevo</button></a>
                </div>
            </div>`
}

const devuelveNumeroCarrito = () => {
    return `<p>${carrito.length}</p>`
}

class Compra {
    constructor() {
        setTimeout(() => {
            btnComprar.innerHTML = "Realizado"
            mensajeCompra("¡Muchas gracias por su compra!", "Volver al sitio", "success").then(result => {
                if (result.isConfirmed) {
                    localStorage.removeItem("carrito")
                    location.href = "index.html"
                }
            })
        }, 5000);
    }

    control() {
        return ("Operación realizada con éxito.")
    }
}