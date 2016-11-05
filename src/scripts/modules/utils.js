module.exports = {
	flexBody: () => {
		const $left = $('#bodyLeft');
		const $right = $('#bodyRight');
		$(window).on('load resize', () => {
			const winW = $(window).width();
			const pd = (winW - 960) / 2;
			$left.css({ right: pd + 320 });
			$right.css({ left: pd + 640 });
		});	
	}
}