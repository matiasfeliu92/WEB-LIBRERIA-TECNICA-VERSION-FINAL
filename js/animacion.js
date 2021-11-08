$(document).ready(() => {
    $('.presentacion').addClass('modal-active')
})

$('#cerrar-presentacion').click(() => {
    $('#modal-presentacion').removeClass('modal-active')
})

$('.finalizarCompra').css({ "background-color": "gray", "color": "black", "font-weight": "bolder" })