; (function (undefined) {
	"use strict"
	var _global;

	// 工具函数 - 对象合并
	function extend(o, n, override) {
		for (var key in n) {
			if (n.hasOwnProperty(key) && (!o.hasOwnProperty(key) || override)) {
				o[key] = n[key];
			}
		}
		return o;
	}
	function banner(opt) {
		var defaultConfig = {
			time: 500,
			width: 850,
			height: 90,
			autoPlay: true
		};
		this.timeid = 0;
		this.index = 0;
		this.opt = extend(defaultConfig, opt, true);
		this.items = this.opt.el.querySelectorAll('li');

		this.init();
	}
	banner.prototype = {
		constructor: this,
		init: function () {
			var self = this;

			//div的鼠标移入移出事件
			box.onmouseover = function () {
				self.stop();
			};
			box.onmouseout = function () {
				self.start();
			};
		},
		show: function (num) {
			var items = this.items;
			for (var i = 0, item; item = items[i]; i++) {
				item.style.display = 'none';
			}
			items[num].style.display = 'block';
		},
		start: function () {
			var self = this,
				index = this.index,
				length = this.items.length;

			self.play = setInterval(function () {
				index++;
				index >= length && (index = 0);
				self.show(index);
			}, 500)
		},
		stop: function () {
			clearInterval(this.play);
		}
	}

	// 最后将插件对象暴露给全局对象
	_global = (function () {
		return this || (0, eval)('this');
	}());
	if (typeof module !== "undefined" && module.exports) {
		module.exports = banner;
	}
	else if (typeof define === "function" && define.amd) {
		define(function () { return banner; });
	}
	else {
		!('banner' in _global) && (_global.banner = banner);
	}
})();