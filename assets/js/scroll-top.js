// Este script para el bello smooth scroll
// Scroll Top
$(function(){
    $('#scroll').click(function(f){
        f.preventDefault();
        $('html, body').animate({scrollTop: $('.formulario').offset().top}, 500);
    });
});