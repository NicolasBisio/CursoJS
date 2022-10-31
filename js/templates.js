const retornoCard = ({imagen, nombre, precio}) => {
    return `<div class="card">
                <div class=""><img src="./img/${imagen}.jpg" alt="${imagen}" class="card__imagen"></div>
                <div class="card-name">${nombre}</div>
                <div class="card-price">$ ${precio}</div>
                <div class="boton card-button">
                    <button class="button button-outline button-add" id="${nombre}" title="Pulsa para agregar '${nombre}' al carrito">+</button>
                </div>
            </div>`

}
