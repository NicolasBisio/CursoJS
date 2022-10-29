const retornoCard = (producto) => {
    return `<div class="card">
                <div class=""><img src="./img/${producto.imagen}.jpg" alt="${producto.imagen}" class="card__imagen"></div>
                <div class="card-name">${producto.nombre}</div>
                <div class="card-price">$ ${producto.precio}</div>
                <div class="boton card-button">
                    <button class="button button-outline button-add" id="${producto.nombre}" title="Pulsa para agregar '${producto.nombre}' al carrito">+</button>
                </div>
            </div>`

}
