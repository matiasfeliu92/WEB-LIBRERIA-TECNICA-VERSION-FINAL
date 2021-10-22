$('.boton-agregar').click(() => {
    $('body').toggleClass("dark-mode")
        // $('.tituloPagina').toggleClass("tituloWhite")
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