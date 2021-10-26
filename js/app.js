$('#dark').click(() => {
    $('body').toggleClass("dark-mode")
    $('header').toggleClass("fondoHeaderFooter")
    $('header').addClass("dark-mode")
    $('footer').toggleClass("fondoHeaderFooter")
    $('footer').addClass("dark-mode")
})

$('#boton-carrito').click(() => {
    $('.modal-contenedor').addClass('modal-active')
})

$('#carritoCerrar').click(() => {
    $('.modal-contenedor').removeClass('modal-active')
})

$('.modal-carrito').click((event) => {
    event.stopPropagation()
})

$('.finalizarCompra').mouseover(() => {
    $('.finalizarCompra').fadeOut(5000)
    $('.modal-contenedor').removeClass('modal-active')
        // location.reload()
})