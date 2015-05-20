$("#menu_btn").click(function (event) {
	event.preventDefault();
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
});

