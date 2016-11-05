const anime = require('animejs');

const gimmick = require('./playground-gimmick');

// 読み込み時の用意
$(function() {
	gimmick.updateBaseHeight();
	gimmick.chooseElement();
	// 要素挿入
	gimmick.insertIf();
});