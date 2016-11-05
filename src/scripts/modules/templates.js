module.exports = {
	if: (type, x, y) => {
		const tmp = (text) => {
			return `<div class="figure if" data-x="${x}" data-y="${y}">${text}</div>`;
		}
		switch(type) {
			case 'center':
				return tmp('センサ');
			case 'left':
				return tmp('左センサ');
			case 'right':
				return tmp('右センサ');
		}
	}
}