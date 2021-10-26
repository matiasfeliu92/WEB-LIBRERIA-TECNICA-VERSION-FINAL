let carrito = []

let stockProductos = []

//PETICION DE DATOS AL JSON LOCAL, A TRAVES DE AJAX

$.getJSON("./json/stock.json", (response, success) => {
    stockProductos = response

    mostrarProductos(stockProductos)
    console.log(stockProductos)
})

//FUNCION PARA MOSTRAR LOS PRODUCTOS EN LA PAGINA WEB

const mostrarProductos = (stockProductos) => {
    $('#contenedor-productos').html("")

    stockProductos.forEach((producto) => {
        $('#contenedor-productos').append(`
        <div class= "producto">
            <h3>${producto.nombre}</h3>
            <img src=${producto.img} alt="">
            <p class="precioProducto">Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})" class="boton-agregar">Agregar al carrito <i class="fas fa-shopping-cart"></i></button>
        </div>
        `)
    })
}

//FUNCION PARA AGREGAR LOS PRODUCTOS AL CARRITO A TRAVES DEL BOTON AGREGAR

const agregarAlCarrito = (item) => {

    const productoEnCarrito = carrito.find((prod) => prod.id === item)

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++
    } else {

        const producto = stockProductos.find((prod) => prod.id === item)

        carrito.push({ id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: 1 })
    }
    localStorage.setItem('carrito', JSON.stringify(carrito))

    actualizarCarrito()
}

//FUNCION PARA QUE, A MEDIDA QUE SE AGREGAN O ELIMINAN PRODUCTOS, SE ACTUALICE EL CARRITO CON LAS CANTIDADES

const actualizarCarrito = () => {
    $('#carrito-contenedor').html("")
    carrito = JSON.parse(localStorage.getItem('carrito'));
    carrito.forEach((prod) => {
        $('#carrito-contenedor').append(
            `
            <div class= "productoEnCarrito">
                <p>${prod.nombre}</p>
                <p>Precio: $${prod.precio}</p>
                <p>Cantidad: ${prod.cantidad}</p>
                <button onclick="eliminarProducto(${prod.id})" class="boton-eliminar">-</button>
            </div>
             `
        )
    })

    $('#contadorCarrito').html(carrito.reduce((acc, prod) => acc += prod.cantidad, 0))
    $('#precioTotal').html(carrito.reduce((acc, prod) => acc += prod.precio * prod.cantidad, 0))
}

if (localStorage.getItem('carrito')) {
    actualizarCarrito();
}

//FUNCION PARA ELIMINAR PRODUCTOS DEL CARRITO, DE A UNO

const eliminarProducto = (itemId) => {
    const producto = carrito.find((prod) => prod.id === itemId)

    producto.cantidad--

        if (producto.cantidad === 0) {
            const index = carrito.indexOf(producto)
            carrito.splice(index, 1)
        }

    localStorage.setItem('carrito', JSON.stringify(carrito))

    actualizarCarrito()
}

//FUNCION PARA FINALIZAR LA COMPRA Y VACIAR EL CARRITO

const finalizarCompra = () => {
    $('#finalizar').click(() => {
        $('#carrito-contenedor').html("")
        $('.finalizarCompra').addClass('modal-active')
        localStorage.removeItem('carrito')
        $('#contadorCarrito').html(0)
        $('#precioTotal').html(0)
    })
}

finalizarCompra()