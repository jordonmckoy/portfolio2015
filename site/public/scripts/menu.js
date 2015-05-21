toggleMenu = function () {
	$('.ghost').each(function () {
		if ($(this).hasClass('busters') === false) {
			$(this).addClass('busters');
			$(this).transition({opacity:'1',visibility:"visible",right:'15px'},800,'ease-in-out');
		} else {
			$(this).transition({opacity:'0',visibility:"hidden",right:'-15px'},800,'ease-in-out');
			$(this).removeClass('busters');
			$('#menu_btn').blur();
		}
	});
	$('ul.menu').toggleClass('collapsed');
}

$("#menu_btn").bind("click tap", function () {
	//event.preventDefault();
	toggleMenu();

	return false;
});

$("#contact_btn").bind("click tap", function () {

	var mobile = $('#menu_btn').is(':hidden');

	$.get('/contact', {isMobile : mobile, fromBtn : true}, function(result) {
		$('.content').html(result);
	});

	// TODO check mobile support
	history.pushState(null,null,'contact');

	toggleMenu();

	return false;
});