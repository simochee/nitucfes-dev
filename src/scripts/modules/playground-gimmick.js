const store = require('./dataStore');
const tmps = require('./templates');

let inputQueue = [];

const updateFigures = () => {
	$('.figure').each(function() {
		const x = $(this).data('x');
		const y = $(this).data('y');
		$(this).css({
			top: store.margin.top + (80 * (y + 0.5)),
			left: 320 * (y + 1)
		});
		if(store.level >= y) {
			store.level ++;
		}
	});
}

module.exports = {
	updateBaseHeight: () => {
		const len = store.level.length;
		let height = (store.level * 80) + 60 + store.margin.top + store.margin.bottom;
		for(let i = 1; i < len; i++) {

		}
		$('#playground').height(height);
	},
	chooseElement: () => {
		const $parts = $('#parts');
		$('.choose').on('click', function() {
			const x = $(this).data('x');
			$(this).addClass('focus');
			if(x === 0) {
				$parts.addClass('active show-if show-action');
			} else {
				$parts.addClass('active show-action');
			}
			$(this).on('click.close', function() {
				$(this).removeClass('focus');
				$parts.removeClass('active show-if show-action');
				$(this).off('click.close');
			});
		});
	},
	insertIf: () => {
		$(document).on('click', '.show-if .row .if', function() {
			const type = $(this).data('type');
			const $focus = $('.choose.focus');
			const x = $focus.data('x');
			const y = $focus.data('y');
			const html = tmps.if(type, x, y);
			$focus.before(html).remove();
			updateFigures();
		});
	}
}