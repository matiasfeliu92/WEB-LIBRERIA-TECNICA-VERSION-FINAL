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

$('.cerrarPresentacion').click(() => {
    // $('.presentacion').removeClass('modal-active')
    $('.presentacion').css({ "display": "none" })
})