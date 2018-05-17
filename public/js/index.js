window.addEventListener("load", function() {
    setTimeout(function() {
    	$('.fondo-imagen').addClass('animacion');
    	$('.js-top').addClass('animated fadeOutLeft');
    	$('.js-contenido__first--contenido').addClass('animated fadeInRight');
    	setTimeout(function() {
    		$('.js-top').removeClass('animated fadeOutLeft');
    		$('.js-top').addClass('animated fadeInRight');
	    	$('.js-contenido__first--contenido').addClass('animated fadeOutLeft');
    		$('.js-contenido__second').addClass('animated fadeInRight');
	    },3000);
    },3000);
});
var $win = $(window);
$win.scroll(function() {
	if ($win.scrollTop() > 0) {
		$("nav").addClass("navbarcolor");
	} else {
		$("nav").removeClass("navbarcolor");
	}
});
$('a.link-section[href^="#"]').click(function(e) {
 	var target = $(this).attr('href');
 	var strip = target.slice(1);
 	var anchor = $("section[id='" + strip + "']");
 	e.preventDefault();
 	y = (anchor.offset() || {
 		"top" : NaN
 	}).top;
 	$('html, body').animate({
	 		scrollTop : (y - 20)
	 	}, 'slow');
});